import { useLocation } from "react-router-dom";

import DashboardLayout from "../components/dashboard/layout/DashboardLayout";

import TailoredSummary from "../components/resume/tailor/TailoredSummary";
import TailoredSkills from "../components/resume/tailor/TailoredSkills";
import TailoredProjects from "../components/resume/tailor/TailoredProjects";
import TailoredExperience from "../components/resume/tailor/TailoredExperience";
import AddedKeywords from "../components/resume/tailor/AddedKeywords";

function TailoredResume() {

  const { state } = useLocation();

  const data = state?.tailored_resume;

  if (!data) {

    return (

      <DashboardLayout>

        <div className="mx-auto max-w-5xl">

          <h1 className="text-3xl font-bold">
            No Tailored Resume Found
          </h1>

          <p className="mt-3 text-slate-500">
            Please tailor a resume first.
          </p>

        </div>

      </DashboardLayout>

    );

  }

  return (

    <DashboardLayout>

      <div className="mx-auto max-w-6xl space-y-8">

        <div>

          <h1 className="text-4xl font-bold">
            AI Tailored Resume
          </h1>

          <p className="mt-2 text-slate-500">
            Optimized specifically for your selected Job Description.
          </p>

        </div>

        <TailoredSummary
          summary={data.professional_summary}
        />

        <TailoredSkills
          skills={data.technical_skills}
        />

        <TailoredProjects
          projects={data.projects}
        />

        <TailoredExperience
          experience={data.experience}
        />

        <AddedKeywords
          keywords={data.ats_keywords_added}
        />

      </div>

    </DashboardLayout>

  );

}

export default TailoredResume;