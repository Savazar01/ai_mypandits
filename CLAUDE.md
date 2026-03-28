# MyPandits AI Marketplace - Project Documentation

## Project Structure & Source of Truth
- **Absolute Design Authority**: `./design-assets/` (Stitch exports, DESIGN.md)
- **Implementation Path**: `/src/app/`
- **Development Server**: [localhost:3090](http://localhost:3090)
- **Database (PostgreSQL/Prisma)**: [localhost:5433](http://localhost:5433)

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
- Integration: `src/lib/auth-client.ts`
- Client Hooks: `authClient.signIn.email`, `authClient.signUp.email`
- Role Mapping: 
  - Seeker -> `CUSTOMER`
  - Expert -> `PROVIDER`

## Environment Requirements
- **Tailwind Plugins**: `@tailwindcss/forms` and `@tailwindcss/container-queries` must be installed.
- **Next.js Images**: `lh3.googleusercontent.com` and `googleusercontent.com` are whitelisted in `next.config.ts` for Stitch-based image delivery.
