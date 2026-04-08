# --- MyPandits Main App: Robust Debian Infrastructure (v2.1.0-hybrid) ---

# Stage 1: Dependency Layer
FROM node:20-bookworm AS deps
WORKDIR /usr/src/app

# Install native build tools
RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
# Skip scripts to avoid Chromium download on VPS
RUN npm ci --ignore-scripts

# Stage 2: Builder Stage
FROM node:20-bookworm AS builder
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
RUN npx prisma generate
RUN npm run build

# Stage 3: Production Runner (Optimized)
FROM node:20-bookworm-slim AS runner
WORKDIR /usr/src/app

# Install healthcheck utilities (Critical for Coolify Deployment)
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

ENV NODE_ENV=production
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV NEXT_TELEMETRY_DISABLED=1

# Copy only production dependencies (Skip Chromium)
COPY package*.json ./
RUN npm ci --omit=dev --ignore-scripts

# Copy built application from builder stage
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/next.config.ts ./

EXPOSE 3090

# Execution: Start for Production on Port 3090
CMD ["npm", "run", "start", "--", "-p", "3090"]
