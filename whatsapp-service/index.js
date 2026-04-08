const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const http = require('http');
const fs = require('fs');
const path = require('path');

/**
 * WhatsApp Standalone Service (v2.1.0)
 * 
 * Target Architecture: high-performance Debian Service (VPS)
 * Primary Goal: Decoupled, production-ready WhatsApp bridge.
 */

const PORT = process.env.WHATSAPP_PORT || 3095;
const SESSION_PATH = process.env.WHATSAPP_SESSION_PATH || '/data/whatsapp_session';

console.log(`--- [v2.1.0] Starting Standalone WhatsApp Service on Port ${PORT} ---`);
console.log(`--- Session Persistence Path: ${SESSION_PATH} ---`);

// [STARTUP CLEANUP] Self-healing Chromium block to prevent SingletonLock errors
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
} catch (outerErr) {
    console.warn(`[STARTUP] Lock cleanup block skipped: ${outerErr.message}`);
}

// 1. Initialize WhatsApp Client with LocalAuth Persistence
const client = new Client({
    authStrategy: new LocalAuth({
        dataPath: SESSION_PATH
    }),
    puppeteer: {
        executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || '/usr/bin/chromium',
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--no-zygote',
            '--disable-dev-shm-usage', // Robustness for tight VPS RAM
            '--disable-gpu'
        ]
    }
});

let isReady = false;

// 2. Lifecycle Events
client.on('qr', (qr) => {
    console.log('--- QR CODE RECEIVED (Log in via WhatsApp) ---');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('--- WHATSAPP CLIENT READY ---');
    isReady = true;
});

client.on('authenticated', () => {
    console.log('--- WHATSAPP AUTHENTICATED ---');
});

client.on('auth_failure', (msg) => {
    console.error('--- AUTHENTICATION FAILURE ---', msg);
    isReady = false;
});

client.on('disconnected', (reason) => {
    console.log('--- WHATSAPP DISCONNECTED ---', reason);
    isReady = false;
    // Note: In v2.1.0, the service stays alive and will wait for new QR or session restore.
});

// 3. Start Client
client.initialize().catch(err => {
    console.error('Failed to initialize WhatsApp client:', err);
});

// 4. Standalone Internal API Service
const server = http.createServer((req, res) => {
    // Enable CORS for internal networking
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // Health Check
    if (req.url === '/status' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 
            status: isReady ? 'ready' : 'initializing',
            session_path: SESSION_PATH
        }));
        return;
    }

    // OTP Send Endpoint
    if (req.url === '/send-otp' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', async () => {
            try {
                const { number, otp } = JSON.parse(body);
                
                if (!isReady) {
                    res.writeHead(503, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'WhatsApp Service is not ready yet' }));
                    return;
                }

                // DETECT & STRIP: Remove non-digits (like +, -, spaces) for Puppeteer/WA-Web compatibility
                const cleanNumber = number.replace(/\D/g, '');
                const formattedNumber = `${cleanNumber}@c.us`;

                console.log(`>>>> [v2.1.0] Sending OTP to sanitized number: ${formattedNumber}`);

                if (!isReady) {
                    res.writeHead(503, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'WhatsApp Service is not ready yet', details: 'Client is in: initializing state' }));
                    return;
                }

                await client.sendMessage(formattedNumber, message);
                console.log(`--- [v2.1.0] OTP Sent to ${cleanNumber} ---`);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true }));
            } catch (error) {
                console.error('Error sending message:', error);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ 
                    error: 'Internal Server Error', 
                    details: error.message || 'Unknown Worker Error',
                    code: error.code || 'SEND_FAILURE'
                }));
            }
        });
        return;
    }

    res.writeHead(404);
    res.end();
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`--- Standalone API Listening on 0.0.0.0:${PORT} ---`);
});
