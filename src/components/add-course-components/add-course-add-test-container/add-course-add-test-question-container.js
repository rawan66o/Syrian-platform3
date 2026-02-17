import "./add-course-add-test-container.css";
import { useState } from "react";
import Select from "react-select";
import TextAreaAddCourseInput from "../add-course-input/text-area-add-course-input";

const answerNameMap = {
    0: "الاجابة الأولى 1",
    1: "الاجابة الثانية 2",
    2: "الاجابة الثالثة 3",
    3: "الاجابة الرابعة 4",
    4: "الاجابة الخامسة 5",
    5: "الاجابة السادسة 6",
    6: "الاجابة السابعة 7",
    7: "الاجابة الثامنة 8",
    8: "الاجابة التاسعة 9",
    9: "الاجابة العاشرة 10",
};

const options = [
    { value: "multiple", label: "اختيار من متعدد" },
    { value: "text", label: "إجابة نصية" },
];

const AddCourseAddTestQuestionContainer = ({ id, deleteQuestion, unitId, testId, questionId, state, dispatch }) => {
    const [choices, setChoices] = useState([]);
    const [type, setType] = useState({ value: "text", label: "اجابة نصية" });
    const [questionRequired, setQuestionRequired] = useState(true);
    const [chosenChoice, setChosenChoice] = useState(null);

    const addAnswerHandler = () => {
        const id = crypto.randomUUID();
        const newChoice = { id: id, answerName: answerNameMap[choices.length] };
        setChoices([...choices, newChoice]);
        dispatch({ type: "ADD_UNIT_TEST_QUESTION_ANSWER", unitId, testId, questionId, optionId: id });
    }

    const selectTypeStyles = {
        control: (base) => ({
            ...base,
            width: "178px",
            height: "45px",
            borderRadius: "4px",
            border: "1px solid #D9E4E5",
            cursor: "pointer"
        }),
        placeholder: (base) => ({
            ...base,
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0px",
            textAlign: "right",
            color: "#708387",
        }),
        option: (base) => ({
            ...base,
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0px",
            textAlign: "right",
            color: "#072127",
        }),
        dropdownIndicator: (base) => ({
            ...base,
            color: "#708387"
        }),
        indicatorSeparator: (base) => ({
            ...base,
            display: "none"
        })
    };

    const unit = state.units.find(unit => unit.id === unitId);
    const test = unit.tests.find(test => test.id === testId);
    const question = test.questions.find(question => question.id === questionId);


    const selectTypeFromReducer = options.find(option => option.label === question.type);

    const titleChangeHandler = (e) => {
        dispatch({ type: "SET_UNIT_TEST_QUESTION_FIELD", unitId, testId, questionId, field: "title", value: e.target.value });
    };

    return <div className="add_course_question_container">
        <div className="add_course_question_header">
            <input type="text"
                className="add_course_question_input"
                placeholder="اكتب السؤال هنا"
                value={question.title}
                onChange={titleChangeHandler}
            />
            <Select
                placeholder="نوع السؤال"
                options={options}
                styles={selectTypeStyles}
                value={selectTypeFromReducer || ""}
                onChange={(chosen) => {
                    setType(chosen);
                    dispatch({ type: "SET_UNIT_TEST_QUESTION_FIELD", unitId, testId, questionId, field: "type", value: chosen.label });
                }}
            />
        </div>
        {type.value === "multiple" &&
            <div className="add_course_choices_container">
                {choices.map(choice => <div key={choice.id} className="add_course_choice_container">
                    <div className="add_course_answer_style_and_input">
                        <div className={`add_cousre_answer_style  ${chosenChoice === choice.id ? "add_course_choice_chosen" : ""}`} onClick={() => {
                            setChosenChoice(choice.id);
                            dispatch({ type: "SET_UNIT_TEST_QUESTION_ANSWER_CHOSEN", unitId, testId, questionId, optionId: choice.id });
                        }} />
                        <input type="text"
                            className="add_cousre_answer_input"
                            autoFocus
                            defaultValue={choice.answerName}
                            value={question.options.find(option => option.id === choice.id).text || choice.answerName}
                            onChange={(e) => {
                                dispatch({ type: "SET_UNIT_TEST_QUESTION_ANSWER_TEXT", unitId, testId, questionId, optionId: choice.id, text: e.target.value });
                            }}
                        />
                    </div>
                    <button className="add_course_input_cancel" onClick={() => {
                        const newChoices = choices.filter(newchoice => newchoice.id !== choice.id);
                        setChoices(newChoices);
                        dispatch({ type: "REMOVE_UNIT_TEST_QUESTION_ANSWER", unitId, testId, questionId, optionId: choice.id });
                    }}>
                        <img src="/icons/exit_icon/add.svg" alt="" />
                    </button>
                </div>)}
                <div className="add_course_answer_style_and_input">
                    <div className="add_cousre_answer_style cursor_none" />
                    <button className="add_course_add_answer_btn" onClick={addAnswerHandler}>اضافة اجابة أخرى</button>
                </div>
            </div>}
        {type.value === "text" &&
            <TextAreaAddCourseInput
                label="نص الاجابة"
                placeholder="نص الاجابة"
                unitId={unit.id}
                testId={test.id}
                questionId={question.id}
                value={question.text}
                field="text"
                state={state}
                dispatch={dispatch}
                step="2_2_2"
            />}
        <div className="add_course_question_divider" />
        <div className="add_course_required_delete_container">
            <div className="add_course_set_required_container">
                <p>مطلوب</p>
                <div className={`add_course_set_required ${!questionRequired ? "add_course_reset_required" : ""}`} onClick={() => {
                    dispatch({ type: "SET_UNIT_TEST_QUESTION_FIELD", unitId, testId, questionId, field: "required", value: !questionRequired });
                    setQuestionRequired(prev => !prev)
                }}>
                    <div className={`add_course_set_required_btn ${!questionRequired ? "add_course_reset_required_btn" : ""}`} />
                </div>
            </div>
            <div className="add_course_required_delete_divider" />
            <div className="add_course_delete_and_container">
                <button> <img src="/icons/delete_icon/trash.svg" onClick={() => { deleteQuestion(id) }} alt="" /></button>
                <button> <img src="/icons/save_icon/save-2.svg" alt="" /></button>
            </div>
        </div>
    </div>
};
export default AddCourseAddTestQuestionContainer;