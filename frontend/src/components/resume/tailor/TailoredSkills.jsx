function TailoredSkills({ skills = [] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-semibold">
        Technical Skills
      </h2>

      <div className="flex flex-wrap gap-3">

        {skills.map((skill) => (

          <span
            key={skill}
            className="rounded-full bg-blue-50 px-4 py-2 font-medium text-blue-700"
          >
            {skill}
          </span>

        ))}

      </div>

    </div>
  );
}

export default TailoredSkills;