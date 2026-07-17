<div align="center">

# 🤖 AIHire

### AI-Powered Career Preparation Platform

**Analyze • Optimize • Practice • Improve • Get Hired**

---

![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?style=for-the-badge&logo=fastapi)
![Python](https://img.shields.io/badge/Python-3.11-blue?style=for-the-badge&logo=python)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb)
![Gemini](https://img.shields.io/badge/LLM-Google%20Gemini-4285F4?style=for-the-badge)
![MediaPipe](https://img.shields.io/badge/Computer%20Vision-MediaPipe-orange?style=for-the-badge)
![Machine Learning](https://img.shields.io/badge/Machine%20Learning-Scikit--Learn-F7931E?style=for-the-badge&logo=scikitlearn)

</div>

---

# 🚀 Overview

AIHire is an AI-powered career preparation platform designed to simulate real-world technical interviews while providing intelligent feedback on a candidate's resume, communication skills, technical responses, and behavioral performance.

Unlike conventional mock interview platforms, AIHire combines Large Language Models, Computer Vision, Machine Learning, Speech Processing, and Resume Intelligence into a single unified system.

The platform helps candidates:

- Analyze resumes with AI
- Optimize resumes for ATS
- Match resumes against job descriptions
- Generate personalized interview questions
- Practice AI-driven mock interviews
- Analyze facial behavior in real time
- Evaluate spoken responses
- Receive comprehensive interview reports
- Track interview progress over time

---

# 🌟 Why AIHire?

Modern hiring processes evaluate far more than technical knowledge.

Recruiters today consider:

- Resume quality
- ATS compatibility
- Communication skills
- Confidence
- Eye contact
- Behavioral engagement
- Domain knowledge
- Problem-solving ability

AIHire brings all of these together into one intelligent platform.

---

# ✨ Core Features

## 📄 Resume Intelligence

AIHire provides a complete AI-powered resume analysis workflow.

### Features

- PDF Resume Upload
- Resume Parsing
- Skill Extraction
- AI Resume Analysis
- ATS Compatibility Score
- Resume Summary Generation
- Missing Keyword Detection
- Resume vs Job Description Matching
- Resume Tailoring using AI
- Personalized Resume Suggestions

---

## 🤖 AI Interview Engine

Generate personalized interview questions using Google Gemini.

### Supported Modes

- Technical Interview
- HR Interview
- Mixed Interview
- Custom Interview

### Capabilities

- Resume-aware Questions
- Role-based Questions
- Dynamic Follow-up Questions
- Configurable Difficulty
- Adjustable Number of Questions

---

## 🎤 Speech Intelligence

During interviews AIHire evaluates spoken responses.

Features include

- Voice Recording
- Speech-to-Text
- AI Answer Evaluation
- Communication Assessment
- Response Quality Analysis

---

## 😊 Behavioral Intelligence

AIHire continuously monitors behavioral cues using computer vision.

Real-time tracking includes:

- Face Detection
- Face Landmarks
- Eye Contact
- Blink Detection
- Smile Detection
- Head Pose Estimation
- Speaking Activity
- Candidate Engagement

---

## 🧠 Machine Learning

Behavioral features extracted from MediaPipe are analyzed using a trained Random Forest classifier.

The model predicts:

| Prediction | Description |
|------------|-------------|
| Engagement | Candidate attention level |
| Boredom | Lack of interest |
| Confusion | Difficulty understanding |
| Frustration | Stress during interview |

Dataset used:

- DAiSEE Dataset

---

## 📊 Candidate Performance Report

After every interview AIHire generates a detailed report containing:

- Overall Score
- Technical Score
- Communication Score
- Behavioral Score
- Resume Match Score
- AI Feedback
- Candidate Strengths
- Areas of Improvement
- Interview Readiness Score

---

# 📸 Application Showcase

## 🏠 Landing Page

> Add: `screenshots/home.png`

---

## 🔐 Authentication

> Add: `screenshots/login.png`

---

## 📊 Dashboard

> Add: `screenshots/dashboard.png`

---

## 📄 Resume Upload

> Add: `screenshots/resume-upload.png`

---

## 📈 Resume Analysis

> Add: `screenshots/resume-analysis.png`

---

## 🎯 Resume vs Job Description

> Add: `screenshots/resume-match.png`

---

## 🪄 Resume Tailoring

> Add: `screenshots/resume-tailor.png`

---

## 🎤 Interview Setup

> Add: `screenshots/interview-setup.png`

---

## 🎥 Live Interview

> Add: `screenshots/interview.png`

---

## 😊 Behavioral Detection

> Add: `screenshots/behavior.png`

---

## 📑 Interview Report

> Add: `screenshots/report.png`

---

## 📚 Interview History

> Add: `screenshots/history.png`

---

## 👤 User Profile

> Add: `screenshots/profile.png`

---

# 🏗 System Architecture

```text
                          User
                            │
                            ▼
                   Authentication
                            │
                            ▼
                     Upload Resume
                            │
                            ▼
                AI Resume Intelligence
        ┌─────────────┼───────────────┐
        ▼             ▼               ▼
 ATS Analysis   Resume Matching   Resume Tailoring
        │
        ▼
   Interview Generator
        │
        ▼
     Google Gemini
        │
        ▼
   AI Interview Session
        │
 ┌──────┴────────┐
 ▼               ▼
Speech      Webcam Stream
 ▼               ▼
Gemini      MediaPipe CV
Evaluation       │
                 ▼
      ML Behavior Prediction
                 │
                 ▼
      Performance Report
                 │
                 ▼
        Dashboard & History
```

---# 🧠 AI Pipeline

AIHire combines multiple AI technologies into a single intelligent interview platform.

```text
                        Resume Upload
                              │
                              ▼
                    Resume Parsing Engine
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
   ATS Analysis         Skill Extraction     Resume Summary
        │                     │                     │
        └───────────────┬─────┴─────────────────────┘
                        ▼
             Resume Intelligence Module
                        │
        ┌───────────────┼────────────────────┐
        ▼               ▼                    ▼
 Resume vs JD      Resume Tailoring    Interview Context
        │
        ▼
Google Gemini Prompt Engineering
        │
        ▼
 Interview Question Generation
        │
        ▼
 Interactive AI Interview
        │
 ┌──────┴─────────┐
 ▼                ▼
 Speech      Webcam Analysis
 ▼                ▼
 Gemini      MediaPipe
 ▼                ▼
 NLP        Feature Extraction
 └──────┬─────────┘
        ▼
 Random Forest Prediction
        ▼
 AI Interview Report
```

---

# 📄 Resume Intelligence Module

The Resume Intelligence Engine analyzes uploaded resumes to understand a candidate's professional profile before the interview begins.

## Capabilities

- Resume Parsing
- Skill Identification
- Education Extraction
- Experience Extraction
- Project Recognition
- Technical Stack Detection
- Certification Detection
- ATS Score Calculation
- Resume Quality Assessment
- Keyword Analysis

---

## ATS Resume Analysis

The ATS Analyzer evaluates resumes similarly to modern Applicant Tracking Systems.

It checks:

- Resume Structure
- Formatting
- Keyword Density
- Missing Skills
- Technical Skill Coverage
- Project Relevance
- Action Verbs
- Contact Information
- Education Completeness
- Experience Completeness

### Output

- ATS Score
- Strengths
- Weaknesses
- Missing Keywords
- Improvement Suggestions

---

# 🎯 Resume vs Job Description

AIHire compares the uploaded resume with a target job description.

The comparison includes:

| Feature | Description |
|----------|-------------|
| Skill Matching | Required vs Existing Skills |
| Keyword Match | Missing Job Keywords |
| Similarity Score | Resume Alignment |
| Experience Match | Relevant Experience |
| Education Match | Qualification Analysis |
| AI Suggestions | Resume Improvement Tips |

---

# 🪄 Resume Tailoring

Using Google Gemini, AIHire rewrites resume content based on the selected job role.

Tailoring includes:

- Project Descriptions
- Technical Skills
- Professional Summary
- Experience Bullet Points
- Keywords
- ATS Optimization

---

# 🤖 AI Interview Engine

The Interview Engine generates personalized interview questions based on:

- Resume
- Selected Role
- Experience Level
- Skills
- Job Description
- Difficulty Level

Supported interview types:

- Technical
- HR
- Mixed
- Custom

---

## Interview Flow

```text
Resume
   │
   ▼
Role Selection
   │
   ▼
Difficulty Selection
   │
   ▼
Google Gemini
   │
   ▼
Question Generation
   │
   ▼
Interactive Interview
```

---

# 🎤 Speech Intelligence Pipeline

Every spoken response goes through an NLP evaluation pipeline.

```text
Microphone
      │
      ▼
Speech Recording
      │
      ▼
Speech-to-Text
      │
      ▼
Google Gemini
      │
      ▼
Response Evaluation
      │
      ▼
Communication Score
```

Evaluation metrics:

- Answer Relevance
- Technical Accuracy
- Communication Quality
- Confidence
- Completeness
- Clarity
- Grammar
- Vocabulary

---

# 📷 Computer Vision Pipeline

AIHire uses MediaPipe Face Mesh to monitor behavioral signals during interviews.

```text
Webcam
   │
   ▼
Frame Capture
   │
   ▼
Face Detection
   │
   ▼
468 Face Landmarks
   │
   ▼
Feature Extraction
   │
   ▼
Behavior Classification
```

Tracked facial features:

- Eye Movement
- Blink Rate
- Smile Detection
- Head Rotation
- Face Position
- Speaking Activity
- Candidate Engagement

---

# 🧠 Machine Learning Pipeline

Behavioral features are classified using a trained Random Forest model.

## Workflow

```text
MediaPipe Features
        │
        ▼
Feature Vector
        │
        ▼
Data Preprocessing
        │
        ▼
Random Forest Model
        │
        ▼
Behavior Prediction
```

The model predicts:

- Engagement
- Confusion
- Frustration
- Boredom
- Attention Level

Dataset:

- DAiSEE Dataset

---

# 📊 AI Report Generation

After the interview, AIHire combines information from multiple modules.

### Resume Intelligence

- ATS Score
- Resume Match
- Missing Skills

### Interview Intelligence

- Technical Performance
- Communication Quality
- Answer Accuracy

### Behavioral Intelligence

- Eye Contact
- Confidence
- Engagement
- Facial Expressions

These are aggregated into a comprehensive AI-generated report.

---

# 📈 Dashboard Analytics

The dashboard provides long-term performance tracking.

Metrics include:

- Total Interviews
- Average Score
- ATS Performance
- Communication Trends
- Technical Performance
- Behavioral Performance
- Recent Reports
- Interview History
- Resume Statistics

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing
- Protected API Routes
- User-based Report Access
- User-specific Interview History
- Secure Resume Storage
- Environment Variable Configuration
- Backend Authentication Middleware

---# 🛠️ Technology Stack

AIHire is built using a modern AI-focused technology stack designed for scalability, performance, and modularity.

---

## 🎨 Frontend

| Technology | Purpose |
|------------|---------|
| React.js | Component-based UI |
| Vite | Fast build tool |
| Tailwind CSS | Styling |
| React Router | Client-side routing |
| Axios | API communication |
| Context API | Global state management |
| Chart.js / Recharts | Dashboard visualizations |
| React Icons | UI icons |

---

## ⚙️ Backend

| Technology | Purpose |
|------------|---------|
| FastAPI | REST API framework |
| Python 3.11 | Backend language |
| Uvicorn | ASGI server |
| Pydantic | Data validation |
| JWT | Authentication |
| Passlib | Password hashing |
| Python-dotenv | Environment configuration |

---

## 🤖 Artificial Intelligence

| Technology | Purpose |
|------------|---------|
| Google Gemini | Resume analysis & interview generation |
| Prompt Engineering | Dynamic AI responses |
| NLP | Resume understanding |
| Speech-to-Text | Interview response transcription |

---

## 👁️ Computer Vision

| Technology | Purpose |
|------------|---------|
| OpenCV | Webcam access |
| MediaPipe Face Mesh | Face landmark detection |
| NumPy | Numerical processing |

---

## 🧠 Machine Learning

| Technology | Purpose |
|------------|---------|
| Scikit-learn | ML algorithms |
| Random Forest | Behavior prediction |
| Pandas | Dataset processing |
| Joblib | Model serialization |

---

## 🗄️ Database

| Technology | Purpose |
|------------|---------|
| MongoDB | User & interview data |
| Motor / PyMongo | Database access |

---

# 📂 Project Structure

```text
AIHire
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── hooks
│   │   ├── services
│   │   ├── layouts
│   │   ├── utils
│   │   ├── context
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend
│   ├── app
│   │   ├── api
│   │   ├── auth
│   │   ├── models
│   │   ├── routes
│   │   ├── services
│   │   ├── database
│   │   ├── utils
│   │   └── main.py
│   │
│   ├── ml
│   │   ├── model.pkl
│   │   ├── predictor.py
│   │   └── dataset
│   │
│   ├── requirements.txt
│   └── .env
│
├── screenshots
├── README.md
└── LICENSE
```

---

# ⚙️ Installation Guide

## Clone Repository

```bash
git clone https://github.com/Thouheedthouhi/AIHIRE.git
cd AIHIRE
```

---

## Backend Setup

Create a virtual environment:

```bash
python -m venv venv
```

Activate it:

### Windows

```bash
venv\Scripts\activate
```

### macOS/Linux

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the backend:

```bash
uvicorn app.main:app --reload
```

Backend URL:

```
http://127.0.0.1:8000
```

---

## Frontend Setup

Navigate to the frontend:

```bash
cd frontend
```

Install packages:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Frontend URL:

```
http://localhost:5173
```

---

# 🔐 Environment Variables

## Backend (.env)

```env
MONGODB_URL=

JWT_SECRET=

JWT_ALGORITHM=HS256

JWT_EXPIRE_MINUTES=1440

GEMINI_API_KEY=
```

---

## Frontend (.env)

```env
VITE_API_URL=http://127.0.0.1:8000
```

---

# 🚀 Deployment

AIHire is designed to support a separated frontend and backend deployment.

### Frontend

- Vercel
- Netlify

### Backend

- Render
- Railway

### Database

- MongoDB Atlas

---

## Deployment Architecture

```text
User
 │
 ▼
Vercel (React)
 │
 ▼
Render (FastAPI)
 │
 ▼
MongoDB Atlas
 │
 ▼
Google Gemini API
```

---

# 📡 REST API Overview

## Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /signup | Register user |
| POST | /login | User login |
| GET | /profile | User profile |

---

## Resume

| Method | Endpoint |
|--------|----------|
| POST | /resume/upload |
| POST | /resume/analyze |
| POST | /resume/ats |
| POST | /resume/match |
| POST | /resume/tailor |

---

## Interview

| Method | Endpoint |
|--------|----------|
| POST | /interview/create |
| POST | /interview/start |
| POST | /interview/answer |
| POST | /interview/end |

---

## Reports

| Method | Endpoint |
|--------|----------|
| GET | /reports |
| GET | /reports/{id} |
| GET | /history |

---

# 🔄 Request Flow

```text
Frontend
     │
 Axios Requests
     │
     ▼
 FastAPI
     │
     ▼
Authentication
     │
     ▼
Business Logic
     │
     ▼
Gemini API / MongoDB / ML Model
     │
     ▼
JSON Response
     │
     ▼
React UI
```

---

# 🧪 Running Locally

Start services in this order:

1. MongoDB
2. Backend
3. Frontend

Then open:

```
http://localhost:5173
```

---

# 📈 Performance Goals

- Fast Resume Analysis
- Low-Latency Interview Responses
- Real-Time Behavior Tracking
- Scalable REST APIs
- Modular AI Components
- Responsive User Interface
---

# 🌟 Key Highlights

AIHire combines multiple AI technologies into a unified interview preparation platform.

### ✅ Resume Intelligence
- Resume Parsing
- ATS Score Analysis
- Resume vs Job Description Matching
- AI Resume Tailoring
- Keyword Analysis
- Resume Improvement Suggestions

### ✅ AI Interview System
- AI-generated Questions
- Resume-aware Interviews
- Technical Interviews
- HR Interviews
- Mixed Interviews
- Custom Interviews

### ✅ Communication Analysis
- Speech-to-Text
- AI Answer Evaluation
- Communication Assessment
- Technical Response Analysis

### ✅ Behavioral Analysis
- Eye Contact Detection
- Blink Detection
- Smile Detection
- Head Pose Estimation
- Speaking Activity
- Candidate Engagement Monitoring

### ✅ Machine Learning
- Random Forest Classification
- Real-time Behavior Prediction
- DAiSEE Dataset Integration

### ✅ User Experience
- Responsive UI
- Secure Authentication
- Dashboard Analytics
- Interview History
- Performance Reports
- User Profile Management

---

# 🎯 Project Goals

The primary objectives of AIHire are:

- Improve interview preparation using Artificial Intelligence.
- Increase ATS compatibility of resumes.
- Provide personalized interview practice.
- Analyze verbal and non-verbal communication.
- Deliver actionable feedback for continuous improvement.
- Simulate realistic technical interview experiences.

---

# 🔬 Future Roadmap

The following features are planned for future releases:

### AI Features
- AI Coding Interviews
- Code Editor with Execution Support
- Adaptive Interview Difficulty
- Company-specific Interview Templates
- AI Career Roadmaps
- Personalized Learning Recommendations

### Computer Vision
- Emotion Recognition
- Stress Detection
- Body Pose Estimation
- Gesture Analysis
- Multi-person Detection

### Platform Enhancements
- Recruiter Dashboard
- Team Hiring Analytics
- Interview Scheduling
- Email Notifications
- Mobile Application
- Multi-language Support

### Integrations
- LinkedIn Profile Import
- GitHub Profile Analysis
- Google Calendar Integration
- Outlook Calendar Integration
- Cloud Storage Support

---

# 🤝 Contributing

Contributions are welcome!

If you'd like to contribute:

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/your-feature
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push to your branch.

```bash
git push origin feature/your-feature
```

5. Open a Pull Request.

Please ensure your code follows the existing project structure and coding standards.

---

# 🐛 Reporting Issues

Found a bug or have a feature request?

Please open an issue in the GitHub repository with:

- A clear title
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)

---

# 📚 Learning Resources

Technologies used in AIHire:

- React
- FastAPI
- MongoDB
- Google Gemini
- OpenCV
- MediaPipe
- Scikit-learn
- JWT Authentication
- Tailwind CSS

---

# 🏆 Achievements

AIHire demonstrates the integration of multiple AI domains within a single application.

This project combines:

- Artificial Intelligence
- Natural Language Processing
- Large Language Models
- Machine Learning
- Computer Vision
- Speech Processing
- Full Stack Web Development
- Cloud Deployment

into one cohesive career preparation platform.

---

# 📜 License

This project is licensed under the MIT License.

See the `LICENSE` file for details.

---

# 👨‍💻 Author

## Thouheed

**AI & Software Developer**

Passionate about building AI-powered applications that solve real-world problems through Machine Learning, Computer Vision, Natural Language Processing, and Full Stack Development.

GitHub:
```
https://github.com/Thouheedthouhi
```

---

# 🙏 Acknowledgements

Special thanks to the open-source community and the creators of:

- React
- FastAPI
- Google Gemini
- MongoDB
- MediaPipe
- OpenCV
- Scikit-learn
- Tailwind CSS
- Vite

Their tools and documentation made the development of AIHire possible.

---

<div align="center">

## ⭐ If you found AIHire interesting, consider giving the repository a star!

### Thank you for visiting the project.

**Made with ❤️ using AI, Machine Learning, Computer Vision, and Full Stack Development.**

</div>