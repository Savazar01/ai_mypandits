# --- MyPandits Architecture: Debian-Based Docker Infrastructure ---
# Base Image: Stable Bookworm build for Node/Next.js
FROM node:20-bookworm

# 1. System Dependencies: Full Chromium Rendering Suite
# Includes all libraries required for Puppeteer to run in a headless environment
RUN apt-get update && apt-get install -y \
  build-essential \
  python3 \
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
  asound2 \
  ca-certificates \
  fonts-liberation \
  libasound2 \
  lsb-release \
  xdg-utils \
  wget \
  --no-install-recommends \
  && rm -rf /var/lib/apt/lists/*

# 2. Environment: Puppeteer & Chromium Linkage
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

# 3. Workspace Initialization
WORKDIR /usr/src/app

# 4. Dependency Layer: Install Packages
COPY package*.json ./
RUN npm install --include=dev --force

# 5. Application Layer: Build Next.js
COPY . .
RUN npx prisma generate
RUN npm run build

# 6. Runtime: Expose Web and WhatsApp Ports
EXPOSE 3090 3095

# 7. Execution: Start for Production
# Note: whatsapp-bridge.js will be spawned by JIT logic or manual trigger
CMD ["npm", "run", "start", "--", "-p", "3090"]
