import {
  Award,
  Brain,
  CheckCircle,
  Download,
  Lightbulb,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useInterviewContext } from "../context/interview/InterviewContext";
import { downloadInterviewReport } from "../services/pdf/reportPdfService";
function behaviorLevel(value) {
  switch (value) {
    case 0:
      return "Low";
    case 1:
      return "Moderate";
    case 2:
      return "High";
    case 3:
      return "Very High";
    default:
      return "-";
  }
}

function ScoreCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md border border-slate-200">
      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}%
          </h2>

        </div>

        <div
          className={`rounded-xl p-4 ${color}`}
        >
          {icon}
        </div>

      </div>

      <div className="mt-5 h-3 w-full rounded-full bg-slate-200">

        <div
          className="h-3 rounded-full bg-indigo-600"
          style={{
            width: `${value}%`,
          }}
        />

      </div>
    </div>
  );
}

function Report() {
  const navigate = useNavigate();
  const {
    finalReport,
    behaviorSummary,
    behaviorPrediction,
  } = useInterviewContext();

  if (!finalReport) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">

        <div className="rounded-2xl bg-white p-10 shadow-lg">

          <h1 className="text-2xl font-bold">
            No Interview Report Found
          </h1>

          <p className="mt-3 text-slate-500">
            Complete an interview to
            generate your personalized AI
            report.
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10">

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mb-10 rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 p-10 text-white shadow-xl">

          <h1 className="text-4xl font-bold">
            🎉 Interview Completed
          </h1>

          <p className="mt-3 text-lg text-indigo-100">
            Here's your personalized AI
            interview performance report.
          </p>

        </div>

        {/* Overall Score */}

        <div className="mb-10 rounded-3xl bg-white p-10 shadow-md">

          <p className="text-lg text-slate-500">
            Overall Performance
          </p>

          <h1 className="mt-2 text-7xl font-extrabold text-indigo-600">
            {finalReport.overallScore}
            <span className="text-4xl">
              /100
            </span>
          </h1>

        </div>

        {/* Score Cards */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <ScoreCard
            title="Technical Skills"
            value={
              finalReport.technicalScore
            }
            color="bg-blue-100"
            icon={
              <Brain
                className="text-blue-600"
                size={30}
              />
            }
          />

          <ScoreCard
            title="Communication"
            value={
              finalReport.communicationScore
            }
            color="bg-green-100"
            icon={
              <TrendingUp
                className="text-green-600"
                size={30}
              />
            }
          />

          <ScoreCard
            title="Interview Presence"
            value={
              finalReport.interviewPresence
            }
            color="bg-orange-100"
            icon={
              <UserCheck
                className="text-orange-600"
                size={30}
              />
            }
          />

          <ScoreCard
            title="Resume Alignment"
            value={
              finalReport.resumeAlignment
            }
            color="bg-purple-100"
            icon={
              <Award
                className="text-purple-600"
                size={30}
              />
            }
          />

        </div>
        {/* Behavior Insights */}

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-md">

          <h2 className="mb-6 text-2xl font-bold">
            👁️ Behavior Insights
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">
                Eye Contact
              </p>

              <h3 className="mt-2 text-3xl font-bold text-indigo-600">
                {behaviorSummary?.eyeContact ?? 0}%
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {
                  (behaviorSummary?.eyeContact ?? 0) >= 75
                    ? "Excellent eye contact"
                    : (behaviorSummary?.eyeContact ?? 0) >= 50
                      ? "Good eye contact"
                      : "Needs improvement"
                }
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">
                Speaking Activity
              </p>

              <h3 className="mt-2 text-3xl font-bold text-green-600">
                {behaviorSummary?.speakingPercentage ?? 0}%
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {
                  (behaviorSummary?.speakingPercentage ?? 0) >= 60
                    ? "Active speaker"
                    : "Could speak more confidently"
                }
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">
                Smile Frequency
              </p>

              <h3 className="mt-2 text-3xl font-bold text-yellow-500">
                {behaviorSummary?.smilePercentage ?? 0}%
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {
                  (behaviorSummary?.smilePercentage ?? 0) >= 15
                    ? "Positive expression"
                    : "Neutral expression"
                }
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">
                Blink Count
              </p>

              <h3 className="mt-2 text-3xl font-bold text-blue-600">
                {behaviorSummary?.blinkCount ?? 0}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Natural blinking
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">
                Head Stability
              </p>

              <h3 className="mt-2 text-3xl font-bold text-purple-600">
                {behaviorSummary?.headMovement ?? 0}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Lower movement indicates better stability
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">
                AI Behavior Analysis
              </p>

              <div className="mt-4 space-y-2">

                <p>
                  Engagement:
                  <strong>
                    {behaviorLevel(behaviorPrediction?.engagement)}
                  </strong>
                </p>

                <p>
                  Boredom:
                  <strong>
                    {" "}
                    {behaviorPrediction?.boredom ?? "-"}
                  </strong>
                </p>

                <p>
                  Confusion:
                  <strong>
                    {" "}
                    {behaviorPrediction?.confusion ?? "-"}
                  </strong>
                </p>

                <p>
                  Frustration:
                  <strong>
                    {" "}
                    {behaviorPrediction?.frustration ?? "-"}
                  </strong>
                </p>

              </div>

            </div>

          </div>

        </div>
        {/* Two Columns */}

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          {/* Strengths */}

          <div className="rounded-3xl bg-white p-8 shadow-md">

            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">

              <CheckCircle className="text-emerald-600" />

              Strengths

            </h2>

            <div className="space-y-4">

              {finalReport.strengths.map(
                (
                  strength,
                  index
                ) => (
                  <div
                    key={index}
                    className="rounded-xl bg-emerald-50 p-4"
                  >
                    ✓ {strength}
                  </div>
                )
              )}

            </div>

          </div>

          {/* Improvements */}

          <div className="rounded-3xl bg-white p-8 shadow-md">

            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">

              <Lightbulb className="text-yellow-500" />

              Areas to Improve

            </h2>

            <div className="space-y-4">

              {finalReport.improvements.map(
                (
                  improvement,
                  index
                ) => (
                  <div
                    key={index}
                    className="rounded-xl bg-yellow-50 p-4"
                  >
                    • {improvement}
                  </div>
                )
              )}

            </div>

          </div>

        </div>

        {/* Summary */}

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-md">

          <h2 className="mb-5 text-2xl font-bold">
            AI Summary
          </h2>

          <p className="leading-8 text-slate-700">
            {finalReport.summary}
          </p>

        </div>

        {/* Readiness */}

        <div className="mt-10 rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-600 p-8 text-white shadow-xl">

          <h2 className="text-2xl font-bold">
            Interview Readiness
          </h2>

          <p className="mt-4 text-lg leading-8">
            {
              finalReport.interviewReadiness
            }
          </p>

        </div>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-5">

          <button
            onClick={() =>
              downloadInterviewReport({
                ...finalReport,
                behaviorSummary,
                behaviorPrediction,
              })
            }
            className="flex items-center gap-3 rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white transition hover:bg-indigo-700"
          >
            <Download size={20} />

            Download Report
          </button>

          <button
            onClick={() => navigate("/history")}
            className="rounded-xl border-2 border-blue-600 px-6 py-3 font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            View Interview History
          </button>

        </div>

      </div>

    </div>
  );
}

export default Report;