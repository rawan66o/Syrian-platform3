import "./pdf-lesson.css";

const PdfLesson = ({ lessonInfo }) => {

    return (
        <div className="pdf_lesson">
            <iframe
                className="pdf_file"
                title={lessonInfo.title}
                src={lessonInfo.pdfSrc}
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default PdfLesson;