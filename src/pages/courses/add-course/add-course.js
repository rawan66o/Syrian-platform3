import "./add-course.css";
import { useState, useEffect } from "react";
import AddCourseProgressBar from "../../../components/add-course-components/add-course-progress-bar/add-course-progress-bar";
import AddCourseStepOne from "../../../components/add-course-components/add-course-step-one/add-course-step-one";
import AddCourseStepTwo from "../../../components/add-course-components/add-course-step-two/add-course-step-two";
import AddCourseStepThree from "../../../components/add-course-components/add-course-step-three/add-course-step-three";
import AddCourseStepFour from "../../../components/add-course-components/add-course-step-four/add-course-step-four";
import AddCourseStepFive from "../../../components/add-course-components/add-course-step-five/add-course-step-five";




const AddCourse = () => {
    const [step, setStep] = useState("1");


    useEffect(() => {
        const addCourseStep = localStorage.getItem("addCourseStep");
        if (addCourseStep) setStep(addCourseStep);
        else localStorage.setItem("addCourseStep", "1");
    }, []);


    const currentStepForm = () => {
        switch (step) {
            case "1": return <AddCourseStepOne />;
            case "2": return <AddCourseStepTwo />;
            case "3": return <AddCourseStepThree />;
            case "4": return <AddCourseStepFour />;
            case "5": return <AddCourseStepFive />;
            default: return <div></div>;
        };
    };

    const bottomBarNextButton = step === "3" ? "اضافة الدورة ونشره" : "التالي";

    const previousHandler = () => {
        if (Number(step) >= 1) {
            setStep(`${Number(step) - 1}`);
        }
    };

    const nextHandler = () => {
        if (Number(step < 4)) {
            setStep(`${Number(step) + 1}`);
        }
    };

    return <div className="add_course_page">
        <div className="add_course_page_container">
            {Number(step) <= 3 && <AddCourseProgressBar step={step} />}
            {currentStepForm()}
        </div>
        {Number(step) <= 3 && <div className="add_course_bottom_bar_container">
            <div className="add_course_bottom_bar">
                <button className="add_course_bottom_bar_previous" onClick={previousHandler}>السابق</button>
                <button className="add_course_bottom_bar_next" onClick={nextHandler}>{bottomBarNextButton}</button>
            </div>
        </div>}
    </div>
};
export default AddCourse;