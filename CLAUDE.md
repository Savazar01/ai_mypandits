# MyPandits AI Marketplace - Project Documentation

## Project Structure & Source of Truth
- **Absolute Design Authority**: `./design-assets/` (Stitch exports, DESIGN.md)
- **Implementation Path**: `/src/app/`
- **Development Server**: [localhost:3090](http://localhost:3090)
- **Database (PostgreSQL/Prisma)**: [localhost:5433](http://localhost:5433)

## Git Strategy
- **Main Branch**: Current active development and source-of-truth implementation.
- **Tag v0.1-baseline**: Initial stable state for core UI.
- **Tag v0.2-unified-auth**: Complete 'Zero-Difference' authentication for Email and WhatsApp.
- **Tag v0.4-registration-refactor**: Split registration into dedicated `/customer` and `/provider` routes.
- **Tag v1.0-mobile-orchestration**: Global mobile responsiveness overhaul and Event Orchestration workflow stabilization.

## Tech Stack
- **Frontend**: Next.js (App Router), Tailwind CSS v4, Framer Motion
- **Auth**: BetterAuth v1.5.6 (Email & WhatsApp Bridge)
- **Database**: Prisma (PostgreSQL)
- **Design System**: Professional Modernity (Optimized for Web/Mobile)

## Terminology Standards (Strict Enforcement)
- **Roles**: **Customer** (Seeker) and **Provider** (Expert).
- **Entities**: **Event** (The overall project) and **Activity** (Specific event component).
- **Organization**: **Event Hub** or **Customer Dashboard**.
- **Location**: **Primary Event Location** (Inherited by activities if selected).
- **Status**: Planned, Orchestrating, Completed.

## UI & Responsiveness Standards
- **Headlines**: Noto Serif (Fluid sizing: `text-4xl` to `text-8xl`)
- **Body/Labels**: Public Sans (Minimum `text-sm`)
- **Rounding**: "Professional Arch" (Large top radius: `rounded-t-[4rem]`, small bottom)
- **Colors**: Saffron (#8f4e00), Gold (#735c00), Sandalwood (#faf9f6)
- **Mobile-First Layouts**:
    - Use `grid-cols-1 md:grid-cols-2` for all complex sections.
    - **Header**: Persistent Sign-In action on mobile.
    - **Touch Targets**: Minimum 44px height for interactive elements.
- **Separation**: "No-Line" Rule - Use tonal layering (`bg-surface-container-low`) instead of borders.

## Feature Logic & Workflow
- **Event Creator (4 Stages)**:
    - **Step 1 (Basics)**: Captured title and mandatory **Primary Location**.
    - **Step 2 (Timeline)**: Location Inheritance logic - Activities default to primary location unless updated.
    - **Step 3 (Guests)**: Intelligent list management. Assignments can be to the full event or specific sessions.
    - **Step 4 (Final Review)**: Verification before AI initialization.
- **Authentication Bridges**:
  - `src/app/api/auth/get-session/route.ts`: Dual-lookup (Plain/Hashed) identification.
  - `src/app/api/auth/update-user/route.ts`: Absolute permission bridge.

## Hybrid Architecture (v2.1.0-hybrid)
- **Platform Branching Logic**: Use `process.platform === 'win32'` vs `'linux'` for middleware verification.
- **Development (Windows)**: Local JIT-managed monolith flow using `whatsapp-bridge.js`.
- **Production (Linux)**: Robust Debian-based Docker architecture (`node:20-bookworm-slim`) with standalone WhatsApp service.
- **Service Discovery**: Docker DNS (`http://whatsapp-service:3095`) vs local fallback.

## Environment Requirements
- **Tailwind Plugins**: `@tailwindcss/forms` and `@tailwindcss/container-queries`.
- **Next.js Images**: Whitelisted `lh3.googleusercontent.com` and `googleusercontent.com`.
- **WhatsApp Isolation**: `.wwebjs_auth` is excluded from bundler processing.
