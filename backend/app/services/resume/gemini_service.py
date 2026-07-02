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


def generate_ai_feedback(
    resume_text: str,
    target_role: str,
    ats_score: int,
    matched_skills: list,
    missing_skills: list,
    breakdown: dict,
    job_description: str | None = None,
):
    """
    Generate personalized AI career coaching feedback.
    """

    prompt = f"""
You are an expert Software Engineering Career Coach with over 15 years of experience mentoring students and software engineers into companies like Google, Microsoft, Amazon, Meta and Apple.

IMPORTANT

You are NOT a recruiter.

You are NOT evaluating a candidate.

You are coaching the user.

Always speak directly to the user.

Never use phrases like:

- The candidate
- The applicant
- Hiring recommendation
- Recruiter assessment
- We recommend hiring
- Suitable candidate

Always use:

- You
- Your resume
- Your projects
- Your skills
- Your experience

Be encouraging.

Be realistic.

Be constructive.

========================================================
TARGET ROLE
========================================================

{target_role}

========================================================
JOB DESCRIPTION
========================================================

{job_description if job_description else "No Job Description Provided"}

========================================================
ATS / MATCH SCORE
========================================================

{ats_score}/100

========================================================
SCORE BREAKDOWN
========================================================

Skills: {breakdown["skills"]}

Projects: {breakdown["projects"]}

Experience: {breakdown["experience"]}

Sections: {breakdown["sections"]}

Formatting: {breakdown["formatting"]}

Contact: {breakdown["contact"]}

========================================================
MATCHED SKILLS
========================================================

{", ".join(matched_skills)}

========================================================
MISSING SKILLS
========================================================

{", ".join(missing_skills)}

========================================================
FULL RESUME
========================================================

{resume_text}

========================================================

TASK

Analyze the entire resume.

If a Job Description exists,
compare against it.

Give practical coaching.

Mention:

• strengths

• missing technologies

• missing backend/frontend concepts

• project quality

• ATS issues

• impact of projects

• quantified achievements

• experience level

• education relevance

• resume quality

Focus on helping the user get interviews.

========================================================

Return ONLY valid JSON.

{{
    "overview":"",

    "strengths":[
        "",
        "",
        "",
        "",
        ""
    ],

    "priority_improvements":{{
        "high":[
            "",
            "",
            ""
        ],
        "medium":[
            "",
            ""
        ],
        "low":[
            ""
        ]
    }},

    "next_steps":[
        "",
        "",
        ""
    ],

    "interview_readiness":"",

    "motivation":""
}}

Rules

overview

- 3 to 5 sentences.

- Explain why your resume matches or doesn't match.

- Speak directly to the user.

strengths

- Specific to this resume.

- Mention projects.

- Mention technologies.

priority_improvements

High

- Biggest improvements.

Medium

- Helpful improvements.

Low

- Nice-to-have improvements.

next_steps

Concrete actions the user should take next.

Examples

- Build one FastAPI project.

- Learn Docker.

- Improve quantified achievements.

interview_readiness

Return ONLY one value

Excellent

Strong

Moderate

Needs Improvement

motivation

End with a positive message.

Encourage the user.

Never sound negative.

Return ONLY JSON.
"""

    try:

        response = model.generate_content(prompt)

        text = response.text.strip()

        text = (
            text.replace("```json", "")
            .replace("```", "")
            .strip()
        )

        feedback = json.loads(text)

        return {

            "overview": feedback.get(
                "overview",
                "",
            ),

            "strengths": feedback.get(
                "strengths",
                [],
            ),

            "priority_improvements": feedback.get(
                "priority_improvements",
                {
                    "high": [],
                    "medium": [],
                    "low": [],
                },
            ),

            "next_steps": feedback.get(
                "next_steps",
                [],
            ),

            "interview_readiness": feedback.get(
                "interview_readiness",
                "Moderate",
            ),

            "motivation": feedback.get(
                "motivation",
                "",
            ),

        }

    except Exception as e:
     import traceback

     print("\n================ GEMINI ERROR ================\n")
     traceback.print_exc()

     if "response" in locals():
       try:
            print("\nRAW GEMINI RESPONSE:\n")
            print(response.text)
       except Exception:
            pass

     print("\nERROR:")
     print(e)
     print("\n==============================================\n")

     return {
        "overview": "AI feedback could not be generated.",
        "strengths": [],
        "priority_improvements": {
            "high": [],
            "medium": [],
            "low": [],
        },
        "next_steps": [],
        "interview_readiness": "Moderate",
        "motivation": "",
    }