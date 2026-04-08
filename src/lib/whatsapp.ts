import { exec } from "child_process";

/**
 * WhatsApp Proxy Client (v2.1.0-hybrid)
 * 
 * Target: Standalone Service (Linux) OR Local Bridge (Windows).
 */

export const sendWhatsappOTP = async (number: string, otp: string) => {
    // [PROD CHECK] Robust Environment-Aware URL Management
    const rawUrl = process.env.WHATSAPP_SERVICE_URL || 
        (process.platform === 'linux' ? 'http://whatsapp-service:3095' : 'http://localhost:3095');
    
    // Standardize URL: Remove extra slashes and trim spaces
    const SERVICE_URL = rawUrl.trim().replace(/\/+$/, "");

    console.log(">>>> [PROD CHECK] WhatsApp Service URL (Normalized):", SERVICE_URL);

    const isLinux = process.platform === 'linux';
    console.log(`--- [v2.1.0-hybrid] Target: ${isLinux ? 'VPS/Standalone' : 'ROG/Local'} via ${SERVICE_URL} ---`);

    try {
        const response = await fetch(`${SERVICE_URL}/send-otp`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json", // Explicit Accept header for robustness
            },
            body: JSON.stringify({ number, otp }),
        });

        if (!response.ok) {
            let errorBody;
            try {
                errorBody = await response.json();
            } catch (e) {
                errorBody = await response.text();
            }
            
            // LOG: Expanded error reporting for production debugging
            console.error(`>>>> [PROD ERROR] WhatsApp Worker responded with ${response.status}:`, errorBody);
            
            throw new Error(errorBody?.error || errorBody || "Internal Server Error");
        }

        console.log(`Successfully proxied OTP send to ${number}`);
        return { success: true };
    } catch (error: any) {
        // DETECT: Is the service down or DNS not resolved?
        if (error.message.includes("fetch failed") || error.code === "ECONNREFUSED" || error.code === "ENOTFOUND") {
            
            // ROG Mode: Automatically kickstart the local bridge (Windows fallback)
            if (!isLinux) {
                console.log("--- [v2.1.0-hybrid] ROG Fallback: Kickstarting Local Bridge... ---");
                exec("node whatsapp-bridge.js", (err) => {
                    if (err) console.error("Failed to kickstart local bridge:", err);
                });
                throw new Error("WHATSAPP_INITIALIZING");
            }

            // VPS Mode: Service must be managed by Coolify (No JIT fallback)
            console.error("--- [v2.1.0-hybrid] Standalone Service UNREACHABLE (VPS Mode) ---");
            throw new Error("WHATSAPP_SERVICE_OFFLINE");
        }

        console.error("WhatsApp Proxy Error:", error);
        throw error;
    }
};
