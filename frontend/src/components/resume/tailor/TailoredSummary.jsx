function TailoredSummary({ summary }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="mb-4 text-2xl font-semibold">
        Professional Summary
      </h2>

      <p className="leading-8 text-slate-600">
        {summary}
      </p>

    </div>
  );
}

export default TailoredSummary;