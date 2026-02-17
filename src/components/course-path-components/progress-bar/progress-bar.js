import "./progress-bar.css";
import ReactDOM from "react-dom";
import { useState } from "react";
import DividingLine from "../../course-details-components/dividing-line/dividing-line";
import { Rating } from "react-simple-star-rating";
import ProgressBarLevel from "../progress-bar-levels/progress-bar-level";
import RateCourseModal from "../rate-course-modal/rate-course-modal";
import { Link } from "react-router";


const levelNameMap = {
    0: "الأولى",
    1: "الثانية",
    2: "الثالثة",
    3: "الرابعة",
    4: "الخامسة",
    5: "السادسة",
    6: "السابعة",
    7: "الثامنة",
    8: "التاسعة",
};
const ProgressBar = ({ course }) => {
    const [rating, setRating] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const handleRatingChange = (value) => {
        setRating(value);
        console.log(value);
        console.log(rating);
        setShowModal(true);
    };
    const hideModal = () => {
        setRating(0);
        setShowModal(false);
    };
    return <div className="progress-bar">
        <div className="header_container">
            <div className="header">
                <h1>{course.title}</h1>
                <DividingLine />
            </div>
            <div className="statistics">
                <div className="statistics_info">
                    <p className="progress_percentage">نسبة التقدم الحالية: <span>{course.progress_percentage}%</span></p>
                    <div className="progress_line_container">
                        <div className="percentage_line" style={{ width: `${course.progress_percentage}%` }} />
                    </div>
                    <div className="finished_lessons">تم الانتهاء من {course.lessons_done} / {course.lessons_count} درس</div>
                </div>
                <div className="show_marks_button_container">
                    <Link to="/courses/1/course-marks"><button className="show_marks_btn">اظهار العلامات</button></Link>
                </div>
                <div className="rating_container">
                    <span className="rating_p">قيم هذه الدورة</span>
                    <Rating
                        size={22}
                        allowFraction
                        fillColor="#ffb71b"
                        emptyColor="#dbdfe1"
                        transition
                        initialValue={rating}
                        readonly={false}
                        onClick={handleRatingChange} />
                </div>
            </div>
        </div>
        <DividingLine />
        <div className="levels">
            {
                course.course_levels.map((level, index) =>
                    <ProgressBarLevel
                        key={index}
                        level={level}
                        index={levelNameMap[index]} />)
            }
        </div>
        {showModal && ReactDOM.createPortal(<RateCourseModal close={hideModal} value={rating} />, document.getElementById("ratemodal-root"))}
    </div>
};
export default ProgressBar;