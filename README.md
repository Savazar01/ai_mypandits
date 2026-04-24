# MyPandits: AI-Powered Event Orchestration

**Professional Events, Seamlessly Orchestrated.**  
MyPandits is a premium event orchestration platform that connects customers with verified providers for every aspect of professional, social, and corporate events. Powered by AI-driven coordination, we bring precision and excellence to your most important moments.

---

## 🌟 Core Features

### 🏢 Unified Expertise Ecosystem
Connect with specialized service providers across 11 core roles:
- **Event Consultant**: Professional guidance and expert coordination.
- **Venue Provider**: High-end physical venues and professional spaces.
- **Venue Management**: Logistics and on-site event operations.
- **Decorator**: Modern and creative event aesthetics.
- **Caterer**: Premium cuisine tailored to your event requirements.
- **Photographer/Videographer**: Capturing professional memories.
- **Event Materials**: Essential supplies and logistics kits.
- **Media & Design**: Digital invites and professional documentation.
- **DJ & Live Entertainment**: Musical orchestration and entertainment services.
- **Event Planner**: End-to-end event coordination.
- **Other**: Specialized services (e.g., Design consultants, specialty acts).

### 🎨 Intelligent Event Orchestrator
A 4-stage guided workflow designed to take an event from concept to launch:
1. **Event Basics**: Define your vision and set a **Primary Event Location** that acts as the anchor for all logistics.
2. **Timeline Orchestration**: Schedule multiple days and activities. Use **Location Inheritance** to automatically default activity locations to the day's primary site.
3. **Guest Management**: Intelligent list management with the ability to assign guests to the **Full Event** or specific individual activities.
4. **Final Review & Launch**: A high-fidelity summary screen for final verification before AI-driven service matching begins.


### 📦 Dynamic Catalog Management
Providers can manage their entire service inventory using a **Unified Catalog System**.
- **Bulk Upload**: Standardized CSV-based service integration.
- **Flexible Pricing**: Support for hourly, per-pc, and event-based pricing models.
- **Regional Currency**: Automatic detection of currency based on provider location.

## AI Worker Stability
- **Headless Capabilities**: Standardized Chromium paths in the standalone **WhatsApp Service** ensure that AI workers have a 100% reliable execution environment on the VPS.
- **Hybrid Service Orchestration**: The system automatically adapts to its environment, providing a robust micro-service isolation in production and a lightweight monolith flow for developers on the ROG.
- **Event Orchestration**: The stable Docker base allows for the integration of low-latency message queues to manage complex event lifecycles.

## Service Awareness
Agents should be aware that services like the WhatsApp Bridge are now **Hybrid**. At runtime, they are accessible via internal service networking (e.g., `http://whatsapp-service:3095`) on Linux, or managed via JIT-kickstarted local processes on Windows.

## scaling Vision (v2.1.0+)
The long-term roadmap for agentic operations involves transitioning from monolithic task execution to a distributed micro-agent architecture. The v2.1.0-hybrid release is the foundational first step towards this vision.

- **Role-Based Access**: Strict middleware steering and dedicated dashboards for Customers and Providers.
- **Session Privacy**: Secure, hashing-aware token management via BetterAuth v1.5.6.

---

## 🛠️ Local Setup Guide

### 1. Prerequisites
- **Node.js** (v18+)
- **PostgreSQL** instance running on Port **5433**.

### 2. Environment Configuration
Create a `.env` file in the root directory and configure the following:

```env
# Database Connection
DATABASE_URL="postgresql://postgres:user@localhost:5433/mypandits_factory?schema=public"

# BetterAuth Security
BETTER_AUTH_SECRET="your_generated_secret"
BETTER_AUTH_URL="http://localhost:3090"
BETTER_AUTH_ORIGINS="http://localhost:3090"

# WhatsApp Service (Local)
WHATSAPP_SERVICE_URL="http://localhost:3095"

```

### 3. Database Initialization
Synchronize your database schema and generate the Prisma Client:
```bash
npx prisma generate
npx prisma db push
```

### 4. Running the Application
```bash
# Terminal 1: Application Dev Server
npm run dev

# WhatsApp Bridge (Just-In-Time)
# The WhatsApp bridge no longer requires a manual background process.
# It is automatically initialized JIT (Just-In-Time) when you trigger 
# a login or registration flow. Note: Requires Node.js 20+ for stable Chromium execution.
```
Open **[http://localhost:3090](http://localhost:3090)** to view the MyPandits Platform.

---

## 🚀 Production Deployment (v2.1.0)

### 🏗️ Hybrid Architecture (v2.1.0-hybrid)

The MyPandits ecosystem uses a decoupled, hybrid architecture to ensure maximum stability across platform transitions.

#### 1. Service Orchestration
- **Main Application**: Next.js service running on Port 3090.
- **WhatsApp Bridge**: 
    - **Production (Linux)**: Standalone micro-service container on Port 3095. Internal communication via Docker networking (e.g., `http://whatsapp-service:3095`).
    - **Development (Windows)**: Managed JIT (Just-In-Time) monolith flow using `whatsapp-bridge.js`.
- **Platform Branching**: `src/lib/whatsapp.ts` automatically detects the environment (`win32` vs `linux`) to route traffic to the appropriate bridge.

#### 2. Environment Variables (Definitive Table)

| Service | Variable | Purpose |
| :--- | :--- | :--- |
| **Main App** | `BETTER_AUTH_SECRET` | Primary encryption secret for session tokens. |
| | `BETTER_AUTH_URL` | Base identity URL (Primary domain). |
| | `BETTER_AUTH_ORIGINS` | Comma-separated allowlist for sub-domains. |
| | `WHATSAPP_SERVICE_URL`| Internal URL of the WhatsApp Bridge. |
| **Worker** | `WHATSAPP_PORT` | Port the standalone service listens on (Default: 3095). |
| | `WHATSAPP_SESSION_PATH`| Persistent volume path for browser session storage. |
| | `PUPPETEER_EXECUTABLE_PATH`| Path to the Chromium/Chrome binary for headless mode. |

#### 3. Self-Healing & Persistence
- **Chromium Startup**: The WhatsApp Worker implements a **Self-healing Cleanup** block that automatically purges stale `SingletonLock`, `SingletonCookie`, and `SingletonSocket` files from the session directory before initialization, preventing launch failures in production.
- **Volume Storage**: Production requires a persistent Docker volume mapped to `/data/whatsapp_session` to avoid re-authentication on container restarts.

#### 4. Coolify Deployment Quirks & Troubleshooting
- **Memory Limits**: The Next.js `turbopack` build process is highly memory-intensive. Ensure `docker-compose.yml` does **not** contain artificial memory limits (`deploy: resources: limits`) that could trigger OOM kills on high-memory VPS servers.
- **Dependency Installation**: Coolify automatically injects `--build-arg NODE_ENV=production`. This causes `npm ci` to skip installing `devDependencies` (like `typescript` or `@tailwindcss/postcss`), breaking the static build phase. The `Dockerfile` explicitly forces `RUN NODE_ENV=development npm ci --include=dev` to bypass this constraint during the builder stage.
- **SQLAlchemy DB Dialect**: Coolify provisions PostgreSQL databases with the `postgres://` scheme. Modern SQLAlchemy requires `postgresql://`. The backend's `database.py` automatically intercepts and rewrites this connection string to `postgresql+psycopg2://` on the fly.
- **Empty Database Provisioning**: When Coolify spins up a fresh database, it contains no tables. The FastAPI `main.py` includes a startup hook (`models.Base.metadata.create_all`) to automatically generate all required tables (e.g., `events`, `activities`) on its first boot.

---

## 🎨 Design System & Visual Identity

### 🏗️ Google Stitch Integration
This project utilizes **Google Stitch** for rapid UI component orchestration and design system synchronization. Our development workflow involves:
- **Stitch-Driven Scaffolding**: Core landing and authentication screens are scaffolded using Stitch to ensure architectural consistency.
- **Design Synchronization**: Layouts and visual hierarchies are kept in sync with the Stitch workspace.

### 🏗️ Design Heritage: Professional Modernity
The project's visual identity is defined in the [**`design-assets/`**](file:///c:/Users/AVASA/Downloads/ai_mypandits/design-assets) directory.
- **Professional Modernity System**: A high-end editorial experience that honors excellence through contemporary luxury, featuring intentional asymmetry and professional geometries.
- **Mobile-First Accessibility**: Optimized for all devices with fluid typography, stacked mobile layouts, and friendly touch targets.
- **Asset Management**: All brand-compliant images, graphics, and icons are sourced locally to maintain a cohesive, premium user experience.

---

- **Infrastructure**: Native Docker (Hybrid Architecture v2.1.0)
- **WhatsApp Bridge**: 
  - **VPS (Production)**: Standalone Micro-service (`whatsapp-service/`)
  - **ROG (Development)**: Local Monolith (`whatsapp-bridge.js`)
- **Discovery Strategy**: Automatic Platform-Aware Routing (win32 vs linux)
- **Session Persistence**: 
  - **VPS**: Coolify Volume (`/data/whatsapp_session`)
  - **ROG**: Local `.wwebjs_auth/`
- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: [BetterAuth](https://better-auth.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Styling**: Vanilla CSS and Glassmorphism principles.

---
© 2026 MyPandits Ecosystem. All rights reserved.
