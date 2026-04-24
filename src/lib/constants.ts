/**
 * SavazAI Core Constants (v2.1.0-hybrid)
 * 
 * Handles environment-aware service discovery for the VPS (Linux) 
 * while maintaining stable localhost defaults for Windows development.
 */

export const PYTHON_BACKEND_URL =
  process.env.PYTHON_BACKEND_URL ||
  (process.platform === "linux"
    ? "http://ai-backend:8090"
    : "http://localhost:8090");

export const WHATSAPP_SERVICE_URL =
  process.env.WHATSAPP_SERVICE_URL ||
  (process.platform === "linux"
    ? "http://whatsapp-service:3095"
    : "http://localhost:3095");
