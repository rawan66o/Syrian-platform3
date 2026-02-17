import "./add-course-input.css";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";


const PdfAddCourseInput = ({ label, validation, unitId, lessonId, value, field, state, dispatch, step }) => {
    const [file, setFile] = useState(null);
    const [filePreview, setFilePreview] = useState(null);
    const inputId = uuid();

    useEffect(() => {
        return () => {
            if (filePreview) {
                URL.revokeObjectURL(filePreview);
            }
        };
    }, [filePreview]);

    const handleFileChange = (e) => {
        if (!e.target.files[0]) {
            if (filePreview) {
                URL.revokeObjectURL(filePreview);
            }
            setFile(null);
            setFilePreview(null);
            return;
        }
        if (filePreview) {
            URL.revokeObjectURL(filePreview);
            setFile(null);
            setFilePreview(null);
        }

        setFile(e.target.files[0]);
        setFilePreview(URL.createObjectURL(e.target.files[0]));
        switch (step) {
            case "2_2_1":
                dispatch({ type: "SET_UNIT_LESSON_FIELD", unitId, lessonId, field, value: e.target.files[0] });
                return;
            default:
                return;
        }
    };
    return <div className="add_course_input_container">
        <div className="add_course_label_and_validation">
            <label className="add_course_label">{label}</label>
            {validation && <label className="add_course_validation">{validation}</label>}
        </div>
        <div className="add_course_add_file_container">
            <div className="add_course_add_file_input_container">
                <input id={`add_course_file_input_file_${inputId}`} type="file" accept="application/pdf" style={{ display: "none" }} onChange={handleFileChange} />
                <label className="add_course_add_file_style" htmlFor={`add_course_file_input_file_${inputId}`} />
            </div>
        </div>
        {file && <div className="add_course_file_preview">
            <iframe
                className="add_course_pdf_file"
                title="pdf"
                src={filePreview}
                width="100%"
                height="100%"
            />
        </div>}
    </div>
};
export default PdfAddCourseInput;