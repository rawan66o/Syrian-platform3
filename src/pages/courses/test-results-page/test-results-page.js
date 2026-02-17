import "./test-results-page.css";
import ProgressBar from "../../../components/course-path-components/progress-bar/progress-bar";
import TestResults from "../../../components/course-path-components/test-results-component/test-results-component";
import DividingLineFullScreen from "../../../components/dividing-line-full-screen/dividing-line-full-screen";
import BottomBar from "../../../components/course-path-components/bottom-bar/bottom-bar";
const TestResultsPage = () => {
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
    const testResults = {
        title: "الاختبار الأول",
        resultPercentage: 55,
        successPercentage: 50,
        rightQuestionsNum: 3,
        questionsNum: 5,
        result: "passed",
        questions: [
            {
                id: 1,
                number: 1,
                title: "ما هو الفعل باللغة الانجليزية الذيي يشير معناه ل العب ؟",
                pointer: "اختر الاجابة الصحيحة ؟",
                type: "multiple_choice",
                options: [
                    "playing",
                    "go to ckhole",
                    "football",
                    "gamingss"
                ],
                marks: 2,
                chosenOption: "football",
                optionResult: "failed",
                correctOption: "gamingss",
            },
            {
                id: 2,
                number: 2,
                title: "عرف ما هو الفعل باللغة الانجليزية ؟",
                pointer: "املأ الحقل بالجواب المناسب ",
                type: "open",
                options: [],
                marks: 2,
                questionResult: "passed",
            },
            {
                id: 3,
                number: 3,
                title: "ما هو الفعل باللغة الانجليزية الذيي يشير معناه ل العب ؟",
                pointer: "اختر الاجابة الصحيحة ؟",
                type: "multiple_choice",
                options: [
                    "playing",
                    "go to ckhole",
                    "football",
                    "gamingss"
                ],
                marks: 2,
                chosenOption: "football",
                optionResult: "passed",
                correctOption: "gamingss",
            },
        ],
        feedbackHelpfulPercentage: 60
    };
    return <div className="test_results_page">
        <DividingLineFullScreen />
        <ProgressBar course={courseInfo} />
        <TestResults testResults={testResults} />
        <BottomBar />
    </div>
};
export default TestResultsPage;