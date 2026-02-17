import { useEffect, useReducer, useState } from "react";
import "./add-course-step-two.css";
import AddCourseLevelContainer from "../add-course-level-container/add-course-level-container";

const levelNameMap = {
    0: "الأولى",
    1: "الثانية",
    2: "الثالثة",
    3: "الرابعة",
    4: "الخامسة",
    5: "السادسة",
    6: "السابعة",
    7: "الثامنة",
    8: "التاسعة",
};

const AddCourseStepTwo = () => {
    const [levels, setLevels] = useState([]);




    const addLevelHandler = () => {
        const id = crypto.randomUUID();
        const newLevel = { id: id, levelNum: levelNameMap[levels.length] };
        setLevels([...levels, newLevel]);
        dispatch({ type: "ADD_UNIT", id: id });
    };

    const initialState = {
        units: []
    };
    const reducerFunction = (state, action) => {
        switch (action.type) {
            case "ADD_UNIT":
                return {
                    ...state, units:
                        [...state.units,
                        {
                            id: action.id,
                            unitName: "",
                            unitDescription: "",
                            lessons: [],
                            tests: []
                        }]
                };
            case "SET_UNIT_FIELD":
                return {
                    ...state, units: state.units.map(unit =>
                        unit.id === action.unitId ? {
                            ...unit,
                            [action.field]: action.value
                        } : unit
                    )
                };
            case "ADD_UNIT_LESSON":
                return {
                    ...state, units: state.units.map(unit =>
                        unit.id === action.unitId ? {
                            ...unit, lessons: [...unit.lessons, {
                                id: action.lessonId,
                                title: "",
                                type: "",
                                file: null,
                                fileTitle: "",
                                liveLink: "",
                                liveStart: null,
                                liveDuration: ""
                            }]
                        } : unit
                    )
                };
            case "ADD_UNIT_TEST":
                return {
                    ...state, units: state.units.map(unit =>
                        unit.id === action.unitId ? {
                            ...unit, tests: [...unit.tests, {
                                id: action.testId,
                                questions: []
                            }]
                        } : unit
                    )
                };
            case "SET_UNIT_LESSON_FIELD":
                return {
                    ...state, units: state.units.map(unit =>
                        unit.id === action.unitId ?
                            {
                                ...unit, lessons: unit.lessons.map(lesson =>
                                    lesson.id === action.lessonId ?
                                        { ...lesson, [action.field]: action.value }
                                        : lesson
                                )
                            }
                            : unit
                    )
                };
            case "ADD_UNIT_TEST_QUESTION":
                return {
                    ...state, units: state.units.map(unit =>
                        unit.id === action.unitId ?
                            {
                                ...unit, tests: unit.tests.map(test =>
                                    test.id === action.testId ?
                                        {
                                            ...test, questions: [...test.questions, {
                                                id: action.questionId,
                                                title: "",
                                                type: "",
                                                text: "",
                                                required: true,
                                                options: []
                                            }]
                                        }
                                        : test
                                )
                            }
                            : unit
                    )
                };
            case "REMOVE_UNIT_TEST_QUESTION":
                return {
                    ...state, units: state.units.map(unit =>
                        unit.id === action.unitId ?
                            {
                                ...unit, tests: unit.tests.map(test =>
                                    test.id === action.testId ?
                                        {
                                            ...test, questions: test.questions.filter(question =>
                                                question.id !== action.questionId
                                            )
                                        }
                                        : test
                                )
                            }
                            : unit
                    )
                };
            case "SET_UNIT_TEST_QUESTION_FIELD":
                return {
                    ...state, units: state.units.map(unit =>
                        unit.id === action.unitId ?
                            {
                                ...unit, tests: unit.tests.map(test =>
                                    test.id === action.testId ?
                                        {
                                            ...test, questions: test.questions.map(question =>
                                                question.id === action.questionId ?
                                                    { ...question, [action.field]: action.value }
                                                    : question
                                            )
                                        }
                                        : test
                                )
                            }
                            : unit
                    )
                };
            case "ADD_UNIT_TEST_QUESTION_ANSWER":
                return {
                    ...state, units: state.units.map(unit =>
                        unit.id === action.unitId ?
                            {
                                ...unit, tests: unit.tests.map(test =>
                                    test.id === action.testId ?
                                        {
                                            ...test, questions: test.questions.map(question =>
                                                question.id === action.questionId ?
                                                    {
                                                        ...question, options: [...question.options, {
                                                            id: action.optionId,
                                                            text: "",
                                                            chosen: false
                                                        }]
                                                    }
                                                    : question
                                            )
                                        }
                                        : test
                                )
                            }
                            : unit
                    )
                };
            case "REMOVE_UNIT_TEST_QUESTION_ANSWER":
                return {
                    ...state, units: state.units.map(unit =>
                        unit.id === action.unitId ?
                            {
                                ...unit, tests: unit.tests.map(test =>
                                    test.id === action.testId ?
                                        {
                                            ...test, questions: test.questions.map(question =>
                                                question.id === action.questionId ?
                                                    {
                                                        ...question, options: question.options.filter(option => option.id !== action.optionId)
                                                    }
                                                    : question
                                            )
                                        }
                                        : test
                                )
                            }
                            : unit
                    )
                };
            case "SET_UNIT_TEST_QUESTION_ANSWER_CHOSEN":
                return {
                    ...state, units: state.units.map(unit =>
                        unit.id === action.unitId ?
                            {
                                ...unit, tests: unit.tests.map(test =>
                                    test.id === action.testId ?
                                        {
                                            ...test, questions: test.questions.map(question =>
                                                question.id === action.questionId ?
                                                    {
                                                        ...question, options: question.options.map(option =>
                                                            option.id === action.optionId ?
                                                                { ...option, chosen: true }
                                                                : { ...option, chosen: false }
                                                        )
                                                    }
                                                    : question
                                            )
                                        }
                                        : test
                                )
                            }
                            : unit
                    )
                };
            case "SET_UNIT_TEST_QUESTION_ANSWER_TEXT":
                return {
                    ...state, units: state.units.map(unit =>
                        unit.id === action.unitId ?
                            {
                                ...unit, tests: unit.tests.map(test =>
                                    test.id === action.testId ?
                                        {
                                            ...test, questions: test.questions.map(question =>
                                                question.id === action.questionId ?
                                                    {
                                                        ...question, options: question.options.map(option =>
                                                            option.id === action.optionId ?
                                                                { ...option, text: action.text }
                                                                : option
                                                        )
                                                    }
                                                    : question
                                            )
                                        }
                                        : test
                                )
                            }
                            : unit
                    )
                };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducerFunction, initialState);

    useEffect(() => {
        console.log(state);
    }, [state]);
    return <div className="add_course_step_two_container">
        {levels.map(level =>
            <AddCourseLevelContainer key={level.id}
                levelNum={level.levelNum}
                unitId={level.id}
                state={state}
                dispatch={dispatch}
            />
        )}
        <div className="add_course_step_two_add_level_container">
            <h1 className="add_course_step_two_add_level_header">اضافة وحدة علمية</h1>
            <button className="add_course_step_two_add_level_button" onClick={addLevelHandler}>
                <p>اضافة وحدة</p>
                <img src="/icons/plus/add-square.svg" alt="" />
            </button>
        </div>
    </div>
};
export default AddCourseStepTwo;