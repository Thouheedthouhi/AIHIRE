import { useInterviewContext } from "../context/interview/InterviewContext";

function InterviewReport() {
  const { finalReport } = useInterviewContext();

  if (!finalReport) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-xl font-semibold">
          No interview report found.
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="mx-auto max-w-7xl">

        <h1 className="mb-8 text-4xl font-bold">
          Interview Report
        </h1>

        <pre className="rounded-xl bg-white p-6 shadow">
          {JSON.stringify(finalReport, null, 2)}
        </pre>

      </div>

    </div>
  );
}

export default InterviewReport;