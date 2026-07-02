from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.database import database
from app.routers.auth import router as auth_router
from app.routers.resume import router as resume_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    try:
        await database.command("ping")
        print("✅ Connected to MongoDB")
    except Exception as e:
        print(f"❌ MongoDB Connection Error: {e}")

    yield


app = FastAPI(
    title="AIHire API",
    description="Backend API for AIHire",
    version="1.0.0",
    lifespan=lifespan,
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(auth_router)
app.include_router(resume_router)


@app.get("/")
def root():
    return {
        "message": "Welcome to AIHire API 🚀",
        "status": "running",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
    }