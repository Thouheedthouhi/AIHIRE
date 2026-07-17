from fastapi import APIRouter
from app.database.database import database
from bson import ObjectId

router = APIRouter(
    prefix="/account",
    tags=["Account"],
)

@router.delete("/delete/{user_id}")
async def delete_account(user_id: str):

    await database.users.delete_one(
        {"_id": ObjectId(user_id)}
    )

    await database.interview_reports.delete_many(
        {"userId": user_id}
    )

    return {
        "message": "Account deleted successfully"
    }