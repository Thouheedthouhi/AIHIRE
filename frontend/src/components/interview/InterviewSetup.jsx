import { useState } from "react";
import { Video, Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { startInterview } from "../../services/interview/interviewService";

import InterviewModeSelector from "./setup/InterviewModeSelector";
import AIInterviewSetup from "./setup/AIInterviewSetup";
import CustomInterviewSetup from "./setup/CustomInterviewSetup";

function InterviewSetup() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("ai");
  const [loading, setLoading] = useState(false);

  // -----------------------------
  // AI Interview
  // -----------------------------

  const handleAIInterview = async ({
    role,
    difficulty,
    interviewType,
    questionCount,
  }) => {
    try {
      setLoading(true);

      // Request webcam & microphone permission
      await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      const response = await startInterview({
        mode: "ai",
        target_role: role,
        difficulty,
        interview_type: interviewType,
        question_count: questionCount,
      });

      navigate("/interview/session", {
        state: {
          ...response,
          role,
          difficulty,
          interviewType,
        },
      });
    } catch (error) {
      console.error(error);

      // Camera / Microphone permission
      if (
        error.name === "NotAllowedError" ||
        error.name === "NotFoundError"
      ) {
        alert(
          "Please allow webcam and microphone permissions."
        );
      }

      // Backend errors (Gemini, FastAPI, etc.)
      else if (error.response) {
        alert(
          error.response.data.detail ||
            "Backend Error"
        );
      }

      // Unknown errors
      else {
        alert(
          error.message ||
            "Something went wrong."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------
  // Custom Interview
  // -----------------------------

  const handleCustomInterview = async ({
    questions,
  }) => {
    try {
      setLoading(true);

      await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      navigate("/interview/session", {
        state: {
          questions,
          role: "Custom Interview",
          difficulty: "Custom",
          interviewType: "Custom",
        },
      });
    } catch (error) {
      console.error(error);

      if (
        error.name === "NotAllowedError" ||
        error.name === "NotFoundError"
      ) {
        alert(
          "Please allow webcam and microphone permissions."
        );
      } else {
        alert(
          error.response?.data?.detail ||
            error.message ||
            "Something went wrong."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl">
      {/* Header */}

      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-slate-900">
          AI Mock Interview
        </h1>

        <p className="mt-3 text-lg text-slate-500">
          Practice interviews with AI-generated or custom questions.
        </p>
      </div>

      {/* Interview Mode */}

      <InterviewModeSelector
        value={mode}
        onChange={setMode}
      />

      {/* Setup */}

      {mode === "ai" ? (
        <AIInterviewSetup
          onStart={handleAIInterview}
        />
      ) : (
        <CustomInterviewSetup
          onStart={handleCustomInterview}
        />
      )}

      {/* Permissions */}

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md">
          <div className="rounded-xl bg-violet-100 p-3">
            <Video className="text-violet-600" />
          </div>

          <div>
            <h3 className="font-semibold">
              Webcam Required
            </h3>

            <p className="text-sm text-slate-500">
              Used for behaviour analysis.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md">
          <div className="rounded-xl bg-violet-100 p-3">
            <Mic className="text-violet-600" />
          </div>

          <div>
            <h3 className="font-semibold">
              Microphone Required
            </h3>

            <p className="text-sm text-slate-500">
              Used for speech recording.
            </p>
          </div>
        </div>
      </div>

      {loading && (
        <div className="mt-8 rounded-2xl bg-violet-600 p-5 text-center font-semibold text-white shadow-lg">
          Preparing your interview...
        </div>
      )}
    </div>
  );
}

export default InterviewSetup;