import "./add-course-add-test-container.css";
import { useState } from "react";
import AddCourseAddTestQuestionContainer from "./add-course-add-test-question-container";

const AddCourseAddTestContainer = ({ testNum, unitId, testId, state, dispatch }) => {
    const [questions, setQuestions] = useState([]);

    const addQuestionHandler = () => {
        const id = crypto.randomUUID();
        setQuestions([...questions, { id: id }]);
        dispatch({ type: "ADD_UNIT_TEST_QUESTION", unitId, testId, questionId: id });
    };

    const deleteQuestionHandler = (id) => {
        const newQuestions = questions.filter(question => question.id !== id);
        setQuestions(newQuestions);
        dispatch({ type: "REMOVE_UNIT_TEST_QUESTION", unitId, testId, questionId: id });
    };

    return <div className="add_course_add_test_container">
        <h1>الاختبار {testNum}</h1>
        <div className="add_course_questions_container">
            {questions.map(question => <AddCourseAddTestQuestionContainer
                key={question.id}
                id={question.id}
                deleteQuestion={deleteQuestionHandler}
                unitId={unitId}
                testId={testId}
                questionId={question.id}
                state={state}
                dispatch={dispatch}
            />)}
        </div>
        <button className="add_course_add_question_btn" onClick={addQuestionHandler}>اضافة سؤال</button>
    </div>
};
export default AddCourseAddTestContainer;