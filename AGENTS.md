<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 🤖 Agentic AI & Event Orchestration (v2.1.0-hybrid)

## Infrastructure Foundation
The MyPandits ecosystem utilizes a **Hybrid Architecture** for maximum cross-platform stability:
- **Production (Linux/Coolify)**: Robust **Debian-based Docker architecture** using a unified `docker-compose.yml`.
  - **Network**: Services join the `coolify` external network for integration with managed databases and other platform services.
  - **Database**: Utilizes a standalone managed Postgres service (via `DATABASE_URL`).
  - **Resource Management**: Containers use `deploy.resources.limits` and optimized `shm_size` (2GB) for Chromium stability.
- **Development (Windows)**: Local JIT-managed monolith flow or `docker compose` with local overrides for rapid iteration.

## AI Worker Stability
- **Headless Capabilities**: Standardized Chromium paths in the standalone **WhatsApp Service** ensure that AI workers have a 100% reliable execution environment on the VPS.
- **Service Awareness**: Agents must use environment-aware discovery for service endpoints.
  - **Linux**: Service discovery via Docker DNS (e.g., `http://whatsapp-service:3095`).
  - **Windows**: Fallback to `http://localhost:3095` with JIT kickstart.
- **Platform Branching Logic**: Use `process.platform === 'win32'` or `process.platform === 'linux'` to switch between local development and production-hardened behaviors (e.g., middleware verification methods or authentication origin trust).
- **Communication Standards**: All cross-container handshakes must use explicit `Content-Type: application/json` headers and sanitized numeric payloads to ensure worker compatibility.
- **Persistent Sessions**: Support for persistent data storage at `/data/whatsapp_session` ensures session stability across worker restarts.

## Scaling Vision (v2.1.0+)
The long-term roadmap for agentic operations involves transitioning from monolithic task execution to a distributed micro-agent architecture. The v2.1.0-hybrid release is the foundational first step towards this vision.
