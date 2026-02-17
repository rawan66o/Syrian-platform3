import "./add-course-step-four.css";


const AddCourseStepFour = () => {

    return <div className="add_course_step_four">
        <div className="lds-spinner">
            <div></div><div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div>
        </div>
        <div className="add_course_step_four_feedback">
            <h1>بانتظار موافقة المشرفين</h1>
            <p>عندما يتم الموافقة على انشاء هذه الدورة سيتم اضافتها مباشرةو تلقائيا !!</p>
        </div>
    </div>
};
export default AddCourseStepFour;