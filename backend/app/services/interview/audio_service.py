from pathlib import Path
from uuid import uuid4

from fastapi import UploadFile

from app.services.interview.transcription_service import (
    transcribe_audio,
)

# Temporary folder to store interview recordings
UPLOAD_DIR = Path("uploads/interview_audio")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)


async def save_audio_and_transcribe(
    audio: UploadFile,
):
    """
    Save uploaded audio and return its transcript.
    """

    filename = f"{uuid4()}.webm"

    audio_path = UPLOAD_DIR / filename

    with open(audio_path, "wb") as file:
        file.write(await audio.read())

    transcript = transcribe_audio(
        str(audio_path)
    )

    return {
        "audio_path": str(audio_path),
        "transcript": transcript,
    }