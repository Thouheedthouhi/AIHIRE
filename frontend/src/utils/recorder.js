// frontend/src/utils/recorder.js

let mediaRecorder = null;
let audioChunks = [];
let mediaStream = null;

/**
 * Request microphone permission
 */
export async function requestMicrophone() {
  if (!navigator.mediaDevices?.getUserMedia) {
    throw new Error(
      "Microphone is not supported in this browser."
    );
  }

  mediaStream = await navigator.mediaDevices.getUserMedia({
    audio: true,
  });

  return mediaStream;
}

/**
 * Start recording
 */
export async function startRecording() {
  if (!mediaStream) {
    await requestMicrophone();
  }

  audioChunks = [];

  mediaRecorder = new MediaRecorder(mediaStream);

  mediaRecorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      audioChunks.push(event.data);
    }
  };

  mediaRecorder.start();

  return true;
}

/**
 * Stop recording
 */
export function stopRecording() {
  return new Promise((resolve, reject) => {
    if (!mediaRecorder) {
      reject(new Error("Recorder not initialized."));
      return;
    }

    mediaRecorder.onstop = () => {
      const blob = new Blob(audioChunks, {
        type: "audio/webm",
      });

      resolve(blob);
    };

    mediaRecorder.stop();
  });
}

/**
 * Reset recorder
 */
export function resetRecorder() {
  audioChunks = [];
}

/**
 * Release microphone
 */
export function releaseRecorder() {
  if (mediaStream) {
    mediaStream.getTracks().forEach((track) =>
      track.stop()
    );

    mediaStream = null;
  }

  mediaRecorder = null;
  audioChunks = [];
}

/**
 * Download recording
 * (Development only)
 */
export function downloadRecording(blob) {
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = `answer-${Date.now()}.webm`;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}