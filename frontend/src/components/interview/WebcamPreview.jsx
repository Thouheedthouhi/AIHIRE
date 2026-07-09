import {
  initializeFaceMesh,
  detectFace,
} from "../../services/vision/faceMesh";
import { useInterviewContext } from "../../context/interview/InterviewContext";

import behaviorTracker from "../../services/vision/behaviorTracker";

import {
  extractFeatures,
} from "../../services/vision/featureExtractor";

import {
  predictBehavior,
} from "../../services/interview/behaviorService";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Camera,
  CameraOff,
  ScanFace,
} from "lucide-react";

function WebcamPreview() {

  const videoRef = useRef(null);

  const streamRef = useRef(null);

  const lastPredictionTime =
    useRef(0);

  const [cameraReady, setCameraReady] =
    useState(false);

  const [error, setError] =
    useState("");
  const {
    setBehaviorPrediction,
  } = useInterviewContext();

  useEffect(() => {

    let mounted = true;

    async function initializeCamera() {

      try {

        behaviorTracker.reset();

        const stream =
          await navigator.mediaDevices.getUserMedia({

            video: {

              width: 1280,

              height: 720,

              facingMode: "user",

            },

            audio: false,

          });

        if (!mounted) {

          stream
            .getTracks()
            .forEach((track) =>
              track.stop()
            );

          return;

        }

        streamRef.current = stream;

        if (videoRef.current) {

          videoRef.current.srcObject =
            stream;

          try {

            await videoRef.current.play();

            await initializeFaceMesh();

            console.log(
              "✅ FaceMesh Loaded"
            );

            const detect =
              async () => {

                if (
                  !mounted ||
                  !videoRef.current
                ) {
                  return;
                }

                if (
                  videoRef.current.readyState <
                  2
                ) {
                  requestAnimationFrame(
                    detect
                  );
                  return;
                }

                const results =
                  await detectFace(
                    videoRef.current
                  );

                if (
                  results.faceLandmarks &&
                  results.faceLandmarks.length >
                  0
                ) {

                  const features =
                    extractFeatures({

                      landmarks:
                        results
                          .faceLandmarks[0],

                      blendshapes:
                        results
                          .faceBlendshapes[0],

                      matrix:
                        results
                          .facialTransformationMatrixes[0],

                    });

                  if (features) {

                    behaviorTracker.update(
                      features
                    );

                    const summary =
                      behaviorTracker.getSummary();

                    console.table(
                      features
                    );

                    console.table(
                      summary
                    );

                    const now =
                      Date.now();

                    if (
                      summary &&
                      now -
                      lastPredictionTime.current >=
                      25000
                    ) {

                      lastPredictionTime.current =
                        now;

                      try {

                        const prediction =
                          await predictBehavior(summary);

                        setBehaviorPrediction(
                          prediction
                        );

                        console.clear();

                       


                      } catch (err) {

                        console.error(
                          "Behavior Prediction Error:",
                          err
                        );

                      }

                    }

                  }

                }

                requestAnimationFrame(
                  detect
                );

              };

            detect();

          } catch (err) {

            console.warn(
              "Video play interrupted:",
              err
            );

          }

        }
        setCameraReady(true);

      } catch (err) {

        console.error(
          "Camera Error:",
          err
        );

        setError(
          `${err.name}: ${err.message}`
        );

        setCameraReady(false);

      }

    }

    initializeCamera();

    return () => {

      mounted = false;

      behaviorTracker.reset();

      setCameraReady(false);

      if (videoRef.current) {

        videoRef.current.pause();

        videoRef.current.srcObject =
          null;

      }

      if (streamRef.current) {

        streamRef.current
          .getTracks()
          .forEach((track) =>
            track.stop()
          );

        streamRef.current = null;

      }

    };

  }, []);

  return (

    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">

      <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">

        <div className="flex items-center gap-3">

          {cameraReady ? (

            <Camera
              className="text-emerald-600"
              size={22}
            />

          ) : (

            <CameraOff
              className="text-red-500"
              size={22}
            />

          )}

          <div>

            <h2 className="font-bold">
              Live Camera
            </h2>

            <p className="text-sm text-slate-500">
              Behaviour Analysis
            </p>

          </div>

        </div>

        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${cameraReady
              ? "bg-emerald-100 text-emerald-700"
              : "bg-red-100 text-red-700"
            }`}
        >
          {cameraReady
            ? "LIVE"
            : "OFFLINE"}
        </span>

      </div>

      <div className="relative flex-1 overflow-hidden bg-black">

        {error ? (

          <div className="flex h-full items-center justify-center p-8 text-center text-white">
            {error}
          </div>

        ) : (

          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="h-full w-full object-cover"
          />

        )}

        {cameraReady && (

          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white">

            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-white" />

            LIVE

          </div>

        )}

        <div className="absolute bottom-5 left-5 rounded-xl bg-black/60 px-4 py-2 text-sm text-white">
          AIHire
        </div>

        <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-xl bg-black/60 px-4 py-2 text-sm text-white">

          <ScanFace size={18} />

          Face Detection

        </div>

      </div>

    </div>

  );

}

export default WebcamPreview;