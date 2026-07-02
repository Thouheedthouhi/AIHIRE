function TailoredExperience({
  experience = [],
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-semibold">
        Experience
      </h2>

      <div className="space-y-6">

        {experience.map((item, index) => (

          <div
            key={index}
            className="rounded-2xl border border-slate-200 p-5"
          >

            <h3 className="text-lg font-semibold">
              {item.role}
            </h3>

            <p className="mb-3 text-slate-500">
              {item.company}
            </p>

            <p className="leading-7 text-slate-600">
              {item.description}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TailoredExperience;