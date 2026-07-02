import fitz  # PyMuPDF
from docx import Document


def extract_pdf_text(file_path: str) -> str:
    """
    Extract text from a PDF file.
    """

    text = ""

    pdf = fitz.open(file_path)

    for page in pdf:
        text += page.get_text()

    pdf.close()

    return text.strip()


def extract_docx_text(file_path: str) -> str:
    """
    Extract text from a DOCX file.
    """

    document = Document(file_path)

    text = "\n".join(
        paragraph.text
        for paragraph in document.paragraphs
    )

    return text.strip()


def extract_resume_text(file_path: str):
    """
    Detect file type and extract text.
    """

    if file_path.endswith(".pdf"):
        return extract_pdf_text(file_path)

    if file_path.endswith(".docx"):
        return extract_docx_text(file_path)

    raise ValueError("Unsupported file format.")