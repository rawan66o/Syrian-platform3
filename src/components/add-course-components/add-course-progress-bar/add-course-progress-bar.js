import "./add-course-progress-bar.css";



const AddCourseProgressBar = ({ step }) => {
    const currentStep = Number(step);
    const firstStepElementClass = currentStep !== 1 ? "add_course_step_done" : "add_course_step_pending";
    const firstStepBorderClass = currentStep !== 1 ? "add_course_step_border_done" : "add_course_step_border_pending";
    const firstDivdingLine = currentStep !== 1 ? "add_course_step_line_done" : "add_course_step_line_empty";

    const secondStepElementClass = currentStep === 1 ? "add_course_step_empty" : currentStep === 2 ? "add_course_step_pending" : "add_course_step_done";
    const secondStepBorderClass = currentStep === 1 ? "add_course_step_border_empty" : currentStep === 2 ? "add_course_step_border_pending" : "add_course_step_border_done";
    const secondDivdingLine = currentStep >= 3 ? "add_course_step_line_done" : "add_course_step_line_empty";

    const thirdStepElementClass = currentStep > 3 ? "add_course_step_done" : currentStep === 3 ? "add_course_step_pending" : "add_course_step_empty";
    const thirdStepBorderClass = currentStep > 3 ? "add_course_step_border_done" : currentStep === 3 ? "add_course_step_border_pending" : "add_course_step_border_empty";

    return <div className="add_course_progress_bar">
        <div className="add_course_dividing_line" />
        <h1 className="add_course_header">اضافة دورة جديدة :</h1>
        <div className="add_course_progress_bar_elements">
            <div className="add_course_progress_bar_step">
                <div className={firstStepBorderClass}>
                    <div className={firstStepElementClass} />
                </div>
                <div className="add_course_progress_bar_step_info">
                    <p className="add_course_progress_bar_step_p1">خطوة 1</p>
                    <p className="add_course_progress_bar_step_p2">معلومات الكورس</p>
                </div>
            </div>
            <div className={firstDivdingLine} />
            <div className="add_course_progress_bar_step">
                <div className={secondStepBorderClass}>
                    <div className={secondStepElementClass} />
                </div>
                <div className="add_course_progress_bar_step_info">
                    <p className="add_course_progress_bar_step_p1">خطوة 2</p>
                    <p className="add_course_progress_bar_step_p2">المراحل</p>
                </div>
            </div>
            <div className={secondDivdingLine} />
            <div className="add_course_progress_bar_step">
                <div className={thirdStepBorderClass}>
                    <div className={thirdStepElementClass} />
                </div>
                <div className="add_course_progress_bar_step_info">
                    <p className="add_course_progress_bar_step_p1">خطوة 3</p>
                    <p className="add_course_progress_bar_step_p2">الاختبارات</p>
                </div>
            </div>
        </div>
    </div>
};
export default AddCourseProgressBar;