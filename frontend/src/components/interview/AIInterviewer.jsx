import {
  Bot,
  Volume2,
  Ear,
  Brain,
} from "lucide-react";

import SpeakingWave from "./SpeakingWave";

function AIInterviewer({
  question,
  isSpeaking,
  onReplay,
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-100">
            <Bot
              size={34}
              className="text-violet-600"
            />
          </div>

          <div>

            <h2 className="text-xl font-bold">
              AI Interviewer
            </h2>

            <p className="text-sm text-slate-500">
              Your virtual interviewer
            </p>

          </div>

        </div>

        <button
          onClick={onReplay}
          className="rounded-xl border border-slate-200 p-3 transition hover:bg-slate-100"
        >
          <Volume2 className="text-violet-600" />
        </button>

      </div>

      {/* Question */}

      <div className="rounded-2xl bg-slate-50 p-6">

        <h3 className="mb-4 text-lg font-semibold text-slate-700">
          Current Question
        </h3>

        <p className="text-xl leading-9 text-slate-900">
          {question}
        </p>

      </div>

      {/* Status */}

      <div className="mt-8">

        {isSpeaking ? (
          <div className="rounded-2xl bg-violet-50 p-5">

            <div className="mb-3 flex items-center gap-3">

              <Brain
                className="text-violet-600"
              />

              <span className="font-semibold text-violet-700">
                AI is speaking...
              </span>

            </div>

            <SpeakingWave />

          </div>
        ) : (
          <div className="rounded-2xl bg-emerald-50 p-5">

            <div className="flex items-center gap-3">

              <Ear className="text-emerald-600" />

              <span className="font-semibold text-emerald-700">
                Listening to your answer...
              </span>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default AIInterviewer;