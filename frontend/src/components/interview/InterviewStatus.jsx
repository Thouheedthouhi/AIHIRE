import {
  Camera,
  Mic,
  ScanFace,
  Radio,
} from "lucide-react";

function StatusItem({
  icon: Icon,
  label,
  active,
  activeColor,
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
      <div className="flex items-center gap-3">
        <div
          className={`rounded-xl p-2 ${
            active
              ? activeColor.bg
              : "bg-slate-200"
          }`}
        >
          <Icon
            size={20}
            className={
              active
                ? activeColor.text
                : "text-slate-500"
            }
          />
        </div>

        <span className="font-medium text-slate-700">
          {label}
        </span>
      </div>

      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${
          active
            ? activeColor.badge
            : "bg-slate-200 text-slate-600"
        }`}
      >
        {active ? "Active" : "Inactive"}
      </span>
    </div>
  );
}

function InterviewStatus({
  cameraReady = false,
  microphoneReady = false,
  faceDetected = false,
  isRecording = false,
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-xl font-bold">
        Interview Status
      </h2>

      <div className="space-y-4">
        <StatusItem
          icon={Camera}
          label="Camera"
          active={cameraReady}
          activeColor={{
            bg: "bg-emerald-100",
            text: "text-emerald-600",
            badge:
              "bg-emerald-100 text-emerald-700",
          }}
        />

        <StatusItem
          icon={Mic}
          label="Microphone"
          active={microphoneReady}
          activeColor={{
            bg: "bg-blue-100",
            text: "text-blue-600",
            badge:
              "bg-blue-100 text-blue-700",
          }}
        />

        <StatusItem
          icon={ScanFace}
          label="Face Detection"
          active={faceDetected}
          activeColor={{
            bg: "bg-violet-100",
            text: "text-violet-600",
            badge:
              "bg-violet-100 text-violet-700",
          }}
        />

        <StatusItem
          icon={Radio}
          label="Recording"
          active={isRecording}
          activeColor={{
            bg: "bg-red-100",
            text: "text-red-600",
            badge:
              "bg-red-100 text-red-700",
          }}
        />
      </div>
    </div>
  );
}

export default InterviewStatus;