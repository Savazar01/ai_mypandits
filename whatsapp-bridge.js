const { execSync } = require('child_process');
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

/**
 * WhatsApp Background Bridge - Production Stable Version
 * Supports: Windows (Local Dev) & Linux/Docker (Coolify)
 */

let client;
let isReady = false;
let isInitializing = false;

async function createClient() {
    // 1. GUARD: Prevent multiple simultaneous launch attempts
    if (isInitializing || isReady) return;

    // 2. CLINICAL CLEANUP (Linux/VPS Only)
    // Removes stale Singleton files that cause "Code 21" crashes in Docker
    if (process.platform === 'linux') {
        const sessionDir = path.join(__dirname, '.wwebjs_auth', 'session');
        try {
            if (fs.existsSync(sessionDir)) {
                const files = fs.readdirSync(sessionDir);
                files.forEach(file => {
                    if (file.startsWith('Singleton')) {
                        console.log(`--- [Server] Clearing stale lock: ${file} ---`);
                        fs.unlinkSync(path.join(sessionDir, file));
                    }
                });
            }
        } catch (err) {
            console.log(`[Server] Lock removal skipped: ${err.message}`);
        }
    }

    isInitializing = true;
    isReady = false;

    console.log('--- Initializing WhatsApp Client... ---');

    let puppeteerConfig = {
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
        ]
    };

    // 4. ENVIRONMENT-SPECIFIC CHROMIUM PATH
    if (process.platform === 'linux') {
        const linuxPath = '/usr/bin/chromium';
        if (fs.existsSync(linuxPath)) {
            puppeteerConfig.executablePath = linuxPath;
            console.log(`[Server] Using Linux Chromium: ${puppeteerConfig.executablePath}`);
        } else {
            console.log('[Server] /usr/bin/chromium not found. Using default.');
        }
    } else {
        console.log('[Local] Windows detected. Using default Puppeteer.');
    }

    // 5. CONSTRUCTOR: Integrated with Remote Version Cache
    client = new Client({
        authStrategy: new LocalAuth({
            dataPath: './.wwebjs_auth'
        }),
        webVersionCache: {
            type: 'remote',
            remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html',
        },
        puppeteer: puppeteerConfig
    });

    // 6. EVENT LISTENERS (Moved inside for scope safety)
    client.on('qr', (qr) => {
        console.log('\n--- WHATSAPP QR CODE ---');
        qrcode.generate(qr, { small: true });
        console.log('------------------------\n');
    });

    client.on('ready', () => {
        isReady = true;
        isInitializing = false;
        console.log('--- WhatsApp Bridge is READY on Port 3095 ---');
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

    // 7. EXECUTION
    try {
        await client.initialize();
    } catch (err) {
        console.error('Initialization Error:', err);
        isInitializing = false;
    }
}

// Initial Launch
createClient();

// Create mini-API server
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
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', async () => {
            try {
                const { number, otp } = JSON.parse(body);

                if (!isReady || !client) {
                    res.writeHead(503, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'WhatsApp Bridge is not ready' }));
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

                    if (sendErr.message.includes('detached Frame') || sendErr.message.includes('Execution context was destroyed')) {
                        console.log('--- CRITICAL: Frame Detached. Attempting recovery... ---');
                        isReady = false;
                        try { await client.destroy(); } catch (e) { }
                        createClient();
                        res.writeHead(503, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ error: 'Bridge context lost. Recovering...' }));
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