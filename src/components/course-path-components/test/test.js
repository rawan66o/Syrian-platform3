import "./test.css";
import Question from "../question/question";
import CirculStyleBig from "../circul-style-big/circul-style-big";
const Test = ({ testDetails }) => {



    return <div className="test">
        <div className="test_header">
            <div className="upper_header">
                <CirculStyleBig />
                <h1 className="test_title">{testDetails.title} :</h1>
            </div>
            <div className="lower_header">
                <div className="lower_header_content">
                    <img src="/icons/questions_count_icon/receipt.svg" alt="" />
                    <p>عدد الأسئلة {testDetails.questions_count}</p>
                </div>
                <div className="lower_header_content">
                    <img src="/icons/success_percentage_icon/diagram.svg" alt="" />
                    <p>نسبة النجاح بالاختبار {testDetails.success_percentage} بالمية</p>
                </div>
            </div>
        </div>
        <div className="tests">
            {testDetails.questions.map(question => <Question key={question.id} question={question} />
            )}
        </div>
        <div className="submit_test_btn">تسليم الاختبار</div>
    </div>
};
export default Test;


