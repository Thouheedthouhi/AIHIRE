from fastapi import APIRouter, Depends

from app.core.dependencies import get_current_user

router = APIRouter(
    prefix="/profile",
    tags=["Profile"],
)


@router.get("/")
async def get_profile(
    current_user=Depends(get_current_user),
):
    return {
        "name": current_user.get("name"),
        "email": current_user.get("email"),
        "phone": current_user.get("phone", ""),
        "college": current_user.get("college", ""),
    }