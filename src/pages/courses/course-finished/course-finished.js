import "./course-finished.css";
import ReactDOM from "react-dom";
import DividingLineFullScreen from "../../../components/dividing-line-full-screen/dividing-line-full-screen";
import ProgressBar from "../../../components/course-path-components/progress-bar/progress-bar";
import CourseCertificateModal from "../../../components/course-path-components/course-certificate-modal/course-certificate-modal";
import { useState } from "react";


const CourseFinished = () => {
    const [showCertificate, setShowCertificate] = useState(false);
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
    const showCertificateHandler = () => {
        setShowCertificate(true);
    };
    const hideCertificateHandler = () => {
        setShowCertificate(false);
    };
    return <div className="course_finished">
        <DividingLineFullScreen />
        <ProgressBar course={courseInfo} />
        <div className="course_finished_body">
            <div className="finished_outer_outer_circul">
                <div className="finished_outer-circul">
                    <div className="finished_circul">
                        <img src="/icons/selected_mark/big_correct_icon.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="finished_p">
                <h1 className="finished_p_header"> لقد أنهيت الدورة بنجاح !</h1>
                <p className="finished_p_body">قد اجتزت جميع الدروس بنجاح، يمكنك الآن استلام شهادتك</p>
            </div>
            <div className="certificate_preview_buttons">
                <button className="certificate_download_button">
                    <img src="/icons/download_icon/import.svg" alt="" />
                    {" "}
                    تنزيل الشهادة
                </button>
                <button className="certificate_preview_button" onClick={showCertificateHandler}>
                    عرض الشهادة
                </button>
            </div>
        </div>
        {showCertificate && ReactDOM.createPortal(<CourseCertificateModal close={hideCertificateHandler} />, document.getElementById("certificate-root"))}
    </div>
};
export default CourseFinished;