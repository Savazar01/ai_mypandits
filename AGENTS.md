<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 🤖 Agentic AI & Event Orchestration (v2.0.1+)

## Infrastructure Foundation
The MyPandits ecosystem is now built on a **Debian-based Docker architecture** (`node:20-bookworm`). This provides a hardened Linux environment with all necessary system libraries (`libatk`, `libnss3`, etc.) for advanced agent operations.

## AI Worker Stability
- **Headless Capabilities**: Standardized Chromium paths ensure that AI workers performing web-scraping or browser-based automation have a 100% reliable execution environment.
- **Event Orchestration**: The stable Docker base allows for the integration of low-latency message queues and background workers to manage complex Vedic ritual lifecycles.

## JIT Awareness
Agents should be aware that services like the WhatsApp Bridge are **Just-In-Time (JIT)**. They should be invoked on-demand via API triggers rather than assumed to be always-on background processes.

## Scaling Vision
The long-term roadmap for agentic operations involves transitioning from monolithic task execution to a distributed micro-agent architecture. Agents should prioritize modularity, ensuring that individual tasks (e.g., horoscope generation, ritual scheduling, user notification) can be scaled independently across multiple worker nodes as demand increases.
