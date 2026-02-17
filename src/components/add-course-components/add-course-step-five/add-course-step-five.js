import { NavLink } from "react-router";
import "./add-course-step-five.css";



const AddCourseStepFive = () => {

    return <div className="add_course_step_five">
        <div className="add_course_finished_outer_outer_circul">
            <div className="add_course_finished_outer-circul">
                <div className="add_course_finished_circul">
                    <img src="/icons/selected_mark/big_correct_icon.svg" alt="" />
                </div>
            </div>
        </div>
        <div className="add_course_finished_p_container_full">
            <div className="add_course_finished_p_container">
                <h1>تمت اضافة الدورة بنجاح !</h1>
                <p>قد اجتزت جميع الدروس بنجاح، يمكنك الآن استلام شهادتك</p>
            </div>
            <div className="add_course_finished_buttons">
                <NavLink className="add_course_review_btn">معاينة الدورة</NavLink>
                <NavLink className="add_course_main_btn">العودة للرئيسية</NavLink>
            </div>
        </div>
        <div className="add_course_was_hard_container_full">
            <div className="add_course_was_hard_container">
                <p className="add_course_was_hard">هل واجت صعوبة في عملية الاضافة</p>
                <div className="add_course_was_hard_buttons">
                    <button className="yes_add_course_was_hard_button">نعم</button>
                    <button className="no_add_course_was_hard_button">لا</button>
                </div>
            </div>
            <div className="add_course_was_hard_thanks">
                شكرا لك على مجهودك
            </div>
        </div>
    </div>
};
export default AddCourseStepFive;