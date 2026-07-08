import {
  FilesetResolver,
  FaceLandmarker,
} from "@mediapipe/tasks-vision";

let faceLandmarker = null;

export async function initializeFaceMesh() {
  if (faceLandmarker) {
    return faceLandmarker;
  }

  const vision =
    await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    );

  faceLandmarker =
    await FaceLandmarker.createFromOptions(
      vision,
      {
        baseOptions: {
          modelAssetPath:
            "/models/face_landmarker.task",
        },

        runningMode: "VIDEO",

        numFaces: 1,

        outputFaceBlendshapes: true,

        outputFacialTransformationMatrixes: true,
      }
    );

  return faceLandmarker;
}

export async function detectFace(video) {
  if (!faceLandmarker) {
    await initializeFaceMesh();
  }

  const now = performance.now();

  const results = faceLandmarker.detectForVideo(
    video,
    now
  );

  return results;
}