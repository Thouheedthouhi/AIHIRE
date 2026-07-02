import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Target,
  Rocket,
} from "lucide-react";

function ResumeSummary({
  overview = "AI-powered career insights will appear here after analysis.",
  strengths = [],
  priorityImprovements = {},
  nextSteps = [],
  interviewReadiness = "",
  motivation = "",
}) {
  const high = priorityImprovements.high || [];
  const medium = priorityImprovements.medium || [];
  const low = priorityImprovements.low || [];

  return (
    <div className="space-y-6">

      {/* Overview */}

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50">
            <Sparkles
              size={24}
              className="text-violet-600"
            />
          </div>

          <div>

            <h2 className="text-2xl font-bold text-slate-900">
              AI Career Coach
            </h2>

            <p className="text-sm text-slate-500">
              Personalized guidance to help you land more interviews.
            </p>

          </div>

        </div>

        <div className="mt-8 rounded-2xl bg-slate-50 p-6">

          <h3 className="mb-3 text-lg font-semibold">
            Overview
          </h3>

          <p className="leading-8 text-slate-700">
            {overview}
          </p>

        </div>

      </div>

      {/* Interview Readiness */}

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <div className="flex items-center gap-3">

          <Target
            size={24}
            className="text-blue-600"
          />

          <h2 className="text-xl font-semibold">
            Interview Readiness
          </h2>

        </div>

        <div className="mt-6 inline-flex rounded-full bg-blue-100 px-5 py-2 text-lg font-semibold text-blue-700">

          {interviewReadiness || "Analyzing..."}

        </div>

      </div>

      {/* Strengths */}

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <h2 className="mb-5 text-xl font-semibold text-green-700">
          Your Strengths
        </h2>

        {strengths.length ? (

          <div className="space-y-3">

            {strengths.map((item) => (

              <div
                key={item}
                className="flex gap-3 rounded-xl bg-green-50 p-4"
              >

                <CheckCircle2
                  size={20}
                  className="mt-1 text-green-600"
                />

                <p className="text-green-900">
                  {item}
                </p>

              </div>

            ))}

          </div>

        ) : (

          <p className="text-slate-500">
            Your strongest areas will appear here.
          </p>

        )}

      </div>

      {/* Priority Improvements */}

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <h2 className="mb-6 text-xl font-semibold text-orange-700">
          Priority Improvements
        </h2>

        <ImprovementSection
          title="🔥 High Priority"
          items={high}
        />

        <ImprovementSection
          title="⚡ Medium Priority"
          items={medium}
        />

        <ImprovementSection
          title="⭐ Nice to Have"
          items={low}
        />

      </div>

      {/* Next Steps */}

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <div className="mb-5 flex items-center gap-3">

          <Rocket
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-xl font-semibold">
            Your Action Plan
          </h2>

        </div>

        {nextSteps.length ? (

          <div className="space-y-3">

            {nextSteps.map((step) => (

              <div
                key={step}
                className="flex gap-3 rounded-xl bg-indigo-50 p-4"
              >

                <ArrowRight
                  size={20}
                  className="mt-1 text-indigo-600"
                />

                <p>
                  {step}
                </p>

              </div>

            ))}

          </div>

        ) : (

          <p className="text-slate-500">
            Your personalized action plan will appear here.
          </p>

        )}

      </div>

      {/* Motivation */}

      <div className="rounded-3xl border border-green-200 bg-green-50 p-8">

        <h2 className="mb-4 text-xl font-semibold text-green-700">
          Keep Going 🚀
        </h2>

        <p className="leading-8 text-slate-700">
          {motivation}
        </p>

      </div>

    </div>
  );
}

function ImprovementSection({
  title,
  items,
}) {

  if (!items.length) return null;

  return (

    <div className="mb-8">

      <h3 className="mb-4 font-semibold">
        {title}
      </h3>

      <div className="space-y-3">

        {items.map((item) => (

          <div
            key={item}
            className="flex gap-3 rounded-xl bg-orange-50 p-4"
          >

            <AlertTriangle
              size={18}
              className="mt-1 text-orange-600"
            />

            <p>
              {item}
            </p>

          </div>

        ))}

      </div>

    </div>

  );
}

export default ResumeSummary;