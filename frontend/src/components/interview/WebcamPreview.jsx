import { useEffect, useRef, useState } from "react";
import { Camera, CameraOff } from "lucide-react";

function WebcamPreview() {
  const videoRef = useRef(null);

  const [cameraReady, setCameraReady] =
    useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    let stream;

    async function startCamera() {
      try {
        stream =
          await navigator.mediaDevices.getUserMedia({
            video: {
              width: 1280,
              height: 720,
              facingMode: "user",
            },
            audio: false,
          });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        setCameraReady(true);
      } catch (err) {
        console.error(err);

        setError(
          "Unable to access webcam. Please allow camera permission."
        );
      }
    }

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) =>
          track.stop()
        );
      }
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">

      <div className="flex items-center justify-between border-b p-5">

        <div className="flex items-center gap-3">

          {cameraReady ? (
            <Camera className="text-emerald-600" />
          ) : (
            <CameraOff className="text-red-500" />
          )}

          <h2 className="text-lg font-bold">
            Live Camera
          </h2>

        </div>

        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${
            cameraReady
              ? "bg-emerald-100 text-emerald-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {cameraReady
            ? "Active"
            : "Offline"}
        </span>

      </div>

      <div className="relative bg-black">

        {error ? (
          <div className="flex h-[420px] items-center justify-center p-8 text-center text-red-500">
            {error}
          </div>
        ) : (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="h-[420px] w-full object-cover"
          />
        )}

        {cameraReady && (
          <div className="absolute bottom-4 left-4 rounded-full bg-black/70 px-4 py-2 text-sm font-medium text-white">
            ● Live
          </div>
        )}

      </div>

    </div>
  );
}

export default WebcamPreview;