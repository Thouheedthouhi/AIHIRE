import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import DashboardLayout from "../components/dashboard/layout/DashboardLayout";

import InterviewHeader from "../components/interview/InterviewHeader";
import AIInterviewer from "../components/interview/AIInterviewer";
import WebcamPreview from "../components/interview/WebcamPreview";
import InterviewProgress from "../components/interview/InterviewProgress";
import RecordingControls from "../components/interview/RecordingControls";

import {
  useInterviewContext,
  InterviewState,
} from "../context/interview/InterviewContext";

import useInterview from "../hooks/useInterview";

function InterviewSession() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const {
    setQuestions,
    cameraReady,
    microphoneReady,
    faceDetected,
  } = useInterviewContext();

  useEffect(() => {
    if (!state?.questions) {
      navigate("/interview");
      return;
    }

    setQuestions(state.questions);
  }, []);

  const {
  currentQuestion,
  currentIndex,
  totalQuestions,
  interviewState,
  isSpeaking,
  isRecording,
  isSubmitting,
  timeLeft,
  replayQuestion,
  finishAnswer,
} = useInterview(state?.role);

  if (
    interviewState === InterviewState.PROCESSING
  ) {
    return (
      <DashboardLayout>
        <div className="flex h-[calc(100vh-80px)] items-center justify-center bg-slate-100">

          <div className="w-full max-w-lg rounded-3xl bg-white p-10 text-center shadow-xl">

            <div className="mx-auto mb-8 h-20 w-20 animate-spin rounded-full border-4 border-violet-200 border-t-violet-600" />

            <h1 className="text-3xl font-bold">
              Processing Interview
            </h1>

            <p className="mt-3 text-slate-500">
              AI is evaluating your interview...
            </p>

          </div>

        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <div className="flex h-[calc(100vh-80px)] flex-col overflow-hidden p-3">

        <InterviewHeader
          currentQuestion={currentIndex + 1}
          totalQuestions={totalQuestions}
          role={state?.role}
          difficulty={state?.difficulty}
          timer={timeLeft}
        />

        <div className="mt-3 flex flex-1 gap-4 overflow-hidden">

          {/* LEFT */}

          <div className="flex w-[58%] flex-col rounded-3xl bg-white p-5 shadow-lg">

            <AIInterviewer
              question={currentQuestion}
              isSpeaking={isSpeaking}
              onReplay={replayQuestion}
            />

            <div className="mt-auto">

              <RecordingControls
                interviewState={interviewState}
                isSubmitting={isSubmitting}
                onReplay={replayQuestion}
                onFinish={finishAnswer}
              />

              <div className="mt-4">

                <InterviewProgress
                  current={currentIndex + 1}
                  total={totalQuestions}
                />

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex w-[42%] flex-col gap-4">

            <div className="flex-1 overflow-hidden rounded-3xl bg-white shadow-lg">

              <WebcamPreview />

            </div>

            <div className="rounded-3xl bg-white p-4 shadow-lg">

              <div className="flex flex-wrap items-center gap-3">
                            <div
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                    cameraReady
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      cameraReady
                        ? "bg-emerald-500"
                        : "bg-red-500"
                    }`}
                  />
                  Camera
                </div>

                <div
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                    microphoneReady
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      microphoneReady
                        ? "bg-emerald-500"
                        : "bg-red-500"
                    }`}
                  />
                  Mic
                </div>

                <div
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                    faceDetected
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      faceDetected
                        ? "bg-emerald-500"
                        : "bg-amber-500"
                    }`}
                  />
                  Face
                </div>

                <div
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                    isRecording
                      ? "bg-red-100 text-red-700"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      isRecording
                        ? "animate-pulse bg-red-500"
                        : "bg-slate-400"
                    }`}
                  />
                  Recording
                </div>

                <div className="ml-auto">

                  <div
                    className={`rounded-2xl px-5 py-2 text-xl font-bold ${
                      timeLeft <= 10
                        ? "bg-red-100 text-red-600"
                        : timeLeft <= 30
                        ? "bg-amber-100 text-amber-600"
                        : "bg-violet-100 text-violet-700"
                    }`}
                  >
                    {String(
                      Math.floor(timeLeft / 60)
                    ).padStart(2, "0")}
                    :
                    {String(
                      timeLeft % 60
                    ).padStart(2, "0")}
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default InterviewSession;    