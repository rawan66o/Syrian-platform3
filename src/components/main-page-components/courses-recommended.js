import { Link } from "react-router";
import "./courses-recommended.css";
import { useState } from "react";


const CoursesRecommended = () => {
    const [chosenCourseCategory, setChosenCourseCategory] = useState("langs");

    const courses = [
        {
            id: 1,
            imgSrc: "/images/course_card_images/1.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
            students: 17000,
            rating: 4.7
        },
        {
            id: 2,
            imgSrc: "/images/course_card_images/2.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
            students: 17000,
            rating: 4.7
        },
        {
            id: 3,
            imgSrc: "/images/course_card_images/3.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
            students: 17000,
            rating: 4.7
        },
    ];

    const categories = [
        { id: 1, category: "اللغات", code: "langs" },
        { id: 2, category: "الادارة والقيادة", code: "mangement" },
        { id: 3, category: "غرافيك دزاين", code: "graphic_design" },
        { id: 4, category: "العربية", code: "arabic" },
        { id: 5, category: "البرمجة", code: "programming" },
        { id: 6, category: "تصميم UI / UX", code: "ui_ux" },
    ];

    const filterHandler = (code) => {
        setChosenCourseCategory(code);
    };

    return <div className="courses_recommended_container">
        <div className="courses_recommended_header_container">
            <div className="courses_recommended">
                <h2>الكورسات الموصى بها</h2>
                <h1>اكتشف مجموعة واسعة من أكثر من 250 دورة.</h1>
            </div>
            <div className="courses_recommended_filter_container">
                {categories.map(category =>
                    <button key={category.id} onClick={() => filterHandler(category.code)} className={`courses_recommended_filter_button ${chosenCourseCategory === category.code ? "cousres_recommended_chosen_filter" : ""}`}>
                        {category.category}
                    </button>)}
            </div>
        </div>
        <div className="courses_recommended_courses_container">
            {courses.map((course, index) => <div key={index} className="recommended_course_card">
                <div className="recommended_course_card_hours">
                    <img src="/icons/time_circul/Time_Circle.svg" alt="" />
                    <p>{course.time}</p>
                </div>
                <img src={course.imgSrc} className="recommended_course_card_img" alt="" />
                <div className="recommended_course_card_details">
                    <h1>{course.title}</h1>
                    <div className="recommended_course_card_students_and_rating">
                        <p>{course.students} طالب</p>
                        <div className="recommended_course_card_rating_container">
                            <p>{course.rating}</p>
                            <img src="/icons/star/small_star_filled.svg" alt="" />
                        </div>
                    </div>
                    <button className="recommended_course_card_view_course_btn">
                        <img src="/icons/arrows/small_right_arrow.svg" alt="" />
                        <p>عرض الكورس</p>
                    </button>
                </div>
            </div>)}
        </div>
        <Link className="courses_recommended_view_all_btn">عرض جميع الكورسات</Link>
    </div>
};
export default CoursesRecommended;