import "./question-test-results.css";



const QuestionTestResults = ({ question }) => {

    const chosenClassCheck = question.optionResult === "passed" ? "passed" : "failed";
    const chosenClassBackground = question.optionResult === "passed" ? "results_question_background_passed" : "results_question_background_failed";
    const chosenOption = question.chosenOption;
    const optionLabelClass = question.optionResult === "passed" ? "passed_option" : "failed_option";
    const questionFeedBack =
        question.optionResult === "failed" && question.type === "multiple_choice" ? <p className="wrong_answer_feedback">اجابتك خطأ الاجابة الصحيحة هي : <span className="correct_answer_container"><span className="correct_answer_checkbox" /><span> {question.correctOption}</span></span></p> :
            question.optionResult === "failed" && question.type === "open" ?
                <p className="wrong_answer_feedback">اجابتك خاطئة</p> :
                <p className="correct_answer_feedback">اجابتك صحيحة :<span className="marks_given">لقد كسبت {question.marks} علامة</span></p>;


    return <div className="results_question_test_container" key={question.number}>
        <div className="results_question_test_container_header">
            <h1 className="results_question_question_title">{question.number} : {question.title}</h1>
            <p className="results_question_question_pointer">{question.pointer}</p>
        </div>
        {
            question.type === "multiple_choice" && <div className="results_question_choices">
                {question.options.map((option, index) => {
                    const id = index;
                    return <div key={id}>
                        <div className={`results_question_option ${chosenOption === option ? `${chosenClassBackground}` : ''}`}>
                            <span className={`results_question_custom_checkbox ${chosenOption === option ? `${chosenClassCheck}` : ''}`} />
                            <span className={`results_question_option_p ${chosenOption === option ? `${optionLabelClass}` : ''}`}>{option}</span>
                        </div>
                    </div>
                })}
            </div>
        }
        {
            question.type === "open" && <div className="results_question_solution_input">
                <textarea className={`results_question_open_input ${question.questionResult === "passed" ? 'passed_open_input' : 'failed_open_input'}`} placeholder="الحل : " disabled />
            </div>
        }
        {questionFeedBack}
    </div>
};
export default QuestionTestResults;

