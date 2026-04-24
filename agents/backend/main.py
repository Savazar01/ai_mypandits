from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import events, orchestration

app = FastAPI(title="SavazAI Event Orchestration API", version="1.0.0")

# Enable CORS for the Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this to the frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(events.router, prefix="/api/v1", tags=["Events"])
app.include_router(orchestration.router, prefix="/api/v1", tags=["Orchestration"])

@app.get("/")
def read_root():
    return {"status": "online", "message": "SavazAI Orchestration System"}
