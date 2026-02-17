import "./add-course-level-container.css";
import { useState } from "react";
import AddCourseAddLessonContainer from "../add-course-add-lesson-container/add-course-add-lesson-container";
import NormalAddCourseInput from "../add-course-input/normal-add-course-input";
import TextAreaAddCourseInput from "../add-course-input/text-area-add-course-input";
import AddCourseAddTestContainer from "../add-course-add-test-container/add-course-add-test-container";

const lessonNameMap = {
    0: "الأول",
    1: "الثاني",
    2: "الثالث",
    3: "الرابع",
    4: "الخامس",
    5: "السادس",
    6: "السابع",
    7: "الثامن",
    8: "التاسع",
    9: "العاشر",
    10: "الحادي عشر",
    11: "الثاني عشر",
    12: "الثالث عشر",
    13: "الرابع عشر",
    14: "الخامس عشر",
    15: "السادس عشر",
    16: "السابع عشر",
    17: "الثامن عشر",
    18: "التاسع عشر",
    19: "العشرون",
};


const AddCourseLevelContainer = ({ levelNum, unitId, state, dispatch }) => {
    const [lessons, setLessons] = useState([]);

    const unit = state.units.find(unit => unit.id === unitId);

    const addLessonHandler = (type) => {
        const id = crypto.randomUUID();

        const Name = type === "test" ? lessons.filter(lesson => lesson.type === "test").length :
            lessons.filter(lesson => lesson.type === "lesson").length;

        const newLesson = { id: id, lessonNum: lessonNameMap[Name], type: type };
        setLessons([...lessons, newLesson]);

        if (type === "lesson") {
            dispatch({ type: "ADD_UNIT_LESSON", unitId: unit.id, lessonId: id });
        } else {
            dispatch({ type: "ADD_UNIT_TEST", unitId: unit.id, testId: id });
        }
    };


    console.log(unit);

    return <div className="add_course_level_container_full">
        <div className="add_course_level_container">
            <h1>الوحدة {levelNum}</h1>
            <NormalAddCourseInput
                type="input"
                label="اسم الوحدة"
                validation="من فضلك يجب أن يكون الاسم معبرا ولا يتجاوز 30 حرف ."
                placeholder="اسم الوحدة"
                unitId={unit.id}
                value={unit.unitName}
                field="unitName"
                state={state}
                dispatch={dispatch}
                step="2_1"
            />
            <TextAreaAddCourseInput
                type="textarea"
                label="وصف الوحدة"
                placeholder="وصف الدورة كامل ومعبر"
                unitId={unit.id}
                value={unit.unitDescription}
                field="unitDescription"
                state={state}
                dispatch={dispatch}
                step="2_1"
            />
        </div>
        {lessons.map(lesson =>
        (lesson.type === "lesson" ?
            <AddCourseAddLessonContainer key={lesson.id}
                lessonNum={lesson.lessonNum}
                unitId={unit.id}
                lessonId={lesson.id}
                state={state}
                dispatch={dispatch}
            /> :
            <AddCourseAddTestContainer key={lesson.id}
                testNum={lesson.lessonNum}
                unitId={unit.id}
                testId={lesson.id}
                state={state}
                dispatch={dispatch}
            />)
        )}
        <div className="add_course_add_level_lesson_test_buttons">
            <button className="add_course_add_lesson_button"
                onClick={() => addLessonHandler("lesson")}>
                اضافة درس
            </button>
            <button className="add_course_add_test_button"
                onClick={() => addLessonHandler("test")}>
                اضافة اختبار
            </button>
        </div>
    </div>
};
export default AddCourseLevelContainer;