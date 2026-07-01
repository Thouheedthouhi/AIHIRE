import {
  CheckCircle2,
  Target,
  TrendingUp,
  ShieldCheck,
  Clock,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Personalized Interview Experience",
    description:
      "Every interview is tailored to your selected job role and skill level.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    description:
      "Monitor your improvement with detailed reports after every interview.",
  },
  {
    icon: Sparkles,
    title: "Build Confidence",
    description:
      "Practice in a realistic environment before attending real interviews.",
  },
  {
    icon: ShieldCheck,
    title: "Improve Every Attempt",
    description:
      "Receive actionable suggestions to strengthen your resume and interview performance.",
  },
  {
    icon: Clock,
    title: "Practice Anytime",
    description:
      "Prepare whenever it's convenient with unlimited mock interview sessions.",
  },
  {
    icon: CheckCircle2,
    title: "Increase Job Readiness",
    description:
      "Develop the skills and confidence needed to perform better in real interviews.",
  },
];

function WhyAIHire() {
  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Choose AIHire?
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-lg text-slate-600">
            AIHire helps you prepare smarter, build confidence, and perform
            better in every interview.
          </p>
        </div>

        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Icon size={28} className="text-blue-600" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyAIHire;