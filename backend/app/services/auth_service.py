from app.database.collections import users_collection
from app.schemas.user import UserSignup
from app.core.security import hash_password


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