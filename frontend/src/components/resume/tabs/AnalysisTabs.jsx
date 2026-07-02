function AnalysisTabs({
  activeTab,
  onTabChange,
}) {
  return (
    <div className="mx-auto flex w-fit rounded-2xl bg-slate-100 p-1">

      <button
        onClick={() => onTabChange("ats")}
        className={`rounded-xl px-8 py-3 font-medium transition ${
          activeTab === "ats"
            ? "bg-white text-blue-600 shadow"
            : "text-slate-600 hover:text-slate-900"
        }`}
      >
        📄 ATS Analysis
      </button>

      <button
        onClick={() => onTabChange("match")}
        className={`rounded-xl px-8 py-3 font-medium transition ${
          activeTab === "match"
            ? "bg-white text-blue-600 shadow"
            : "text-slate-600 hover:text-slate-900"
        }`}
      >
        💼 Resume vs JD
      </button>

    </div>
  );
}

export default AnalysisTabs;