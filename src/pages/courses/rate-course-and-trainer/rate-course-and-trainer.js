import "./rate-course-and-trainer.css";
import DividingLineFullScreen from "../../../components/dividing-line-full-screen/dividing-line-full-screen";
import ProgressBar from "../../../components/course-path-components/progress-bar/progress-bar";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
// import DividingLine from "../../../components/course-details-components/dividing-line/dividing-line";
const RateCourseAndTrainer = () => {
    const [courseRate, setCourseRate] = useState(0);
    const [trainerRate, setTrainerRate] = useState(0);
    const courseInfo = {
        title: "كورس تعلم اللغة الانكليزية من الصفر.",
        progress_percentage: 30,
        lessons_done: 20,
        lessons_count: 24,
        course_levels: [
            {
                title: "ماهي اللغة الانكليزية ؟",
                steps: [
                    { step: "نبذة عن اللغة الانكليزية", state: "done" },
                    { step: "نبذة عن اللغة الانكليزية", state: "done" },
                    { step: "اختبار في المرحلة الاولى", state: "ongoing" }
                ]
            },
            {
                title: "اساسيات اللغة الانكليزية ؟",
                steps: [
                    { step: "نبذة عن اللغة الانكليزية", state: "pending" },
                    { step: "نبذة عن اللغة الانكليزية", state: "pending" },
                    { step: "اختبار في المرحلة الثانية", state: "pending" }
                ]
            },
            {
                title: "ما هي اللغة الانكليزية ؟",
                steps: [
                    { step: "نبذة عن اللغة الانكليزية", state: "pending" },
                    { step: "نبذة عن اللغة الانكليزية", state: "pending" },
                    { step: "اختبار في المرحلة الثانية", state: "pending" }
                ]
            },
        ]
    };
    const handleCourseRatingChange = (value) => {
        setCourseRate(value);
    };
    const handleTrainerRatingChange = (value) => {
        setTrainerRate(value);
    };
    return <div className="rate_course_and_trainer_page">
        <DividingLineFullScreen />
        <ProgressBar course={courseInfo} />
        <div className="rate_course_and_trainer">
            <div className="rate_course_and_trainer_container">
                <h1 className="rate_course_and_trainer_h1">قيم الدورة</h1>
                <Rating
                    size={44}
                    allowFraction
                    fillColor="#ffb71b"
                    emptyColor="#dbdfe1"
                    transition
                    readonly={false}
                    initialValue={courseRate}
                    onClick={handleCourseRatingChange} />
                <textarea className="rate_course_and_trainer_course_notes" placeholder="ملاحظاتك حول الدورة" />
            </div>
            <div className="dividing_line" />
            <div className="rate_course_and_trainer_container">
                <h1 className="rate_course_and_trainer_h1">قيم المدرب</h1>
                <Rating
                    size={44}
                    allowFraction
                    fillColor="#ffb71b"
                    emptyColor="#dbdfe1"
                    transition
                    readonly={false}
                    initialValue={trainerRate}
                    onClick={handleTrainerRatingChange} />
                <textarea className="rate_course_and_trainer_course_notes" placeholder="ملاحظاتك حول المدرب" />
            </div>
            <div className="dividing_line" />
            <button className="rate_course_and_trainer_send_rating_button">ارسال التقييم</button>
        </div>
    </div>
};
export default RateCourseAndTrainer;