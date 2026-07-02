from app.services.resume.gemini_service import generate_ai_feedback

from app.services.resume.match_utils import (
    extract_skills,
    weighted_skill_match,
    education_score,
    experience_score,
    project_score,
    keyword_match_score,
    responsibility_score,
)


def match_resume(
    resume_text: str,
    job_description: str,
):
    """
    Professional Resume vs Job Description matching.
    """

    resume_lower = resume_text.lower()
    jd_lower = job_description.lower()

    # -------------------------------------
    # Skills
    # -------------------------------------

    resume_skills = extract_skills(
        resume_lower,
    )

    jd_skills = extract_skills(
        jd_lower,
    )

    (
        skill_match,
        matched_skills,
        missing_skills,
    ) = weighted_skill_match(
        resume_skills,
        jd_skills,
    )

    extra_skills = sorted(
        list(
            set(resume_skills)
            - set(jd_skills)
        )
    )

    # 40 Marks
    skills_score = round(
        skill_match * 0.40
    )

    # -------------------------------------
    # Education
    # -------------------------------------

    education = education_score(
        resume_lower,
        jd_lower,
    )

    # -------------------------------------
    # Experience
    # -------------------------------------

    experience = experience_score(
        resume_lower,
        jd_lower,
    )

    # -------------------------------------
    # Projects
    # -------------------------------------

    projects = project_score(
        resume_lower,
    )

    # -------------------------------------
    # Responsibilities
    # -------------------------------------

    responsibilities = responsibility_score(
        resume_text,
        job_description,
    )

    # -------------------------------------
    # Keyword Coverage
    # -------------------------------------

    keyword_score = keyword_match_score(
        resume_text,
        job_description,
    )

    # -------------------------------------
    # Overall Score
    # -------------------------------------

    overall_match = min(
        skills_score
        + education
        + experience
        + projects
        + responsibilities
        + keyword_score,
        100,
    )

    # -------------------------------------
    # Gemini Feedback
    # -------------------------------------

    feedback = generate_ai_feedback(
        resume_text=resume_text,
        target_role="Resume vs Job Description",
        ats_score=overall_match,
        matched_skills=matched_skills,
        missing_skills=missing_skills,
        breakdown={
            "skills": skills_score,
            "projects": projects,
            "experience": experience,
            "sections": 0,
            "formatting": 0,
            "contact": 0,
        },
        job_description=job_description,
    )

    # -------------------------------------
    # Response
    # -------------------------------------

    return {
        "overall_match": overall_match,
        "skill_match": skill_match,

        "matched_skills": sorted(
            matched_skills
        ),

        "missing_keywords": sorted(
            missing_skills
        ),

        "extra_skills": sorted(
            extra_skills
        ),

        "breakdown": {
            "skills": skills_score,
            "experience": experience,
            "education": education,
            "projects": projects,
            "responsibilities": responsibilities,
            "keywords": keyword_score,
        },

        **feedback,
    }