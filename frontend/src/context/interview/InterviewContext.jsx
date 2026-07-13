import {
  createContext,
  useContext,
  useState,
} from "react";

const InterviewContext = createContext();
/**
 * Interview State Machine
 */
export const InterviewState = {
  AI_SPEAKING: "AI_SPEAKING",
  ANSWERING: "ANSWERING",
  SAVING: "SAVING",
  PROCESSING: "PROCESSING",
  FINISHED: "FINISHED",
};

export function InterviewProvider({ children }) {
  // --------------------------
  // Questions
  // --------------------------

  const [questions, setQuestions] =
    useState([]);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  // --------------------------
  // Interview State
  // --------------------------

  const [
    interviewState,
    setInterviewState,
  ] = useState(
    InterviewState.AI_SPEAKING
  );

  // --------------------------
  // Timer
  // --------------------------

  const [timeLeft, setTimeLeft] =
    useState(90);

  // --------------------------
  // AI Status
  // --------------------------

  const [isSpeaking, setIsSpeaking] =
    useState(false);

  // --------------------------
  // Recording
  // --------------------------

  const [
    isRecording,
    setIsRecording,
  ] = useState(false);

  // --------------------------
  // Submission Lock
  // --------------------------

  const [
    isSubmitting,
    setIsSubmitting,
  ] = useState(false);

  // --------------------------
  // Camera & Microphone
  // --------------------------

  const [
    cameraReady,
    setCameraReady,
  ] = useState(false);

  const [
    microphoneReady,
    setMicrophoneReady,
  ] = useState(false);

  const [
    faceDetected,
    setFaceDetected,
  ] = useState(false);

  // --------------------------
  // Interview Data
  // --------------------------

  const [
    transcripts,
    setTranscripts,
  ] = useState([]);

  // --------------------------
  // Behavior Prediction
  // --------------------------

  const [
    behaviorPrediction,
    setBehaviorPrediction,
  ] = useState(null);

  const [
  behaviorSummary,
  setBehaviorSummary,
] = useState(null);

  // --------------------------
  // Final Report
  // --------------------------

  const [
    finalReport,
    setFinalReport,
  ] = useState(null);

  const value = {
    // Questions
    questions,
    setQuestions,

    currentIndex,
    setCurrentIndex,

    // Interview State
    interviewState,
    setInterviewState,

    // Timer
    timeLeft,
    setTimeLeft,

    // AI
    isSpeaking,
    setIsSpeaking,

    // Recording
    isRecording,
    setIsRecording,

    // Submission Lock
    isSubmitting,
    setIsSubmitting,

    // Camera
    cameraReady,
    setCameraReady,

    microphoneReady,
    setMicrophoneReady,

    faceDetected,
    setFaceDetected,

    // Transcript
    transcripts,
    setTranscripts,

    // Behavior
    behaviorPrediction,
    setBehaviorPrediction,


    behaviorSummary,
    setBehaviorSummary,

    // Final Report
    finalReport,
    setFinalReport,
  };

  return (
    <InterviewContext.Provider value={value}>
      {children}
    </InterviewContext.Provider>
  );
}

export function useInterviewContext() {
  const context =
    useContext(InterviewContext);

  if (!context) {
    throw new Error(
      "useInterviewContext must be used inside InterviewProvider"
    );
  }

  return context;
}