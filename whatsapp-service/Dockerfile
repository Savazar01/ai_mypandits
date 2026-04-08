# --- WhatsApp Standalone Service (v2.1.0-hybrid) ---
FROM node:20-bookworm-slim

# 1. System Dependencies: Minimal Chromium Suite for Puppeteer
RUN apt-get update && apt-get install -y \
  chromium \
  libnss3 \
  libatk1.0-0 \
  libatk-bridge2.0-0 \
  libcups2 \
  libdrm2 \
  libxcomposite1 \
  libxdamage1 \
  libxext6 \
  libxfixes3 \
  libxrandr2 \
  libgbm1 \
  libpango-1.0-0 \
  ca-certificates \
  fonts-liberation \
  libasound2 \
  lsb-release \
  xdg-utils \
  wget \
  --no-install-recommends \
  && rm -rf /var/lib/apt/lists/*

# 2. Environment Configuration
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV WHATSAPP_PORT=3095
ENV WHATSAPP_SESSION_PATH=/data/whatsapp_session

# 3. Workspace Initialization
WORKDIR /usr/src/app

# 4. Dependency Layer: Deterministic 'npm ci'
COPY package*.json ./
RUN npm ci

# 5. Application Layer
COPY . .

# 6. Runtime: Expose Port
EXPOSE 3095

# 7. Persistence Layer: Native Data Storage for LocalAuth
RUN mkdir -p /data/whatsapp_session && chmod -R 777 /data

# 8. Execution: Start Standalone Service
CMD ["node", "index.js"]
