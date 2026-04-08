# --- MyPandits Main App: Slim Docker Infrastructure (v2.1.0) ---
FROM node:20-bookworm-slim

# 1. Workspace Initialization
WORKDIR /usr/src/app

# 2. Dependency Layer: Install Packages (Clean Install)
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
COPY package*.json ./
# Note: No --force needed; using clean install mode
RUN npm ci

# 3. Application Layer: Build Next.js
COPY . .
RUN npx prisma generate
RUN npm run build

# 4. Runtime: Expose Web Port
EXPOSE 3090

# 5. Execution: Start for Production
CMD ["npm", "run", "start", "--", "-p", "3090"]
