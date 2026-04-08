# MyPandits: The Vedic Sanctuary Marketplace

**Authentic Traditions, Seamlessly Orchestrated.**  
MyPandits is a next-generation marketplace that connects customers with verified providers for every aspect of Vedic rituals, ceremonies, and spiritual events. Powered by AI-driven orchestration, we bring precision and beauty to your most sacred moments.

---

## 🌟 Core Features

### 🏢 Unified Expertise Ecosystem
Connect with specialized service providers across 11 core roles:
- **Pandit/Priest**: Authentic Vedic rituals and pujas.
- **Temple**: Physical venues for spiritual ceremonies.
- **Venue Provider**: Banquet halls and event spaces.
- **Decorator**: Traditional and modern event aesthetics.
- **Caterer**: Sathvic and ritual-compliant cuisine.
- **Photographer/Videographer**: Capturing sacred memories.
- **Puja Supplies**: Essential ritual inventory and kits.
- **Media & Design**: Digital invites and ritual documentation.
- **DJ & Live Music**: Spiritual and festive musical orchestration.
- **Event Planner**: End-to-end ritual coordination.
- **Other**: Specialized services (e.g., Rangoli artists, Mehendi).


### 📦 Dynamic Catalog Management
Providers can manage their entire service inventory using a **Unified Catalog System**.
- **Bulk Upload**: Standardized CSV-based service integration.
- **Flexible Pricing**: Support for hourly, per-pc, and event-based pricing models.
- **Regional Currency**: Automatic detection of currency based on provider location.

## AI Worker Stability
- **Headless Capabilities**: Standardized Chromium paths in the standalone **WhatsApp Service** ensure that AI workers have a 100% reliable execution environment on the VPS.
- **Hybrid Service Orchestration**: The system automatically adapts to its environment, providing a robust micro-service isolation in production and a lightweight monolith flow for developers on the ROG.
- **Event Orchestration**: The stable Docker base allows for the integration of low-latency message queues to manage complex Vedic ritual lifecycles.

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
# a login or registration flow.
```
Open **[http://localhost:3090](http://localhost:3090)** to view the Vedic Sanctuary.

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

---

## 🎨 Design System & Visual Identity

### 🏗️ Google Stitch Integration
This project utilizes **Google Stitch** for rapid UI component orchestration and design system synchronization. Our development workflow involves:
- **Stitch-Driven Scaffolding**: Core landing and authentication screens are scaffolded using Stitch to ensure architectural consistency.
- **Design Synchronization**: Layouts and visual hierarchies are kept in sync with the Stitch workspace.

### 🍱 Design Assets
The project's visual soul is defined in the [**`design-assets/`**](file:///c:/Users/AVASA/Downloads/ai_mypandits/design-assets) directory.
- **Vedic Sanctuary Aesthetic**: Contains the color palettes, typography, and sacred geometry motifs that define the "Vedic Sanctuary" look and feel.
- **Asset Management**: All brand-compliant images, mandalas, and icons are sourced from this local repository to maintain a premium, cohesive user experience.

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
