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

### 🔐 Secure Authentication & Multi-Entry Identity
- **Dual-Login Parity**: Unified authentication flow supports both **Email/Password** and **WhatsApp (OTP)** logins with identical permissions and behavior.
- **WhatsApp Integration**: High-fidelity manual session injection ensures a seamless mobile-first identity experience.
- **Registration Split**: Dedicated, mobile-optimized recruitment paths at `/register/customer` and `/register/provider` for clear user steering.
- **Role-Based Access**: Strict middleware steering and dedicated dashboards for Customers and Providers.
- **Social Integration**: Instant sign-in via Google (Gmail).
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

# Google OAuth (Social Login)
GOOGLE_CLIENT_ID="your_google_id"
GOOGLE_CLIENT_SECRET="your_google_secret"
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

## 🚀 Production Deployment (v2.0.1)

### 🏗️ Docker Architecture
The production environment is standardized on a robust **Debian-based Docker architecture** (`node:20-bookworm`). This provides maximum stability for Chromium-based services and future AI workers.

- **Engine**: Native Docker on Coolify.
- **Base Image**: `node:20-bookworm`.
- **Chromium Path**: `/usr/bin/chromium` (Static).
- **System Dependencies**: Managed via the Dockerfile `apt-get` layer (includes `libatk`, `libnss3`, `libgbm1`, etc.).

### ⚡ JIT WhatsApp Bridge
Production uses a **Managed JIT Service** for WhatsApp connectivity. Instead of a background service that runs 24/7, the bridge is dynamically kickstarted by the `/api/auth/whatsapp/send` or registration logic. This prevents Chromium profile locks and optimizes VPS resource usage.

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

- **Infrastructure**: Native Docker (Debian Bookworm)
- **Design Orchestration**: [Google Stitch](https://stitch.google.com/)
- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: [BetterAuth](https://better-auth.com/) & JIT WhatsApp Bridge
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Styling**: Vanilla CSS and Glassmorphism principles.

---
© 2026 MyPandits Ecosystem. All rights reserved.
