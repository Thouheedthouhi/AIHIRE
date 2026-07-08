// frontend/src/utils/speech.js

let currentUtterance = null;

/**
 * Check browser support
 */
export function isSpeechSupported() {
  return "speechSynthesis" in window;
}

/**
 * Stop current speech safely
 */
export function stopSpeaking() {
  if (!isSpeechSupported()) return;

  try {
    if (
      window.speechSynthesis.speaking ||
      window.speechSynthesis.pending
    ) {
      window.speechSynthesis.cancel();
    }
  } catch (error) {
    console.error(error);
  }

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
    onError?.(
      new Error(
        "Speech synthesis not supported."
      )
    );
    return;
  }

  // Cancel ONLY if something is already speaking
  if (
    window.speechSynthesis.speaking ||
    window.speechSynthesis.pending
  ) {
    window.speechSynthesis.cancel();
  }

  const utterance =
    new SpeechSynthesisUtterance(text);

  currentUtterance = utterance;

  utterance.rate = rate;
  utterance.pitch = pitch;
  utterance.volume = volume;

  const assignVoice = () => {
    const voices =
      window.speechSynthesis.getVoices();

    const preferredVoice =
      voices.find(
        (voice) =>
          voice.lang.startsWith("en") &&
          voice.localService
      ) ||
      voices.find((voice) =>
        voice.lang.startsWith("en")
      ) ||
      voices[0];

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
      console.error(
        "Speech Error:",
        event
      );

      currentUtterance = null;

      // Ignore cancellation errors caused by browser cleanup
      if (event.error === "canceled") {
        return;
      }

      onError?.(event);
    };

    window.speechSynthesis.speak(
      utterance
    );
  };

  const voices =
    window.speechSynthesis.getVoices();

  if (voices.length > 0) {
    assignVoice();
  } else {
    window.speechSynthesis.onvoiceschanged =
      () => {
        assignVoice();
      };
  }
}

/**
 * Replay current text
 */
export function replay(
  text,
  callbacks = {}
) {
  speak(text, callbacks);
}