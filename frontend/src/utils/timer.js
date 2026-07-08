// frontend/src/utils/timer.js

let intervalId = null;

/**
 * Start countdown timer
 *
 * @param {number} duration - Total time in seconds
 * @param {function} onTick - Called every second with remaining time
 * @param {function} onComplete - Called when timer reaches zero
 */
export function startTimer(
  duration,
  onTick,
  onComplete
) {
  stopTimer();

  let remaining = duration;

  onTick?.(remaining);

  intervalId = setInterval(() => {
    remaining--;

    onTick?.(remaining);

    if (remaining <= 0) {
      stopTimer();
      onComplete?.();
    }
  }, 1000);
}

/**
 * Stop timer completely
 */
export function stopTimer() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

/**
 * Reset timer to initial duration
 */
export function resetTimer(
  duration,
  onTick
) {
  stopTimer();

  onTick?.(duration);
}

/**
 * Check whether timer is running
 */
export function isTimerRunning() {
  return intervalId !== null;
}