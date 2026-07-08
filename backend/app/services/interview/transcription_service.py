from faster_whisper import WhisperModel

# Load Whisper model once
model = WhisperModel(
    "base",
    device="cpu",
    compute_type="int8",
)


def transcribe_audio(audio_path: str) -> str:
    """
    Transcribe an audio file using Faster Whisper.
    """

    segments, info = model.transcribe(
        audio_path,
        beam_size=5,
        vad_filter=True,
    )

    transcript = ""

    for segment in segments:
        transcript += segment.text.strip() + " "

    return transcript.strip()