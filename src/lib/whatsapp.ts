/**
 * WhatsApp Proxy Client
 * 
 * Instead of running the heavy browser in the Next.js process, it simply
 * talks to the standalone WhatsApp Bridge on http://localhost:3001.
 * 
 * This keeps the Next.js server fast and responsive.
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
        console.error("WhatsApp Proxy Error:", error);
        throw new Error(
            error.message.includes("fetch failed")
                ? "The WhatsApp Bridge is not running. Please start it with 'npm run wa:bridge'."
                : error.message
        );
    }
};
