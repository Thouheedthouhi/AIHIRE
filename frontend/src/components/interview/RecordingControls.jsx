import {
  ArrowRight,
  Loader2,
  RotateCcw,
  Mic,
} from "lucide-react";

import {
  InterviewState,
} from "../../context/interview/InterviewContext";

function RecordingControls({
  interviewState,
  isSubmitting,
  onReplay,
  onFinish,
}) {
  const isSpeaking =
    interviewState === InterviewState.AI_SPEAKING;

  const isAnswering =
    interviewState === InterviewState.ANSWERING;

  const isSaving =
    interviewState === InterviewState.SAVING;

  const isProcessing =
    interviewState === InterviewState.PROCESSING;

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between gap-5">

        {/* Replay */}

        <button
          onClick={onReplay}
          disabled={
            isSpeaking ||
            isSaving ||
            isProcessing ||
            isSubmitting
          }
          className="flex h-14 items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-8 font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <RotateCcw size={20} />
          Replay Question
        </button>

        {/* Recording Badge */}

        {isAnswering && !isSubmitting && (
          <div className="flex items-center gap-2 rounded-full bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">
            <span className="h-3 w-3 animate-pulse rounded-full bg-red-500" />
            Recording...
          </div>
        )}

        {/* Finish Button */}

        <button
          onClick={onFinish}
          disabled={
            isSpeaking ||
            isSaving ||
            isProcessing ||
            isSubmitting
          }
          className="flex h-14 min-w-[230px] items-center justify-center gap-3 rounded-2xl bg-violet-600 px-8 font-semibold text-white shadow-lg shadow-violet-300 transition-all duration-200 hover:-translate-y-0.5 hover:bg-violet-700 disabled:cursor-not-allowed disabled:bg-slate-400 disabled:shadow-none"
        >
          {isSaving ||
          isProcessing ||
          isSubmitting ? (
            <>
              <Loader2
                size={20}
                className="animate-spin"
              />
              Processing...
            </>
          ) : (
            <>
              <Mic size={20} />
              Finish Answer
              <ArrowRight size={20} />
            </>
          )}
        </button>

      </div>
    </div>
  );
}

export default RecordingControls;