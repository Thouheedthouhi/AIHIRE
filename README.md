# 🤖 AIHire – AI Powered Mock Interview & Candidate Performance Analysis Platform

AIHire is an intelligent mock interview platform that helps candidates prepare for technical interviews using Artificial Intelligence, Computer Vision, Machine Learning, and Speech Processing.

Unlike traditional interview simulators, AIHire not only asks personalized interview questions but also analyzes the candidate's responses, communication, and behavioral cues to generate a detailed performance report with actionable feedback.

---

# ✨ Features

## 📄 Resume Analysis
- Upload PDF Resume
- Resume Parsing
- Resume Skill Extraction
- AI-based Resume Analysis

## 🧠 AI Interview Generation
- Personalized interview questions using Google Gemini
- Questions generated based on resume and selected role
- Dynamic follow-up questions

## 🎤 Speech Analysis
- Real-time voice recording
- Speech-to-text transcription
- Answer evaluation using Gemini AI

## 😊 Behavioral Analysis
- Real-time face tracking using MediaPipe
- Eye contact detection
- Blink detection
- Smile detection
- Head pose estimation
- Speaking activity detection

## 🤖 Machine Learning
- Trained on the DAiSEE Dataset
- Random Forest classifier
- Predicts:
  - Engagement
  - Boredom
  - Confusion
  - Frustration

## 📊 Candidate Performance Report
- Overall Interview Score
- Technical Performance
- Communication Skills
- Behavioral Analysis
- Personalized Strengths
- Improvement Suggestions
- Interview Readiness Score

---

# 🏗️ System Architecture

```
                     Resume
                        │
                        ▼
              Resume Analysis
                        │
                        ▼
          Gemini Question Generator
                        │
                        ▼
                 Mock Interview
        ┌──────────────┴──────────────┐
        ▼                             ▼
 Speech Recognition            MediaPipe Vision
        ▼                             ▼
 Transcript               Behavioral Features
        ▼                             ▼
 Gemini Evaluation      Random Forest Model
        └──────────────┬──────────────┘
                       ▼
             AI Performance Report
```

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- Axios

## Backend
- FastAPI
- Python

## Artificial Intelligence
- Google Gemini API

## Computer Vision
- MediaPipe Face Landmarker
- OpenCV

## Machine Learning
- Scikit-learn
- Random Forest
- Pandas
- NumPy

## Database
- MongoDB

## Dataset
- DAiSEE Dataset

---

# 📂 Project Structure

```
AIHire
│
├── frontend
│   ├── components
│   ├── pages
│   ├── hooks
│   ├── services
│   └── context
│
├── backend
│   ├── app
│   │   ├── routers
│   │   ├── services
│   │   ├── schemas
│   │   └── utils
│   │
│   ├── ml
│   │   ├── dataset
│   │   ├── features
│   │   ├── models
│   │   └── training
│   │
│   └── uploads
│
└── docs
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/AIHire.git

cd AIHire
```

---

## Backend

```bash
cd backend

python -m venv venv

source venv/bin/activate

pip install -r requirements.txt
```

Run FastAPI

```bash
uvicorn app.main:app --reload
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🧠 Training the Behavior Model

Extract behavioral features

```bash
python -m ml.training.extract_features
```

Train Random Forest model

```bash
python -m ml.training.train_behavior_model
```

Test model

```bash
python -m ml.test_behavior_model
```

---

# 📈 Machine Learning Pipeline

```
DAiSEE Videos
      │
      ▼
MediaPipe Face Detection
      │
      ▼
Feature Extraction
      │
      ▼
Behavior Tracker
      │
      ▼
Behavior Dataset
      │
      ▼
Random Forest Training
      │
      ▼
behavior_model.pkl
      │
      ▼
FastAPI Prediction API
      │
      ▼
React Frontend
```

---

# 📊 Predicted Behaviors

The model predicts:

| Metric | Description |
|----------|------------|
| Engagement | Candidate attention level |
| Boredom | Lack of interest |
| Confusion | Difficulty understanding |
| Frustration | Stress during interview |

---

# 📸 Screenshots

## Login

*(Add Screenshot)*

---

## Resume Upload

*(Add Screenshot)*

---

## AI Interview

*(Add Screenshot)*

---

## Live Behavior Detection

*(Add Screenshot)*

---

## Candidate Performance Report

*(Add Screenshot)*

---

# 🎯 Future Enhancements

- Emotion Recognition
- Voice Sentiment Analysis
- Eye Gaze Tracking
- Interview History Dashboard
- Performance Analytics
- PDF Report Generation
- ATS Resume Score
- AI Career Coach
- Multi-language Interviews

---

# 👨‍💻 Developed By

**Thouheed**

VTU Final Year Project

---

# 📜 License

This project is developed for educational purposes as part of the VTU Final Year Project.
