// frontend/src/utils/webcam.js

let cameraStream = null;

/**
 * Start webcam
 */
export async function startCamera(videoElement) {
  if (!navigator.mediaDevices?.getUserMedia) {
    throw new Error(
      "Webcam is not supported in this browser."
    );
  }

  cameraStream =
    await navigator.mediaDevices.getUserMedia({
      video: {
        width: 1280,
        height: 720,
        facingMode: "user",
      },
      audio: false,
    });

  if (videoElement) {
    videoElement.srcObject = cameraStream;

    await videoElement.play();
  }

  return cameraStream;
}

/**
 * Stop webcam
 */
export function stopCamera() {
  if (!cameraStream) return;

  cameraStream
    .getTracks()
    .forEach((track) => track.stop());

  cameraStream = null;
}

/**
 * Current stream
 */
export function getCameraStream() {
  return cameraStream;
}

/**
 * Capture current frame
 */
export function captureFrame(videoElement) {
  if (!videoElement) return null;

  const canvas =
    document.createElement("canvas");

  canvas.width = videoElement.videoWidth;

  canvas.height = videoElement.videoHeight;

  const context =
    canvas.getContext("2d");

  context.drawImage(
    videoElement,
    0,
    0,
    canvas.width,
    canvas.height
  );

  return canvas.toDataURL("image/jpeg");
}

/**
 * Camera status
 */
export function isCameraRunning() {
  return !!cameraStream;
}