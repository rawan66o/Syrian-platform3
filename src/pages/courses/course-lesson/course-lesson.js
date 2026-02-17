import "./coures-lesson.css";
import ProgressBar from "../../../components/course-path-components/progress-bar/progress-bar";
import CirculStyleBig from "../../../components/course-path-components/circul-style-big/circul-style-big";
import WasHelpfulFeedBack from "../../../components/course-path-components/was-helpful-feedback/was-helpful-feedback";
import VideoLesson from "../../../components/course-lesson-components/video-lesson/video-lesson";
import PdfLesson from "../../../components/course-lesson-components/pdf-lesson/pdf-lesson";
import BottomBar from "../../../components/course-path-components/bottom-bar/bottom-bar";

const CourseLessons = () => {
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

    const lessonInfo = {
        title: "كيف تعرف عن نفسك بالانجليزية",
        lessonType: "pdf",
        videoSrc: "/videos/experimental_vid/1.mp4",
        pdfSrc: "/pdf/1.pdf"
    };

    const lesson = lessonInfo.lessonType === "video" ?
        <div className="lesson_container">
            <VideoLesson lessonInfo={lessonInfo} />
            <div className="lesson_title_container">
                <CirculStyleBig />
                <h1 className="lesson_title">{lessonInfo.title}</h1>
            </div>
            <WasHelpfulFeedBack feedBackHelpFulPercentage={60} />
        </div> :
        <div className="lesson_container">
            <div className="lesson_title_container">
                <CirculStyleBig />
                <h1 className="lesson_title">{lessonInfo.title}</h1>
            </div>
            <PdfLesson lessonInfo={lessonInfo} />
            <div className="control_pdf_buttons">
                <a
                    href={lessonInfo.pdfSrc}
                    download={true}
                    style={{ textDecoration: "none" }}
                    className="download_pdf_btn"
                >
                    <img src="/icons/download_icon/import.svg" alt="" />
                    <p> تنزيل ك pdf</p>
                </a>
                <a
                    href={lessonInfo.pdfSrc}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                    className="view_pdf_btn"
                >
                    <img src="/icons/eye/Vector.svg" alt="" />
                    <p> عرض كامل</p>
                </a>
            </div>
            <WasHelpfulFeedBack feedBackHelpFulPercentage={60} />
        </div>;



    return <div className="course_lessons_page">
        <ProgressBar course={courseInfo} />
        {lesson}
        <BottomBar />
    </div>
};
export default CourseLessons;