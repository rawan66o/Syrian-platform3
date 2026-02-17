import "./was-helpful-feedback.css";


const WasHelpfulFeedBack = ({ feedBackHelpFulPercentage }) => {


    return <div className="was_page_helpful">
        <div className="was_helpful">
            <p className="was_helpful_question">هل كانت هذه الصفحة مفيدة؟</p>
            <div className="feedback_answer_buttons">
                <button className="yes_feedback_helpful_button">نعم</button>
                <button className="no_feedback_helpful_button">لا</button>
            </div>
        </div>
        <div className="helpful_feedback">
            {feedBackHelpFulPercentage}% من المستخدمين قالو أنها مفيدة
        </div>
    </div>
};
export default WasHelpfulFeedBack;