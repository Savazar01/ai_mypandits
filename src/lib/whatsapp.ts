import { exec } from "child_process";

/**
 * WhatsApp Proxy Client (v2.1.0-hybrid)
 * 
 * Target: Standalone Service (Linux) OR Local Bridge (Windows).
 */

export const sendWhatsappOTP = async (number: string, otp: string) => {
    const isLinux = process.platform === 'linux';
    const SERVICE_URL = isLinux 
        ? (process.env.WHATSAPP_SERVICE_URL || "http://whatsapp-service:3095")
        : "http://localhost:3095";

    console.log(`--- [v2.1.0-hybrid] Target: ${isLinux ? 'VPS/Standalone' : 'ROG/Local'} via ${SERVICE_URL} ---`);

    try {
        const response = await fetch(`${SERVICE_URL}/send-otp`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ number, otp }),
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.error || "Failed to send code");
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
