# --- AI Backend: Python FastAPI (v2.1.0-hybrid) ---
FROM python:3.11-slim

# 1. System Dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# 2. Workspace Initialization
WORKDIR /usr/src/app

# 3. Dependency Layer
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 4. Application Layer
COPY . .

# 5. Runtime: Expose Port
EXPOSE 8090

# 7. Execution: Start for Production (8090)
# Use --reload if REFRESH_MODE is set (for local dev)
CMD ["sh", "-c", "if [ \"$REFRESH_MODE\" = \"true\" ]; then uvicorn main:app --host 0.0.0.0 --port 8090 --reload; else uvicorn main:app --host 0.0.0.0 --port 8090; fi"]
