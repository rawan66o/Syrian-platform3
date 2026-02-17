import DividingLine from "../../course-details-components/dividing-line/dividing-line";
import "./progress-bar-level.css";
import { useState } from "react";

const ProgressBarLevel = ({ level, index }) => {
    const [showLessons, setShowLessons] = useState(false);
    return <div className={`level_container ${showLessons ? "open" : ""}`}>
        <div className="level" onClick={() => { setShowLessons(prev => !prev) }}>
            <p className="level_title_full"><span className="level_title">المرحلة {index}</span>: {level.title}</p>
            {showLessons ? <img src="/icons/arrows/Arrow_Up.svg" alt="" /> : <img src="/icons/arrows/Arrow_Down.svg" alt="" />}
        </div>
        {showLessons && <DividingLine />}
        {showLessons && level.steps.map((step, index) => <div key={index} className={`step ${step.state === "done" ? "done_container" : step.state === "ongoing" ? "ongoing_container" : ""}`}>
            <div className={`${step.state === ''}`} />
            <div className={`${step.state === "done" ? "done" : step.state === "ongoing" ? "ongoing" : "pending"}`}>
                {step.state === "done" && <img src="/icons/lesson_state/correct_mark_step.svg" alt="" />}
            </div>
            <p className="step_p">{step.step}</p>
        </div>)}
    </div>
};
export default ProgressBarLevel;