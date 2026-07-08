import { useState } from "react";
import {
  Plus,
  Play,
  SquarePen,
} from "lucide-react";

import QuestionInputCard from "./QuestionInputCard";

function CustomInterviewSetup({
  onStart,
}) {
  const [questions, setQuestions] =
    useState([
      "",
      "",
      "",
    ]);

  const updateQuestion = (
    index,
    value
  ) => {
    const updated = [...questions];

    updated[index] = value;

    setQuestions(updated);
  };

  const addQuestion = () => {
    if (questions.length >= 10) return;

    setQuestions([
      ...questions,
      "",
    ]);
  };

  const removeQuestion = (
    index
  ) => {
    if (questions.length <= 3) return;

    const updated =
      questions.filter(
        (_, i) => i !== index
      );

    setQuestions(updated);
  };

  const handleStart = () => {
    const filtered =
      questions
        .map((q) => q.trim())
        .filter(
          (q) => q.length > 0
        );

    if (filtered.length < 3) {
      alert(
        "Please enter at least 3 questions."
      );
      return;
    }

    onStart({
      mode: "custom",
      questions: filtered,
    });
  };

  return (
    <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

      <div className="mb-8 flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100">

          <SquarePen
            size={28}
            className="text-sky-600"
          />

        </div>

        <div>

          <h2 className="text-2xl font-bold">
            Custom Interview
          </h2>

          <p className="text-slate-500">
            Add your own interview questions.
          </p>

        </div>

      </div>

      <div className="space-y-5">

        {questions.map(
          (
            question,
            index
          ) => (
            <QuestionInputCard
              key={index}
              index={index}
              value={question}
              onChange={(
                value
              ) =>
                updateQuestion(
                  index,
                  value
                )
              }
              onDelete={() =>
                removeQuestion(
                  index
                )
              }
              canDelete={
                questions.length >
                3
              }
            />
          )
        )}

      </div>

      <div className="mt-8 flex items-center justify-between">

        <button
          onClick={addQuestion}
          disabled={
            questions.length >= 10
          }
          className="flex h-12 items-center gap-2 rounded-2xl border border-slate-300 px-6 font-semibold transition hover:bg-slate-100 disabled:opacity-40"
        >

          <Plus size={18} />

          Add Question

        </button>

        <button
          onClick={handleStart}
          className="flex h-14 items-center gap-3 rounded-2xl bg-sky-600 px-8 text-lg font-semibold text-white transition hover:bg-sky-700"
        >

          <Play size={20} />

          Start Custom Interview

        </button>

      </div>

    </div>
  );
}

export default CustomInterviewSetup;