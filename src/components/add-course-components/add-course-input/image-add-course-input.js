import "./add-course-input.css";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

const ImageAddCourseInput = ({ label, validation, field, state, dispatch, step, setFileToStepThree }) => {
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
            case "1":
                dispatch({ type: "SET_VALUE", field, value: e.target.files[0] });
                return;
            case "3":
                setFileToStepThree(e.target.files[0]);
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
                <input id={`add_course_file_input_file_${inputId}`} type="file" accept="image/*" style={{ display: "none" }} onChange={handleFileChange} />
                <label className="add_course_add_file_style" htmlFor={`add_course_file_input_file_${inputId}`} />
            </div>
        </div>
        {file && <div className="add_course_file_preview_image">
            <img className="add_course_image" src={filePreview} alt="" />
        </div>}
    </div>
};
export default ImageAddCourseInput;