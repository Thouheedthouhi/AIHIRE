from dotenv import load_dotenv
import os

load_dotenv()


class Settings:
    PROJECT_NAME = "AIHire"

    API_VERSION = "v1"

    # MongoDB
    MONGODB_URL = os.getenv("MONGODB_URL")

    # JWT
    JWT_SECRET = os.getenv("JWT_SECRET")
    JWT_ALGORITHM = "HS256"

    # Gemini
    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")


settings = Settings()