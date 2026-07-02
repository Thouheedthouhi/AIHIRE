from app.database.collections import users_collection
from app.schemas.user import UserSignup
from app.core.security import (
    hash_password,
    verify_password,
    create_access_token,
)


async def create_user(user: UserSignup):
    existing_user = await users_collection.find_one(
        {"email": user.email}
    )

    if existing_user:
        return None

    new_user = {
        "name": user.name,
        "email": user.email,
        "hashed_password": hash_password(user.password),
    }

    result = await users_collection.insert_one(new_user)

    return str(result.inserted_id)


async def login_user(email: str, password: str):

    user = await users_collection.find_one(
        {"email": email}
    )

    if not user:
        return None

    if not verify_password(
        password,
        user["hashed_password"],
    ):
        return None

    token = create_access_token(
        {
            "sub": str(user["_id"]),
            "email": user["email"],
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer",
        "user": {
            "id": str(user["_id"]),
            "name": user["name"],
            "email": user["email"],
        },
    }