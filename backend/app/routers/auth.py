from fastapi import APIRouter, HTTPException

from app.schemas.user import UserSignup, UserLogin
from app.services.auth_service import create_user, login_user

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post("/signup")
async def signup(user: UserSignup):

    user_id = await create_user(user)

    if user_id is None:
        raise HTTPException(
            status_code=400,
            detail="Email already exists",
        )

    return {
        "message": "User created successfully",
        "user_id": user_id,
    }


@router.post("/login")
async def login(user: UserLogin):

    response = await login_user(
        user.email,
        user.password,
    )

    if response is None:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password",
        )

    return response