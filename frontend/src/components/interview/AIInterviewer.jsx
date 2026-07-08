import {
  Bot,
  Volume2,
  Brain,
  Ear,
  Sparkles,
} from "lucide-react";

import SpeakingWave from "./SpeakingWave";

function AIInterviewer({
  question,
  isSpeaking,
  onReplay,
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">

        <div className="flex items-center gap-4">

          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 ${
              isSpeaking
                ? "bg-violet-600 shadow-lg shadow-violet-300"
                : "bg-violet-100"
            }`}
          >
            <Bot
              size={30}
              className={
                isSpeaking
                  ? "text-white"
                  : "text-violet-600"
              }
            />
          </div>

          <div>
            <div className="flex items-center gap-2">

              <h2 className="text-2xl font-bold text-slate-900">
                AI Interviewer
              </h2>

              <Sparkles
                size={18}
                className="text-violet-500"
              />

            </div>

            <p className="text-sm text-slate-500">
              Your virtual technical interviewer
            </p>
          </div>

        </div>

        <button
          onClick={onReplay}
          className="rounded-2xl border border-slate-200 bg-white p-3 transition hover:bg-violet-50 hover:shadow"
        >
          <Volume2
            size={22}
            className="text-violet-600"
          />
        </button>

      </div>

      {/* Question */}

      <div className="flex flex-1 flex-col overflow-hidden px-8 py-6">

        <div className="mb-5 inline-flex w-fit rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
          Current Question
        </div>

        <div className="flex-1 overflow-y-auto pr-2">

         <p className="whitespace-pre-wrap break-words text-lg font-medium leading-8 text-slate-900">
  {question}
</p>

        </div>

      </div>

      {/* Footer */}

      <div
        className={`border-t px-6 py-5 transition-all duration-300 ${
          isSpeaking
            ? "bg-violet-50"
            : "bg-emerald-50"
        }`}
      >

        {isSpeaking ? (
          <>
            <div className="mb-3 flex items-center gap-3">

              <Brain
                size={22}
                className="text-violet-600"
              />

              <span className="font-semibold text-violet-700">
                AI is asking the question...
              </span>

            </div>

            <SpeakingWave />
          </>
        ) : (
          <div className="flex items-center gap-3">

            <Ear
              size={22}
              className="text-emerald-600"
            />

            <span className="font-semibold text-emerald-700">
              Listening... You can answer now.
            </span>

          </div>
        )}

      </div>

    </div>
  );
}

export default AIInterviewer;