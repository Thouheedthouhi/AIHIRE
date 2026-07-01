from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.database.database import database
from app.routers.auth import router as auth_router


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

app.include_router(auth_router)


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