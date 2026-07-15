import { useEffect, useState } from "react";
import { getHistory } from "../services/interview/historyService";

function InterviewHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    async function loadHistory() {
      const data = await getHistory();
      setHistory(data);
    }

    loadHistory();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Interview History
      </h1>

      <div className="space-y-5">
        {history.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold">
              {item.role}
            </h2>

            <p className="text-gray-500 mt-2">
              {new Date(item.createdAt).toLocaleString()}
            </p>

            <div className="flex gap-8 mt-5">
              <div>
                <p className="text-gray-500">Overall</p>
                <p className="text-2xl font-bold">
                  {item.overallScore}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Technical</p>
                <p className="text-2xl font-bold">
                  {item.technicalScore}
                </p>
              </div>

              <div>
                <p className="text-gray-500">
                  Communication
                </p>
                <p className="text-2xl font-bold">
                  {item.communicationScore}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InterviewHistory;