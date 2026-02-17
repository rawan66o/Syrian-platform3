import "./test-results-component.css";
import QuestionTestResults from "../question-test-results/question-test-results";
import WasHelpfulFeedBack from "../was-helpful-feedback/was-helpful-feedback";
import CirculStyleBig from "../circul-style-big/circul-style-big";
const TestResults = ({ testResults }) => {


    const faintResultColor = testResults.result === "passed" ? "#34c7591a" : "#EC26251A";
    const resultColor = testResults.result === "passed" ? "#34C759" : "#EC2625";
    const result = testResults.result === "passed" ? "ناجح" : "راسب";
    return <div className="test_result">
        <div className="result_upper_header">
            <CirculStyleBig />
            <h1 className="test_result_title">نتيجة {testResults.title} :</h1>
        </div>
        <div className="result_container">
            <div className="test_result_circle_container" style={{ backgroundColor: `${faintResultColor}` }}>
                <div className="test_result_circule" style={{ background: `conic-gradient(${resultColor} 0% ${testResults.resultPercentage}%,transparent ${testResults.resultPercentage}% 100%)` }} />
            </div>
            <div className="result_details">
                <p className="result_details_p" style={{ color: `${resultColor}` }}>
                    <span className="percentage_number">{testResults.resultPercentage}%</span>
                    {"  "}({result})
                </p>
                <p className="questions_solved">نتيجة الاختبار {testResults.rightQuestionsNum} / {testResults.questionsNum}</p>
            </div>
            {testResults.result === "failed" && <button className="redo_test_button">اعادة الاختبار</button>}
        </div>
        <div className="test_questions_corrections">
            {testResults.questions.map(question => <QuestionTestResults key={question.id} question={question} />
            )}
            <WasHelpfulFeedBack feedBackHelpFulPercentage={testResults.feedbackHelpfulPercentage} />
        </div>

    </div>
};
export default TestResults;


