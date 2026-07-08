import json


def build_interview_prompt(
    resume_text: str,
    role: str,
    difficulty: str,
    interview_type: str,
    question_count: int,
):
    interview_type = interview_type.lower()

    if interview_type == "technical":
        distribution = """
- 70% Resume-based technical questions
- 20% Role-specific technical questions
- 10% Problem-solving questions
"""

    elif interview_type == "hr":
        distribution = """
- 60% Resume-based questions
- 40% Behavioural / HR questions
"""

    else:
        distribution = """
- 50% Resume-based questions
- 30% Role-specific questions
- 20% Behavioural questions
"""

    prompt = f"""
You are a Senior Technical Interviewer.

Your job is to generate personalized interview questions.

==========================
CANDIDATE RESUME
==========================

{resume_text}

==========================
INTERVIEW DETAILS
==========================

Target Role:
{role}

Difficulty:
{difficulty}

Interview Type:
{interview_type.title()}

Number of Questions:
{question_count}

==========================
QUESTION DISTRIBUTION
==========================

{distribution}

==========================
IMPORTANT RULES
==========================

1. Most questions MUST come directly from the candidate's resume.

2. Ask about:
- Projects
- Skills
- Technologies
- Experience
- Internship
- Achievements

3. If the resume contains projects,
ask follow-up implementation questions.

4. Do NOT ask random DSA questions unless required for the role.

5. Do NOT ask about technologies that do not exist in the resume unless they are fundamental for the target role.

6. Questions should feel like a real interview.

7. Return ONLY a JSON array.

Example:

[
    "Tell me about your AIHire project.",
    "Why did you choose FastAPI?",
    "Explain your JWT authentication implementation."
]
"""

    return prompt