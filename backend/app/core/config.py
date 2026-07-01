from dotenv import load_dotenv
import os

load_dotenv()

class Settings:
    PROJECT_NAME = "AIHire"

    API_VERSION = "v1"

    MONGODB_URL = os.getenv("MONGODB_URL")

    JWT_SECRET = os.getenv("JWT_SECRET")

    JWT_ALGORITHM = "HS256"

settings = Settings()