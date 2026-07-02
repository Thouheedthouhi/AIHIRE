import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";
import toast from "react-hot-toast";

function UploadZone({ onFileSelect }) {
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (rejectedFiles.length) {
      toast.error("Please upload a PDF or DOCX file (max 5 MB).");
      return;
    }

    if (acceptedFiles.length) {
      onFileSelect(acceptedFiles[0]);
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: false,
    maxSize: 5 * 1024 * 1024,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    },
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      className={`
        mx-auto
        max-w-4xl
        rounded-3xl
        border-2
        border-dashed
        bg-white
        px-12
        py-14
        text-center
        transition-all
        cursor-pointer
        ${
          isDragActive
            ? "border-blue-600 bg-blue-50"
            : "border-slate-300 hover:border-blue-500"
        }
      `}
    >
      <input {...getInputProps()} />

      <div className="flex flex-col items-center">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
          <UploadCloud
            size={30}
            className="text-blue-600"
          />
        </div>

        <h2 className="mt-6 text-2xl font-semibold text-slate-900">
          {isDragActive
            ? "Drop your resume here"
            : "Drag & drop your resume"}
        </h2>

        <p className="mt-3 max-w-lg text-slate-500">
          Upload your resume to receive an ATS score,
          AI-powered feedback and personalized suggestions.
        </p>

        <button
          type="button"
          className="mt-8 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          Browse Files
        </button>

        <p className="mt-6 text-sm text-slate-400">
          PDF • DOCX • Maximum file size 5 MB
        </p>

      </div>
    </div>
  );
}

export default UploadZone;