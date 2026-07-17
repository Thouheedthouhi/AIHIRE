from contextlib import asynccontextmanager
from app.routers import history
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers.interview import router as interview_router
from app.database.database import database
from app.routers.auth import router as auth_router
from app.routers.resume import router as resume_router
from app.routers import behavior
from app.routers import report
from app.routers import dashboard
from app.routers import profile
from app.routers.accounts import router as account_router
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

        # Production Frontend
        "https://aihire-wine.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
# Routers
app.include_router(auth_router)
app.include_router(resume_router)
app.include_router(interview_router)
app.include_router(behavior.router)
app.include_router(report.router)
app.include_router(history.router)
app.include_router(dashboard.router)
app.include_router(profile.router)
app.include_router(account_router)

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