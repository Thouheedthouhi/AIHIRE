import { useState } from "react";
import {
  Briefcase,
  Layers3,
  ListOrdered,
  Play,
  ClipboardList,
} from "lucide-react";

function AIInterviewSetup({
  defaultRole = "Software Engineer",
  defaultDifficulty = "Medium",
  defaultType = "Mixed",
  defaultCount = 5,
  onStart,
}) {
  const [role, setRole] = useState(defaultRole);

  const [difficulty, setDifficulty] =
    useState(defaultDifficulty);

  const [interviewType, setInterviewType] =
    useState(defaultType);

  const [questionCount, setQuestionCount] =
    useState(defaultCount);

  const roles = [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Machine Learning Engineer",
    "Data Analyst",
    "DevOps Engineer",
  ];

  const difficulties = [
    "Easy",
    "Medium",
    "Hard",
  ];

  const interviewTypes = [
    "Technical",
    "Mixed",
    "HR",
  ];

  return (
    <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

      <h2 className="mb-2 text-2xl font-bold">
        AI Interview Setup
      </h2>

      <p className="mb-8 text-slate-500">
        Configure your interview and let AI generate
        personalized questions from your resume.
      </p>

      {/* Role */}

      <div className="mb-6">

        <label className="mb-2 flex items-center gap-2 font-semibold">

          <Briefcase size={18} />

          Target Role

        </label>

        <select
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
          className="w-full rounded-2xl border border-slate-300 p-4 outline-none focus:border-violet-500"
        >
          {roles.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>

      </div>

      {/* Interview Type */}

      <div className="mb-6">

        <label className="mb-2 flex items-center gap-2 font-semibold">

          <ClipboardList size={18} />

          Interview Type

        </label>

        <div className="grid grid-cols-3 gap-4">

          {interviewTypes.map((type) => (

            <button
              key={type}
              type="button"
              onClick={() =>
                setInterviewType(type)
              }
              className={`rounded-2xl py-4 font-semibold transition ${
                interviewType === type
                  ? "bg-sky-600 text-white shadow-lg"
                  : "border border-slate-300 bg-white hover:bg-slate-50"
              }`}
            >
              {type}
            </button>

          ))}

        </div>

      </div>

      {/* Difficulty */}

      <div className="mb-6">

        <label className="mb-2 flex items-center gap-2 font-semibold">

          <Layers3 size={18} />

          Difficulty

        </label>

        <div className="grid grid-cols-3 gap-4">

          {difficulties.map((level) => (

            <button
              key={level}
              type="button"
              onClick={() =>
                setDifficulty(level)
              }
              className={`rounded-2xl py-4 font-semibold transition ${
                difficulty === level
                  ? "bg-violet-600 text-white shadow-lg"
                  : "border border-slate-300 bg-white hover:bg-slate-50"
              }`}
            >
              {level}
            </button>

          ))}

        </div>

      </div>

      {/* Question Count */}

      <div className="mb-8">

        <label className="mb-2 flex items-center gap-2 font-semibold">

          <ListOrdered size={18} />

          Number of Questions

        </label>

        <input
          type="range"
          min="3"
          max="10"
          value={questionCount}
          onChange={(e) =>
            setQuestionCount(
              Number(e.target.value)
            )
          }
          className="w-full accent-violet-600"
        />

        <div className="mt-2 text-center text-lg font-bold text-violet-600">
          {questionCount} Questions
        </div>

      </div>

      <button
        onClick={() =>
          onStart({
            role,
            difficulty,
            interviewType,
            questionCount,
          })
        }
        className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-violet-600 text-lg font-semibold text-white transition hover:bg-violet-700"
      >

        <Play size={20} />

        Generate Resume Based Interview

      </button>

    </div>
  );
}

export default AIInterviewSetup;