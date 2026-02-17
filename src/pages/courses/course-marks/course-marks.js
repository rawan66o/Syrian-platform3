import "./course-marks.css";
import DividingLineFullScreen from "../../../components/dividing-line-full-screen/dividing-line-full-screen";
import ProgressBar from "../../../components/course-path-components/progress-bar/progress-bar";
import Marks from "../../../components/course-path-components/marks/marks";
import BottomBar from "../../../components/course-path-components/bottom-bar/bottom-bar";
const CourseMarks = () => {
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
    const marksInfo = {
        resultPercentage: 40,
        result: "failed",
        successPercentage: 50,
        tests: [
            {
                id: 1,
                title: "الاختبار الأول",
                numOfTrys: 2,
                successPercentage: 50,
                resultPercentage: 40,
                result: "failed"
            },
            {
                id: 2,
                title: "الاختبار الثاني",
                numOfTrys: 1,
                successPercentage: 50,
                resultPercentage: 20,
                result: "failed"
            },
            {
                id: 3,
                title: "الاختبار الثالث",
                numOfTrys: 2,
                successPercentage: 50,
                resultPercentage: 75,
                result: "passed"
            },
        ],
        feedbackHelpfulPercentage: 60
    };
    return <div className="marks_page">
        <DividingLineFullScreen />
        <ProgressBar course={courseInfo} />
        <Marks marksInfo={marksInfo} />
        <BottomBar />
    </div>
};
export default CourseMarks;