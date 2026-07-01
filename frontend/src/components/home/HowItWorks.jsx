import {
  Upload,
  Briefcase,
  Bot,
  FileBarChart,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Resume",
    description:
      "Upload your resume in PDF format for AI-powered analysis.",
  },
  {
    icon: Briefcase,
    title: "Choose Job Role",
    description:
      "Select your target role to generate relevant interview questions.",
  },
  {
    icon: Bot,
    title: "Attend AI Interview",
    description:
      "Answer questions while AI analyzes your speech and facial expressions.",
  },
  {
    icon: FileBarChart,
    title: "Receive AI Report",
    description:
      "Get resume score, interview score, emotion analysis, and personalized improvement tips.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center">
          How AIHire Works
        </h2>

        <p className="text-slate-500 text-center mt-4">
          Complete your AI interview in four simple steps.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 shadow hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <Icon
                  size={42}
                  className="text-blue-600 mt-4"
                />

                <h3 className="text-xl font-semibold mt-6">
                  {step.title}
                </h3>

                <p className="text-slate-500 mt-3">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;