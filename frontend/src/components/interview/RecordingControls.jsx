import {
  ArrowRight,
  Loader2,
  RotateCcw,
} from "lucide-react";

import {
  InterviewState,
} from "../../context/interview/InterviewContext";

function RecordingControls({
  interviewState,
  onReplay,
  onFinish,
}) {
  const isSpeaking =
    interviewState === InterviewState.AI_SPEAKING;

  const isSaving =
    interviewState === InterviewState.SAVING;

  const isProcessing =
    interviewState === InterviewState.PROCESSING;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">

      <div className="flex flex-wrap justify-center gap-4">

        <button
          onClick={onReplay}
          disabled={isSpeaking}
          className="flex items-center gap-2 rounded-2xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <RotateCcw size={18} />

          Replay Question
        </button>

        <button
          onClick={onFinish}
          disabled={isSpeaking || isSaving || isProcessing}
          className="flex items-center gap-2 rounded-2xl bg-violet-600 px-8 py-3 font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {(isSaving || isProcessing) ? (
            <>
              <Loader2
                size={18}
                className="animate-spin"
              />

              Processing...
            </>
          ) : (
            <>
              Finish Answer

              <ArrowRight size={18} />
            </>
          )}
        </button>

      </div>

    </div>
  );
}

export default RecordingControls;