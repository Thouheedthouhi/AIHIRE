function AddedKeywords({ keywords = [] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-semibold">
        ATS Keywords Added
      </h2>

      <div className="flex flex-wrap gap-3">

        {keywords.map((keyword) => (

          <span
            key={keyword}
            className="rounded-full bg-green-50 px-4 py-2 font-medium text-green-700"
          >
            {keyword}
          </span>

        ))}

      </div>

    </div>
  );
}

export default AddedKeywords;