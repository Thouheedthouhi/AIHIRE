import {
  FileText,
  Brain,
  Mic,
  Smile,
  BarChart3,
  Briefcase,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Resume Analysis",
    description:
      "Receive detailed feedback to strengthen your resume before applying for jobs.",
  },
  {
    icon: Brain,
    title: "Mock AI Interview",
    description:
      "Practice realistic interviews tailored to the role you want to apply for.",
  },
  {
    icon: Mic,
    title: "Speech Analysis",
    description:
      "Improve your communication with insights into clarity, pace, and confidence.",
  },
  {
    icon: Smile,
    title: "Confidence Insights",
    description:
      "Understand how confident and engaged you appear throughout your interview.",
  },
  {
    icon: BarChart3,
    title: "Performance Report",
    description:
      "Receive a complete report with scores, strengths, and areas to improve.",
  },
  {
    icon: Briefcase,
    title: "Role-Based Preparation",
    description:
      "Prepare for interviews with questions designed for your chosen career path.",
  },
];

function Features() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Everything You Need to Ace Your Next Interview
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-lg text-slate-600">
            Build confidence, improve your interview skills, and prepare
            smarter with personalized feedback.
          </p>
        </div>

        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100">
                  <Icon
                    size={28}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;