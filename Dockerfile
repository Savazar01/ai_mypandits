# --- MyPandits Main App: Robust Debian Infrastructure (v2.1.0-hybrid) ---

# Stage 1: Dependency Layer
FROM node:22-bookworm AS deps
WORKDIR /usr/src/app

# Install native build tools
RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
# Skip scripts to avoid Chromium download on VPS, but allow critical build scripts
RUN npm ci --ignore-scripts

# Stage 2: Builder Stage
FROM node:22-bookworm AS builder
WORKDIR /usr/src/app

# Accept build arguments injected by Coolify/CI
ARG NEXT_PUBLIC_APP_URL
ENV NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL
ARG PYTHON_BACKEND_URL
ENV PYTHON_BACKEND_URL=$PYTHON_BACKEND_URL
ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL
ARG BETTER_AUTH_URL
ENV BETTER_AUTH_URL=$BETTER_AUTH_URL
ARG BETTER_AUTH_ORIGINS
ENV BETTER_AUTH_ORIGINS=$BETTER_AUTH_ORIGINS
ARG BETTER_AUTH_SECRET
ENV BETTER_AUTH_SECRET=$BETTER_AUTH_SECRET
ARG GOOGLE_CLIENT_ID
ENV GOOGLE_CLIENT_ID=$GOOGLE_CLIENT_ID
ARG GOOGLE_CLIENT_SECRET
ENV GOOGLE_CLIENT_SECRET=$GOOGLE_CLIENT_SECRET

COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
# Generate Prisma Client (outputs to ./generated/prisma/client)
RUN npx prisma generate
ENV NEXT_TELEMETRY_DISABLED=1
RUN NODE_OPTIONS="--max-old-space-size=2048" npm run build

# Stage 3: Development Runner (Hot Reloading)
FROM node:22-bookworm AS development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --ignore-scripts
COPY . .
RUN npx prisma generate
EXPOSE 3090
CMD ["npm", "run", "dev", "--", "-p", "3090"]

# Stage 4: Production Runner (Optimized)
FROM node:22-bookworm-slim AS runner
WORKDIR /usr/src/app

# Install runtime dependencies for Prisma and Healthchecks
RUN apt-get update && apt-get install -y \
    curl \
    openssl \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY package*.json ./
# Install only production dependencies
RUN npm ci --omit=dev --ignore-scripts

# Copy build artifacts and generated files
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/next.config.ts ./
COPY --from=builder /usr/src/app/generated ./generated

EXPOSE 3090
CMD ["npm", "run", "start", "--", "-p", "3090"]
