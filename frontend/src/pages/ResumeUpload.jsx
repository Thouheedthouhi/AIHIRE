import { useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../components/dashboard/layout/DashboardLayout";

import UploadZone from "../components/resume/upload/UploadZone";
import FileCard from "../components/resume/upload/FileCard";

import ATSScoreCard from "../components/resume/analysis/ATSScoreCard";
import SkillsCard from "../components/resume/analysis/SkillsCard";
import MissingKeywords from "../components/resume/analysis/MissingKeywords";
import ResumeSummary from "../components/resume/analysis/ResumeSummary";

import JobDescriptionCard from "../components/resume/job/JobDescriptionCard";
import AnalysisTabs from "../components/resume/tabs/AnalysisTabs";

import {
  uploadResume,
  analyzeATS,
  analyzeMatch,
} from "../services/resume/resumeService";

function ResumeUpload() {
  const [activeTab, setActiveTab] = useState("ats");
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);

  const [jobDescription, setJobDescription] = useState("");

  const [targetRole, setTargetRole] = useState(
    "Software Engineer"
  );

  const [loading, setLoading] = useState(false);

  const handleFileSelect = async (selectedFile) => {
    try {
      const response = await uploadResume(selectedFile);

      setFile({
        ...response,
        file: selectedFile,
      });

      setAnalysis(null);

      toast.success("Resume uploaded!");
    } catch (error) {
      toast.error(
        error.response?.data?.detail || "Upload failed."
      );
    }
  };

  const handleDelete = () => {
    setFile(null);
    setAnalysis(null);
    setJobDescription("");

    toast.success("Resume removed.");
  };

  const handleATS = async () => {
    try {
      setLoading(true);

      const result = await analyzeATS(
        targetRole
      );

      setAnalysis(result);

      toast.success("ATS Analysis Complete!");
    } catch (error) {
      toast.error(
        error.response?.data?.detail ||
        "Analysis failed."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleMatch = async () => {
    if (!jobDescription.trim()) {
      toast.error(
        "Paste a Job Description."
      );
      return;
    }

    try {
      setLoading(true);

      const result = await analyzeMatch(
        jobDescription
      );

      setAnalysis(result);

      toast.success("Resume Matched!");
    } catch (error) {
      toast.error(
        error.response?.data?.detail ||
        "Match failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl space-y-8">

        <div>
          <h1 className="text-4xl font-bold">
            Resume Analyzer
          </h1>

          <p className="mt-2 text-slate-500">
            Analyze your resume using ATS standards or compare it against a Job Description.
          </p>
        </div>

        <AnalysisTabs
          activeTab={activeTab}
          onTabChange={(tab) => {
            setActiveTab(tab);
            setAnalysis(null);
          }}
        />

        {!file ? (
          <UploadZone
            onFileSelect={handleFileSelect}
          />
        ) : (
          <>
            <FileCard
              file={file}
              onDelete={handleDelete}
              onAnalyze={
                activeTab === "ats"
                  ? handleATS
                  : handleMatch
              }
              analyzing={loading}
              activeTab={activeTab}
              targetRole={targetRole}
              setTargetRole={setTargetRole}
            />

            {activeTab === "match" && (
              <JobDescriptionCard
                value={jobDescription}
                onChange={setJobDescription}
                onAnalyze={handleMatch}
                loading={loading}
              />
            )}
          </>
        )}

        {analysis && activeTab === "ats" && (
          <div className="space-y-6">

            <ATSScoreCard
              score={analysis.ats_score}
            />

            <SkillsCard
              skills={analysis.matched_skills}
            />

            <MissingKeywords
              keywords={analysis.missing_keywords}
            />

            <ResumeSummary
              summary={analysis.summary}
              strengths={analysis.strengths}
              improvements={analysis.improvements}
            />

          </div>
        )}

        {analysis && activeTab === "match" && (
          <div className="space-y-6">

            <ATSScoreCard
              score={analysis.overall_match}
              skillMatch={analysis.skill_match}
            />

            <SkillsCard
              skills={analysis.matched_skills}
            />

            <MissingKeywords
              keywords={analysis.missing_keywords}
            />

          </div>
        )}

      </div>
    </DashboardLayout>
  );
}

export default ResumeUpload;