import json
import os

from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)


def generate_questions(
    resume_text: str,
    target_role: str,
    interview_type: str,
    difficulty: str,
):
    prompt = f"""
You are a Senior Technical Interviewer.

Generate between 5 and 8 interview questions.

Rules:

1. 60% Resume based
2. 30% Role based
3. 10% HR

Role:
{target_role}

Interview Type:
{interview_type}

Difficulty:
{difficulty}

Resume:

{resume_text}

Return ONLY a JSON array.

Example:

[
"Tell me about yourself.",
"Explain your AI Resume Analyzer project.",
"What challenges did you face while developing your project?"
]
"""

    response = model.generate_content(prompt)

    text = (
        response.text
        .replace("```json", "")
        .replace("```", "")
        .strip()
    )

    return json.loads(text)