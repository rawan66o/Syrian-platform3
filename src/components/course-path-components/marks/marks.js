import "./marks.css";
import CirculStyleBig from "../circul-style-big/circul-style-big";
import WasHelpfulFeedBack from "../was-helpful-feedback/was-helpful-feedback";

const Marks = ({ marksInfo }) => {
    const faintResultColor = marksInfo.result === "passed" ? "#34c7591a" : "#EC26251A";
    const resultColor = marksInfo.result === "passed" ? "#34C759" : "#EC2625";
    const result = marksInfo.result === "passed" ? "ناجح" : "راسب";
    return <div className="marks">
        <div className="marks_header">
            <div className="marks_header_full">
                <div className="marks_upper_header">
                    <CirculStyleBig />
                    <h1 className="marks_title">العلامات</h1>
                </div>
                <p className="marks_note">يرجى العلم ان  العلامة النهائية تحتسب بناء على نتائج ووزن كل اختبار </p>
            </div>
            <div className="marks_container">
                <div className="marks_circle_container" style={{ backgroundColor: `${faintResultColor}` }}>
                    <div className="marks_circul" style={{ background: `conic-gradient(${resultColor} 0% ${marksInfo.resultPercentage}%,transparent ${marksInfo.resultPercentage}% 100%)` }} />
                </div>
                <div className="marks_details">
                    <p className="marks_details_p" style={{ color: `${resultColor}` }}>
                        <span className="marks_percentage_number">{marksInfo.resultPercentage}%</span>
                        {"  "}({result})
                    </p>
                    <p className="marks_p">العلامة النهائية</p>
                </div>
                <div className="marks_success_percetage">
                    <img src="/icons/statistics_icon/statistics_icon.svg" alt="" />
                    <p className="marks_success_percentage_p">نسبة النجاح <span className="marks_success_percentage_p_span">{marksInfo.successPercentage}%</span></p>
                </div>
            </div>
        </div>
        <div className="marks_tests_info_container">
            <div className="marks_tests_info">
                {marksInfo.tests.map(test => <div key={test.id} className="marks_test_info">
                    <div className="marks_test_title">
                        <img src="/icons/reciept_icon/receipt_icon.svg" alt="" />
                        <p>{test.title}</p>
                    </div>
                    <div className="marks_tests_statistics">
                        <div className="marks_tests_statistics_statistic">
                            <p className="marks_tests_statistics_percentage">{test.numOfTrys}</p>
                            <p className="marks_tests_statistics_statistic_title">عدد المحاولات</p>
                        </div>
                        <div className="marks_tests_statistics_statistic">
                            <p className="marks_tests_statistics_percentage">{test.successPercentage}%</p>
                            <p className="marks_tests_statistics_statistic_title">نسبة النجاح</p>
                        </div>
                        <div className="marks_tests_statistics_statistic">
                            <p className="marks_tests_statistics_percentage_last">{test.resultPercentage}%</p>
                            <p className="marks_tests_statistics_statistic_title">(العلامة)</p>
                        </div>
                    </div>
                    <div className="result_container_text " style={{ backgroundColor: `${test.result === "passed" ? "#34C759" : "#EC2625"}` }}>{test.result === "passed" ? "ناجح" : "راسب"}</div>
                </div>)}
            </div>
            <WasHelpfulFeedBack feedBackHelpFulPercentage={marksInfo.feedbackHelpfulPercentage} />
        </div>
    </div>
};
export default Marks;