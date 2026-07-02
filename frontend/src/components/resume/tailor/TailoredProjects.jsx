function TailoredProjects({ projects = [] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-semibold">
        Optimized Projects
      </h2>

      <div className="space-y-6">

        {projects.map((project, index) => (

          <div
            key={index}
            className="rounded-2xl border border-slate-200 p-5"
          >

            <h3 className="mb-3 text-lg font-semibold text-slate-900">
              {project.title}
            </h3>

            <p className="leading-7 text-slate-600">
              {project.description}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TailoredProjects;