// frontend/src/utils/speech.js

let currentUtterance = null;

/**
 * Check browser support
 */
export function isSpeechSupported() {
  return "speechSynthesis" in window;
}

/**
 * Stop current speech
 */
export function stopSpeaking() {
  window.speechSynthesis.cancel();

  currentUtterance = null;
}

/**
 * Speak text
 */
export function speak(
  text,
  {
    onStart,
    onEnd,
    onError,
    rate = 1,
    pitch = 1,
    volume = 1,
  } = {}
) {
  if (!isSpeechSupported()) {
    onError?.("Speech synthesis not supported.");
    return;
  }

  stopSpeaking();

  const utterance = new SpeechSynthesisUtterance(
    text
  );

  currentUtterance = utterance;

  utterance.rate = rate;
  utterance.pitch = pitch;
  utterance.volume = volume;

  // Choose best English voice if available
  const voices =
    window.speechSynthesis.getVoices();

  const preferredVoice =
    voices.find((voice) =>
      voice.lang.startsWith("en")
    ) || voices[0];

  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }

  utterance.onstart = () => {
    onStart?.();
  };

  utterance.onend = () => {
    currentUtterance = null;
    onEnd?.();
  };

  utterance.onerror = (event) => {
    currentUtterance = null;
    onError?.(event);
  };

  window.speechSynthesis.speak(utterance);
}

/**
 * Replay
 */
export function replay(text, callbacks = {}) {
  speak(text, callbacks);
}