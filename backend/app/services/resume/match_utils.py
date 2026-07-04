import re

from app.services.resume.skills import (
    ALL_SKILLS,
    SKILL_ALIASES,
    ROLE_SKILLS,
)


# ----------------------------------------------------
# Helper Functions
# ----------------------------------------------------

def contains_keyword(text: str, keyword: str):
    pattern = rf"\b{re.escape(keyword.lower())}\b"
    return re.search(pattern, text.lower()) is not None


def has_skill(text: str, skill: str):
    aliases = SKILL_ALIASES.get(
        skill,
        [skill.lower()],
    )

    for alias in aliases:
        if contains_keyword(text, alias):
            return True

    return False


# ----------------------------------------------------
# Skill Extraction
# ----------------------------------------------------

def extract_skills(text: str):
    detected = []

    for skill in ALL_SKILLS:
        if has_skill(text, skill):
            detected.append(skill)

    return sorted(detected)


# ----------------------------------------------------
# Education Score (0–15)
# ----------------------------------------------------

def education_score(
    resume_text: str,
    jd_text: str,
):
    resume = resume_text.lower()

    score = 0

    # Degree

    degree_keywords = [
        "bachelor",
        "b.e",
        "be",
        "b.tech",
        "btech",
        "engineering",
    ]

    if any(word in resume for word in degree_keywords):
        score += 8

    # Branch

    branch_keywords = [
        "computer science",
        "cse",
        "information science",
        "ise",
        "software engineering",
        "artificial intelligence",
        "data science",
    ]

    if any(word in resume for word in branch_keywords):
        score += 4

    # CGPA / Percentage

    if (
        "cgpa" in resume
        or "%"
        in resume
    ):
        score += 3

    return min(score, 15)


# ----------------------------------------------------
# Experience Score (0–15)
# ----------------------------------------------------

def experience_score(
    resume_text: str,
    jd_text: str,
):
    resume = resume_text.lower()

    score = 0

    if "internship" in resume:
        score += 8

    if "experience" in resume:
        score += 4

    if "freelance" in resume:
        score += 2

    if "research" in resume:
        score += 2

    if "open source" in resume:
        score += 2

    if "lead" in resume:
        score += 1

    return min(score, 15)


# ----------------------------------------------------
# Project Score (0–15)
# ----------------------------------------------------

def project_score(
    resume_text: str,
):
    text = resume_text.lower()

    project_mentions = text.count("project")

    score = 0

    if project_mentions >= 3:
        score = 10

    elif project_mentions == 2:
        score = 8

    elif project_mentions == 1:
        score = 5

    # Bonus for quality projects

    project_keywords = [
        "react",
        "node",
        "python",
        "java",
        "mongodb",
        "sql",
        "docker",
        "api",
        "fastapi",
        "machine learning",
        "ai",
    ]

    for keyword in project_keywords:

        if keyword in text:
            score += 1

    return min(score, 15)


# ----------------------------------------------------
# Responsibilities Score (0–10)
# ----------------------------------------------------

def responsibility_score(
    resume_text: str,
    job_description: str,
):
    resume = resume_text.lower()
    jd = job_description.lower()

    responsibilities = [
        "develop",
        "design",
        "implement",
        "build",
        "deploy",
        "maintain",
        "optimize",
        "debug",
        "test",
        "collaborate",
        "integrate",
        "analyze",
        "review",
        "monitor",
        "document",
    ]

    matched = 0
    total = 0

    for responsibility in responsibilities:

        if responsibility in jd:

            total += 1

            if responsibility in resume:
                matched += 1

    if total == 0:
        return 10

    return round(
        matched / total * 10
    )


# ----------------------------------------------------
# Keyword Extraction
# ----------------------------------------------------

def extract_keywords(
    text: str,
):
    words = re.findall(
        r"[A-Za-z][A-Za-z+#.]{2,}",
        text.lower(),
    )

    stop_words = {
        "the",
        "and",
        "with",
        "for",
        "from",
        "this",
        "that",
        "your",
        "using",
        "have",
        "will",
        "into",
        "our",
        "their",
        "you",
        "are",
        "job",
        "role",
        "work",
        "team",
        "years",
        "year",
        "good",
        "candidate",
        "company",
        "required",
        "preferred",
    }

    return {
        word
        for word in words
        if word not in stop_words
    }


# ----------------------------------------------------
# Keyword Match Score (0–10)
# ----------------------------------------------------

def keyword_match_score(
    resume_text: str,
    jd_text: str,
):
    resume_keywords = extract_keywords(
        resume_text
    )

    jd_keywords = extract_keywords(
        jd_text
    )

    if not jd_keywords:
        return 10

    matched = (
        resume_keywords
        & jd_keywords
    )

    percentage = (
        len(matched)
        / len(jd_keywords)
    )

    return round(
        percentage * 10
    )


# ----------------------------------------------------
# Weighted Skill Matching
# ----------------------------------------------------

def weighted_skill_match(
    resume_skills: list,
    jd_skills: list,
):
    weights = {}

    for role in ROLE_SKILLS.values():
        weights.update(role)

    matched_weight = 0
    total_weight = 0

    matched = []
    missing = []

    for skill in jd_skills:

        weight = weights.get(
            skill,
            3,
        )

        total_weight += weight

        if skill in resume_skills:

            matched.append(skill)

            matched_weight += weight

        else:

            missing.append(skill)

    if total_weight == 0:

        percentage = 100

    else:

        percentage = round(
            matched_weight
            / total_weight
            * 100
        )

    return (
        percentage,
        matched,
        missing,
    )