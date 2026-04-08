<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 🤖 Agentic AI & Event Orchestration (v2.1.0-hybrid)

## Infrastructure Foundation
The MyPandits ecosystem utilizes a **Hybrid Architecture** for maximum cross-platform stability:
- **Production (Linux)**: Robust **Debian-based Docker architecture** (`node:20-bookworm-slim`) with isolated standalone services.
- **Development (Windows)**: Local JIT-managed monolith flow for rapid iteration.

## AI Worker Stability
- **Headless Capabilities**: Standardized Chromium paths in the standalone **WhatsApp Service** ensure that AI workers have a 100% reliable execution environment on the VPS.
- **Service Awareness**: Agents should be aware that services like the WhatsApp Bridge are now **Hybrid**. At runtime, they are accessible via internal service networking (e.g., `http://whatsapp-service:3095`) on Linux, or managed via JIT-kickstarted local processes on Windows.
- **Persistent Sessions**: Support for persistent data storage at `/data/whatsapp_session` ensures session stability across worker restarts.

## Scaling Vision (v2.1.0+)
The long-term roadmap for agentic operations involves transitioning from monolithic task execution to a distributed micro-agent architecture. The v2.1.0-hybrid release is the foundational first step towards this vision.
