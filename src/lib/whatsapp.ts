import { exec } from "child_process";

/**
 * WhatsApp Proxy Client
 * 
 * Talk to the standalone WhatsApp Bridge on http://localhost:3095.
 * 
 * If the bridge is not running, we trigger a kickstart (JIT) using child_process.
 */

export const sendWhatsappOTP = async (number: string, otp: string) => {
    console.log(`--- Requesting OTP send to ${number} via Bridge ---`);

    try {
        const response = await fetch("http://localhost:3095/send-otp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ number, otp }),
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.error || "Failed to send code via bridge");
        }

        console.log(`Successfully proxied OTP send to ${number}`);
        return { success: true };
    } catch (error: any) {
        // DETECT: Is the bridge down?
        if (error.message.includes("fetch failed") || error.code === "ECONNREFUSED") {
            console.log("--- WhatsApp Bridge is DOWN. Kickstarting JIT... ---");
            
            // EXEC: Start the bridge process in the background
            // We use 'node whatsapp-bridge.js' directly to ensure it matches the script
            exec("node whatsapp-bridge.js", (err) => {
                if (err) {
                    console.error("Failed to kickstart WhatsApp Bridge:", err);
                }
            });

            // Throw special initializing error
            throw new Error("WHATSAPP_INITIALIZING");
        }

        console.error("WhatsApp Proxy Error:", error);
        throw error;
    }
};
