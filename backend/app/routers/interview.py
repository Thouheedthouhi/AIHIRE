from fastapi import (
    APIRouter,
    File,
    Form,
    UploadFile,
)

from app.schemas.interview import (
    InterviewStartRequest,
)

from app.services.interview.question_generator import (
    generate_questions,
)

from app.services.interview.audio_service import (
    save_audio_and_transcribe,
)

from app.services.interview.evaluation_service import (
    evaluate_answer,
)

from app.services.interview.resume_service import (
    get_resume_context,
)

router = APIRouter(
    prefix="/interview",
    tags=["Interview"],
)


# --------------------------------------------------
# Start Interview
# --------------------------------------------------

@router.post("/start")
async def start_interview(
    request: InterviewStartRequest,
):
    # -----------------------------
    # Custom Interview
    # -----------------------------

    if request.mode == "custom":
        return {
            "questions": request.questions
        }

    # -----------------------------
    # AI Interview
    # -----------------------------

    questions = generate_questions(
        role=request.target_role,
        difficulty=request.difficulty,
        interview_type=request.interview_type,
        question_count=request.question_count,
    )

    return {
        "questions": questions
    }


# --------------------------------------------------
# Upload Audio + Evaluate
# --------------------------------------------------

@router.post("/upload-audio")
async def upload_audio(
    audio: UploadFile = File(...),
    question: str = Form(...),
    role: str = Form(...),
):
    """
    Upload candidate audio,
    transcribe it,
    evaluate the answer,
    and return the result.
    """

    result = await save_audio_and_transcribe(
        audio
    )

    transcript = result["transcript"]

    resume = get_resume_context() or ""

    evaluation = evaluate_answer(
        question=question,
        answer=transcript,
        resume=resume,
        role=role,
    )

    return {
        "success": True,
        "transcript": transcript,
        "evaluation": evaluation,
        "audio_path": result["audio_path"],
    }