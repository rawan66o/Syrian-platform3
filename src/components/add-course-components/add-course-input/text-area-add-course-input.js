import "./add-course-input.css";



const TextAreaAddCourseInput = ({ label, validation, placeholder, unitId, testId, questionId, value, field, state, dispatch, step }) => {

    const handleTextAreaChange = (e) => {
        switch (step) {
            case "1":
                dispatch({ type: "SET_VALUE", field, value: e.target.value });
                return;
            case "2_1":
                dispatch({ type: "SET_UNIT_FIELD", unitId, field, value: e.target.value });
                return;
            case "2_2_2":
                dispatch({ type: "SET_UNIT_TEST_QUESTION_FIELD", unitId, testId, questionId, field, value: e.target.value });
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
        <textarea className="add_course_textarea_input"
            placeholder={placeholder}
            value={value}
            onChange={handleTextAreaChange}
        />
    </div>
};
export default TextAreaAddCourseInput;