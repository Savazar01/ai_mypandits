const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const http = require('http');
const fs = require('fs');
const path = require('path');

/**
 * WhatsApp Standalone Service (v2.1.0-hybrid)
 * 
 * Target Architecture: High-performance Debian Service (VPS) & Local Dev (Windows)
 * Goal: Decoupled, self-healing WhatsApp bridge with frame-recovery.
 */

const PORT = process.env.WHATSAPP_PORT || 3095;
const SESSION_PATH = process.env.WHATSAPP_SESSION_PATH || path.join(__dirname, '.wwebjs_auth');

console.log(`--- [v2.1.0-hybrid] Starting Standalone WhatsApp Service on Port ${PORT} ---`);
console.log(`--- Session Persistence Path: ${SESSION_PATH} ---`);

let client;
let isReady = false;
let isInitializing = false;

async function createClient() {
    // 1. GUARD: Prevent multiple simultaneous launch attempts
    if (isInitializing || isReady) return;

    // 2. CLINICAL CLEANUP
    // Removes stale Singleton files that cause "Code 21" crashes in Docker/Linux
    const lockFiles = ['SingletonLock', 'SingletonCookie', 'SingletonSocket'];
    const sessionInnerDir = path.join(SESSION_PATH, 'session');
    
    try {
        if (fs.existsSync(sessionInnerDir)) {
            const files = fs.readdirSync(sessionInnerDir);
            files.forEach(file => {
                if (lockFiles.includes(file)) {
                    console.log(`--- [Server] Startup Cleanup: Removing stale lock: ${file} ---`);
                    fs.unlinkSync(path.join(sessionInnerDir, file));
                }
            });
        }
    } catch (err) {
        console.warn(`[Server] Lock removal skipped: ${err.message}`);
    }

    isInitializing = true;
    isReady = false;

    console.log(`--- [Server] OS Detected: ${process.platform} ---`);

    // 3. PLATFORM-AWARE PUPPETEER CONFIG
    let puppeteerConfig = {
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
            '--no-zygote',
        ]
    };

    if (process.platform === 'linux') {
        console.log('[Server] Configuring Specialized Debian/Docker environment...');
        puppeteerConfig.executablePath = process.env.PUPPETEER_EXECUTABLE_PATH || '/usr/bin/chromium';
    } else {
        console.log('[Local] Windows/macOS detected. Using default Puppeteer flow.');
        puppeteerConfig.args = ['--disable-gpu'];
    }

    // 4. CONSTRUCTOR
    client = new Client({
        authStrategy: new LocalAuth({
            dataPath: SESSION_PATH
        }),
        webVersionCache: {
            type: 'remote',
            remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html',
        },
        puppeteer: puppeteerConfig
    });

    // 5. EVENT LISTENERS
    client.on('qr', (qr) => {
        console.log('\n--- WHATSAPP QR CODE RECEIVED ---');
        qrcode.generate(qr, { small: true });
        console.log('---------------------------------\n');
    });

    client.on('ready', () => {
        isReady = true;
        isInitializing = false;
        console.log('--- WhatsApp Service is READY ---');
    });

    client.on('auth_failure', (msg) => {
        console.error('--- Auth Failure ---', msg);
        isReady = false;
        isInitializing = false;
    });

    client.on('disconnected', (reason) => {
        console.log('--- Disconnected ---', reason);
        isReady = false;
        isInitializing = false;
        // Attempt re-init after a delay
        setTimeout(createClient, 5000);
    });

    // 6. EXECUTION
    try {
        await client.initialize();
    } catch (err) {
        console.error('Initialization Error:', err);
        isInitializing = false;
    }
}

// Initial Launch
createClient();

// 7. API SERVER
const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.method === 'POST' && req.url === '/send-otp') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });

        req.on('end', async () => {
            try {
                const { number, otp } = JSON.parse(body);

                if (!isReady || !client) {
                    res.writeHead(503, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'WhatsApp Service is not ready' }));
                    return;
                }

                const cleanNumber = number.replace(/\+/g, "");
                const chatId = `${cleanNumber}@c.us`;
                const message = `*MyPandits Event Verification*\n\nYour 6-digit verification code is: *${otp}*\n\nThis code expires in 5 minutes. Please do not share it with anyone.`;

                try {
                    await client.sendMessage(chatId, message);
                    console.log(`Successfully sent OTP to ${number}`);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: true }));
                } catch (sendErr) {
                    console.error('Send Error:', sendErr.message);

                    // FRAME RECOVERY LOGIC (v2.1.0-hybrid)
                    if (sendErr.message.includes('detached Frame') || sendErr.message.includes('Execution context was destroyed')) {
                        console.log('--- CRITICAL: Frame Detached. Attempting recovery... ---');
                        isReady = false;
                        try { await client.destroy(); } catch (e) { }
                        createClient();
                        res.writeHead(503, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ error: 'Bridge context lost. Recovering...' }));
                    } else {
                        res.writeHead(500, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ error: sendErr.message }));
                    }
                }
            } catch (err) {
                console.error('API Error:', err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Malformed request or server error' }));
            }
        });
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`--- WhatsApp Standalone API Listening on 0.0.0.0:${PORT} ---`);
});
