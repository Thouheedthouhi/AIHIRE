import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function PerformanceChart({ dashboard }) {
  const data =
    dashboard?.recentInterviews?.map((item, index) => ({
      name: `#${index + 1}`,
      score: item.overallScore,
    })) || [];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="text-xl font-semibold text-slate-900">
        Performance Trend
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Overall interview scores
      </p>

      <div className="mt-6 h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis domain={[0, 100]} />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="score"
              stroke="#2563eb"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default PerformanceChart;