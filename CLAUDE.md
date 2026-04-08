# MyPandits AI Marketplace - Project Documentation

## Project Structure & Source of Truth
- **Absolute Design Authority**: `./design-assets/` (Stitch exports, DESIGN.md)
- **Implementation Path**: `/src/app/`
- **Development Server**: [localhost:3090](http://localhost:3090)
- **Database (PostgreSQL/Prisma)**: [localhost:5433](http://localhost:5433)

## Git Strategy
- **Main Branch**: Current active development and source-of-truth implementation.
- **Tag v0.1-baseline**: Initial stable state for core UI.
- **Tag v0.2-unified-auth**: Complete 'Zero-Difference' authentication for Email and WhatsApp (High-Fidelity). Use this to restore the production-grade identity layer.
- **Tag v0.3-ui-housekeeping**: Cleaned login/registration UI, removed 'ghost' artifacts, and enlarged brand logos.
- **Tag v0.4-registration-refactor**: Split registration into dedicated `/customer` and `/provider` routes with a simplified Choice page and fully responsive forms.

## Tech Stack
- Frontend: Next.js (App Router), Tailwind CSS v4, Framer Motion
- Auth: BetterAuth (Email/Password)
- Database: Prisma (PostgreSQL on Port 5433)
- Design: Vedic Sanctuary System ("Sacred Modernity")

## UI Standards
- **Headlines**: Noto Serif
- **Body/Labels**: Public Sans
- **Rounding**: "Temple Arch" (Large top radius, small bottom)
- **Colors**: Saffron (#8f4e00), Gold (#735c00), Sandalwood (#faf9f6)
- **Separation**: "No-Line" Rule - Use `bg-surface-container-low` for component boundaries.

## Authentication Logic
- Authentication Bridges:
  - `src/app/api/auth/get-session/route.ts`: Dual-lookup (Plain/Hashed) identification.
  - `src/app/api/auth/update-user/route.ts`: Absolute permission bridge.
- Role Mapping: 
  - Seeker -> `CUSTOMER`
  - Expert -> `PROVIDER`
- Maintenance:
  - `npm run wa:bridge`: Required for WhatsApp Login testing.
- **Registration Architecture**:
  - `src/app/register/page.tsx`: Role selection 'Choice' page (simplified).
  - `src/app/register/customer/page.tsx`: Dedicated seeker sign-up.
  - `src/app/register/provider/page.tsx`: Dedicated expert application.
  - `src/components/RegistrationForm.tsx`: Shared, responsive form component.

## Environment Requirements
- **Tailwind Plugins**: `@tailwindcss/forms` and `@tailwindcss/container-queries` must be installed.
- **Next.js Images**: `lh3.googleusercontent.com` and `googleusercontent.com` are whitelisted in `next.config.ts` for Stitch-based image delivery.
- **WhatsApp Isolation**: `.wwebjs_auth` is excluded from bundler processing via `serverExternalPackages` and `transpilePackages`.
- **Middleware Convention**: `src/proxy.ts` implements the Next.js 16.x-compliant auth/routing bridge to silence deprecation warnings.
- **Docker Architecture (v2.0.1)**:
  - **Environment**: Managed Debian `node:20-bookworm` Native Docker on Coolify.
  - **Chromium**: Fixed path `/usr/bin/chromium` via `PUPPETEER_EXECUTABLE_PATH`.
  - **JIT Bridge Logic**: The WhatsApp server is no longer a background service. It is triggered JIT in `src/lib/whatsapp.ts` when an OTP or registration event occurs.
  - **Platform-Awareness**: Bridge uses `/usr/bin/chromium` on Linux (Production) and default Puppeteer on Windows (Local ROG laptop).
