import BottomBar from "../../../components/course-path-components/bottom-bar/bottom-bar";
import CertificateRequirements from "../../../components/course-path-components/certificate-requirements/certificate-requirements";
import ProgressBar from "../../../components/course-path-components/progress-bar/progress-bar";
import DividingLineFullScreen from "../../../components/dividing-line-full-screen/dividing-line-full-screen";
import "./course-certificate-requirements.css";


const CourseCertificateRequirements = () => {
    const courseInfo = {
        title: "كورس تعلم اللغة الانكليزية من الصفر.",
        progress_percentage: "30",
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
    const requirements = [
        "امتحان الوحدة الاولى",
        "كورس تعلم اللغة اللانجليزية منذ البداية",
        "امتحان الوحدة الثانية",
        "كورس تعلم اللغة اللانجليزية منذ البداية",
        "امتحان الوحدة الاولى",
        "كورس تعلم اللغة اللانجليزية منذ البداية",
        "امتحان الوحدة الاولى",
    ];
    return <div className="certificate_requirements_page">
        <DividingLineFullScreen />
        <ProgressBar course={courseInfo} />
        <CertificateRequirements requirements={requirements} />
        <BottomBar />
    </div>
};
export default CourseCertificateRequirements;