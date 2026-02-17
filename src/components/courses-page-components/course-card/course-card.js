import { Link } from "react-router";
import "./course-card.css";
import SmallRightArrowIcon from "../../icons/small-right-arrow/small-right-arrow";


const CourseCard = ({ imgSrc, time, title, students, rating }) => {


    return <div className="course_card">
        <div className="course_card_hours">
            <img src="/icons/time_circul/Time_Circle.svg" alt="" />
            <p>{time}</p>
        </div>
        <img src={imgSrc} className="course_card_img" alt="" />
        <div className="course_card_details">
            <h1>{title}</h1>
            <div className="course_card_students_and_rating">
                <p>{students} طالب</p>
                <div className="course_card_rating_container">
                    <p>{rating}</p>
                    <img src="/icons/star/small_star_filled.svg" alt="" />
                </div>
            </div>
            <Link className="course_card_view_course_btn" to={`/courses/1`}>
                <SmallRightArrowIcon />
                <p>عرض الكورس</p>
            </Link>
        </div>
    </div>
};
export default CourseCard;