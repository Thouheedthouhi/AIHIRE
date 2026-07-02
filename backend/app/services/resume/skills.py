ROLE_SKILLS = {

    "Software Engineer": {

        "Python": 5,
        "Java": 5,
        "C++": 4,
        "Data Structures": 4,
        "Algorithms": 4,
        "OOP": 3,
        "DBMS": 3,
        "SQL": 3,
        "Operating Systems": 3,
        "Computer Networks": 3,
        "Git": 2,
        "GitHub": 2,
        "REST API": 3,

    },

    "Full Stack Developer": {

        "HTML": 3,
        "CSS": 3,
        "JavaScript": 5,
        "React": 5,
        "Node.js": 5,
        "Express.js": 4,
        "MongoDB": 4,
        "SQL": 3,
        "Git": 2,
        "GitHub": 2,
        "REST API": 4,
        "Docker": 3,
        "AWS": 3,
        "Python": 3,

    },

    "Frontend Developer": {

        "HTML": 5,
        "CSS": 5,
        "JavaScript": 5,
        "React": 5,
        "Redux": 3,
        "Tailwind CSS": 4,
        "Bootstrap": 3,
        "Git": 2,
        "GitHub": 2,

    },

    "Backend Developer": {

        "Python": 5,
        "Java": 4,
        "Node.js": 4,
        "FastAPI": 5,
        "Django": 4,
        "Express.js": 4,
        "MongoDB": 4,
        "SQL": 4,
        "REST API": 4,
        "Docker": 4,
        "AWS": 3,
        "Git": 2,

    },

    "AI / ML Engineer": {

        "Python": 5,
        "Machine Learning": 5,
        "Deep Learning": 4,
        "TensorFlow": 4,
        "PyTorch": 4,
        "NumPy": 3,
        "Pandas": 3,
        "Scikit-learn": 4,
        "OpenCV": 3,
        "SQL": 2,
        "Git": 2,

    },

    "DevOps Engineer": {

        "Docker": 5,
        "Kubernetes": 5,
        "AWS": 5,
        "Azure": 4,
        "Linux": 4,
        "CI/CD": 4,
        "Git": 3,
        "Jenkins": 4,
        "Terraform": 4,
        "Python": 3,

    }

}


SKILL_ALIASES = {

    "JavaScript": [
        "javascript",
        "js",
        "java script",
    ],

    "Node.js": [
        "node",
        "nodejs",
        "node.js",
    ],

    "Express.js": [
        "express",
        "expressjs",
        "express.js",
    ],

    "MongoDB": [
        "mongodb",
        "mongo",
    ],

    "REST API": [
        "rest api",
        "rest",
        "restful",
    ],

    "Machine Learning": [
        "machine learning",
        "ml",
    ],

    "Deep Learning": [
        "deep learning",
        "dl",
    ],

    "Tailwind CSS": [
        "tailwind",
        "tailwind css",
    ],

    "GitHub": [
        "github",
        "git hub",
    ],

    "CI/CD": [
        "ci/cd",
        "ci cd",
        "pipeline",
    ],

    "Scikit-learn": [
        "scikit",
        "sklearn",
        "scikit-learn",
    ],

    "PyTorch": [
        "pytorch",
        "torch",
    ],

    "TensorFlow": [
        "tensorflow",
        "tf",
    ],

}
# -----------------------------------------
# Master Skill List (Used for Resume vs JD)
# -----------------------------------------

ALL_SKILLS = sorted(
    {
        skill
        for role in ROLE_SKILLS.values()
        for skill in role.keys()
    }
)

# -----------------------------------------
# Education Keywords
# -----------------------------------------

EDUCATION_KEYWORDS = [
    "computer science",
    "information science",
    "software engineering",
    "artificial intelligence",
    "machine learning",
    "data science",
    "b.e",
    "b.tech",
    "bca",
    "mca",
]

# -----------------------------------------
# Project Keywords
# -----------------------------------------

PROJECT_KEYWORDS = [
    "project",
    "developed",
    "implemented",
    "designed",
    "built",
    "created",
    "engineered",
    "application",
    "system",
    "web app",
    "mobile app",
    "api",
]

# -----------------------------------------
# Experience Keywords
# -----------------------------------------

EXPERIENCE_KEYWORDS = [
    "internship",
    "experience",
    "software engineer",
    "backend developer",
    "frontend developer",
    "full stack developer",
    "developer",
]

# -----------------------------------------
# Responsibility Keywords
# -----------------------------------------

ROLE_RESPONSIBILITIES = {

    "Software Engineer": [
        "develop",
        "design",
        "debug",
        "optimize",
        "maintain",
        "deploy",
        "test",
        "collaborate",
        "code review",
    ],

    "Backend Developer": [
        "rest api",
        "authentication",
        "database",
        "microservices",
        "fastapi",
        "performance",
        "sql",
    ],

    "Frontend Developer": [
        "react",
        "javascript",
        "responsive",
        "ui",
        "ux",
        "css",
        "tailwind",
    ],

    "Full Stack Developer": [
        "frontend",
        "backend",
        "api",
        "database",
        "authentication",
        "deployment",
        "react",
        "node",
    ],

    "AI / ML Engineer": [
        "machine learning",
        "deep learning",
        "tensorflow",
        "pytorch",
        "model",
        "training",
        "prediction",
    ],

    "Data Scientist": [
        "python",
        "pandas",
        "numpy",
        "visualization",
        "statistics",
        "model",
        "analysis",
    ],

    "DevOps Engineer": [
        "docker",
        "kubernetes",
        "aws",
        "azure",
        "linux",
        "ci/cd",
        "jenkins",
    ],
}