import { useState } from "react";
import { Video, Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { startInterview } from "../../services/interview/interviewService";

import DifficultySelector from "./DifficultySelector";
import InterviewTypeCard from "./InterviewTypeCard";

function InterviewSetup() {
  const navigate = useNavigate();

  const [role, setRole] = useState("Software Engineer");
  const [difficulty, setDifficulty] = useState("Medium");
  const [type, setType] = useState("Mixed");

  const [loading, setLoading] = useState(false);

  const handleStart = async () => {
    try {
      setLoading(true);

      // Request webcam & microphone permission
      await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      const response = await startInterview({
        target_role: role,
        interview_type: type,
        difficulty,
      });

      navigate("/interview/session", {
        state: response,
      });
    } catch (error) {
      console.error(error);

      alert(
        "Please allow webcam and microphone access before starting the interview."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      {/* Header */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          AI Mock Interview
        </h1>

        <p className="mt-2 text-slate-500">
          Practice personalized interview questions generated from your resume.
        </p>
      </div>

      {/* Target Role */}

      <div className="mb-8">
        <label className="mb-2 block font-medium text-slate-700">
          Target Role
        </label>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full rounded-xl border border-slate-300 p-3 focus:border-violet-500 focus:outline-none"
        >
          <option>Software Engineer</option>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>Full Stack Developer</option>
          <option>Machine Learning Engineer</option>
          <option>Data Analyst</option>
          <option>DevOps Engineer</option>
        </select>
      </div>

      {/* Interview Type */}

      <InterviewTypeCard
        value={type}
        onChange={setType}
      />

      {/* Difficulty */}

      <div className="mt-8">
        <DifficultySelector
          value={difficulty}
          onChange={setDifficulty}
        />
      </div>

      {/* Permissions */}

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5">
          <div className="rounded-xl bg-violet-100 p-3">
            <Video className="text-violet-600" />
          </div>

          <div>
            <h3 className="font-semibold">
              Webcam
            </h3>

            <p className="text-sm text-slate-500">
              Required for facial behavior analysis.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5">
          <div className="rounded-xl bg-violet-100 p-3">
            <Mic className="text-violet-600" />
          </div>

          <div>
            <h3 className="font-semibold">
              Microphone
            </h3>

            <p className="text-sm text-slate-500">
              Required for speech analysis.
            </p>
          </div>
        </div>
      </div>

      {/* Start Button */}

      <button
        onClick={handleStart}
        disabled={loading}
        className="mt-10 w-full rounded-2xl bg-violet-600 py-4 text-lg font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading
          ? "Generating Interview..."
          : "Start Interview"}
      </button>
    </div>
  );
}

export default InterviewSetup;