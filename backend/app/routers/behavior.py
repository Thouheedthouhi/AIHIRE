from fastapi import APIRouter

from app.schemas.behavior import (
    BehaviorRequest,
    BehaviorResponse,
)
from app.services.behavior.behavior_service import (
    behavior_service,
)

router = APIRouter(
    prefix="/behavior",
    tags=["Behavior"],
)


@router.post(
    "/predict",
    response_model=BehaviorResponse,
)
def predict_behavior(
    request: BehaviorRequest,
):

    prediction = behavior_service.predict(
        request.model_dump()
    )

    return prediction