import "./add-course-input.css";



const NormalAddCourseInput = ({ label, validation, placeholder, unitId, lessonId, value, field, state, dispatch, step }) => {

    const handleInputChange = (e) => {
        switch (step) {
            case "1":
                dispatch({ type: "SET_VALUE", field, value: e.target.value });
                return;
            case "2_1":
                dispatch({ type: "SET_UNIT_FIELD", unitId, field, value: e.target.value });
                return;
            case "2_2_1":
                dispatch({ type: "SET_UNIT_LESSON_FIELD", unitId, lessonId, field, value: e.target.value });
                return;
            default:
                return;
        }
    };

    return <div className="add_course_input_container" >
        <div className="add_course_label_and_validation">
            <label className="add_course_label">{label}</label>
            {validation && <label className="add_course_validation">{validation}</label>}
        </div>
        <input className="add_course_normal_input"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={handleInputChange}
        />
    </div>
};
export default NormalAddCourseInput;