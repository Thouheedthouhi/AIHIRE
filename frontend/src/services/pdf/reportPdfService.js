import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function downloadInterviewReport(report) {
  const doc = new jsPDF();

  doc.setFontSize(22);
  doc.text("AIHire", 14, 20);

  doc.setFontSize(16);
  doc.text("Interview Performance Report", 14, 30);

  autoTable(doc, {
    startY: 40,
    head: [["Metric", "Score"]],
    body: [
      ["Overall Score", report.overallScore],
      ["Technical Score", report.technicalScore],
      ["Communication Score", report.communicationScore],
      ["Interview Presence", report.interviewPresence],
      ["Resume Alignment", report.resumeAlignment],
    ],
  });

  let y = doc.lastAutoTable.finalY + 15;

  doc.setFontSize(15);
  doc.text("Strengths", 14, y);

  y += 8;

  report.strengths.forEach((item) => {
    doc.setFontSize(11);
    doc.text(`• ${item}`, 18, y);
    y += 7;
  });

  y += 5;

  doc.setFontSize(15);
  doc.text("Areas for Improvement", 14, y);

  y += 8;

  report.improvements.forEach((item) => {
    doc.setFontSize(11);
    doc.text(`• ${item}`, 18, y);
    y += 7;
  });

  y += 8;

  doc.setFontSize(15);
  doc.text("AI Summary", 14, y);

  y += 8;

  doc.setFontSize(11);
  doc.text(report.summary, 14, y, {
    maxWidth: 180,
  });

  y += 28;

  doc.setFontSize(15);
  doc.text("Interview Readiness", 14, y);

  y += 8;

  doc.setFontSize(11);
  doc.text(report.interviewReadiness, 14, y, {
    maxWidth: 180,
  });

  doc.save("AIHire_Report.pdf");
}