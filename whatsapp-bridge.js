const { execSync } = require('child_process');
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const http = require('http');
const fs = require('fs');
const path = require('path');

/**
 * WhatsApp Background Bridge
 * 
 * Runs a persistent WhatsApp Web session and exposes a mini HTTP API on Port 3095
 * for the Next.js app to send OTPs.
 */

let client;
let isReady = false;
let isInitializing = false;

function createClient() {
    if (isInitializing) return;
    // --- CLINICAL FORCE-CLEAR (Linux/Docker Only) ---
    if (process.platform === 'linux') {
        // Path to your specific session profile lock
        const lockPath = path.join(__dirname, '.wwebjs_auth', 'session', 'SingletonLock');

        try {
            if (fs.existsSync(lockPath)) {
                console.log('--- [Server] Forcefully removing persistent Chromium lock... ---');
                // Using shell 'rm -f' is the most reliable way to break a stale symbolic link in Docker
                execSync(`rm -f "${lockPath}"`);
                console.log('--- [Server] Lock cleared successfully. ---');
            }
        } catch (err) {
            console.log(`[Server] Lock removal warning: ${err.message}`);
        }
    }
    // ------------------------------------------------

    isInitializing = true;
    isReady = false;

    console.log('--- Initializing WhatsApp Client... ---');

    // --- CLINICAL ENVIRONMENT CHECK ---
    let puppeteerConfig = {
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
            '--disable-features=IsolateOrigins,site-per-process',
            '--disable-site-isolation-trials',
        ]
    };

    // Only inject executablePath if we are on the Linux Server
    if (process.platform === 'linux') {
        try {
            const { execSync } = require('child_process');
            const nixPath = execSync('which chromium').toString().trim();
            if (nixPath) {
                puppeteerConfig.executablePath = nixPath;
                console.log(`[Server] Nix Chromium detected: ${nixPath}`);
            }
        } catch (e) {
            // Fallback for standard Linux if Nix search fails
            puppeteerConfig.executablePath = '/usr/bin/chromium';
            console.log(`[Server] Using Linux fallback: ${puppeteerConfig.executablePath}`);
        }
    } else {
        console.log('[Local] Windows detected. Using default local Puppeteer config.');
    }
    // ----------------------------------

    client = new Client({
        authStrategy: new LocalAuth({
            dataPath: './.wwebjs_auth'
        }),
        webVersionCache: {
            type: 'remote',
            remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html',
        },
        puppeteer: puppeteerConfig // Uses the OS-specific config defined above
    });

    client.on('qr', (qr) => {
        console.log('\n--- WHATSAPP QR CODE ---');
        qrcode.generate(qr, { small: true });
        console.log('------------------------\n');
    });

    client.on('ready', () => {
        console.log('--- WhatsApp Bridge is READY on Port 3095 ---');
        isReady = true;
        isInitializing = false;
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

    client.initialize().catch(err => {
        console.error('Initialization Error:', err);
        isInitializing = false;
    });
}

// Initial Launch
createClient();

// Create mini-API server
const server = http.createServer(async (req, res) => {
    // Enable CORS for localhost
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
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', async () => {
            try {
                const { number, otp } = JSON.parse(body);

                if (!isReady || !client) {
                    res.writeHead(503, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'WhatsApp Bridge is not ready or re-initializing' }));
                    return;
                }

                const cleanNumber = number.replace(/\+/g, "");
                const chatId = `${cleanNumber}@c.us`;
                const message = `*Vedic Sanctuary OTP Verification*\n\nYour 6-digit verification code is: *${otp}*\n\nThis code expires in 5 minutes. Please do not share it with anyone.`;

                try {
                    await client.sendMessage(chatId, message);
                    console.log(`Successfully sent OTP to ${number}`);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: true }));
                } catch (sendErr) {
                    console.error('Send Error:', sendErr.message);

                    // Handle detached frame or destroyed context
                    if (sendErr.message.includes('detached Frame') || sendErr.message.includes('Execution context was destroyed')) {
                        console.log('--- CRITICAL: Frame Detached. Attempting recovery... ---');
                        isReady = false;
                        // Sometimes a simple re-auth or client.initialize() works, but a full recreate is safer
                        // Let's try to just wait for the next 'ready' or re-init if it persists
                        res.writeHead(503, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ error: 'Bridge context lost. Automatically recovering, please wait 10 seconds and retry.' }));

                        // Destroy current client and re-init
                        try { client.destroy(); } catch (e) { }
                        createClient();
                    } else {
                        throw sendErr;
                    }
                }

            } catch (err) {
                console.error('Bridge Error:', err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message }));
            }
        });
    } else {
        res.writeHead(404);
        res.end();
    }
});

const PORT = process.env.WHATSAPP_PORT || 3095;
server.listen(PORT, '127.0.0.1', () => {
    console.log(`WhatsApp API Server listening on http://localhost:${PORT}`);
});
