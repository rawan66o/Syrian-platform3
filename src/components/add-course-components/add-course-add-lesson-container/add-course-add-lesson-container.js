import "./add-course-add-lesson-container.css";
import { useState } from "react";
import NormalAddCourseInput from "../add-course-input/normal-add-course-input";
import PdfAddCourseInput from "../add-course-input/pdf-add-course-input";
import VideoAddCourseInput from "../add-course-input/video-add-course-input";
import { DatePicker } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const AddCourseAddLessonContainer = ({ lessonNum, unitId, lessonId, state, dispatch }) => {
    const [chosenType, setChosenType] = useState(null);
    const [date, setDate] = useState(null);

    const unit = state.units.find(unit => unit.id === unitId);

    const lesson = unit.lessons.find(lesson =>
        lesson.id === lessonId
    );

    const setLessonType = (type) => {
        setChosenType(type);
        dispatch({ type: "SET_UNIT_LESSON_FIELD", unitId, lessonId, field: "type", value: type });
    };

    return <div className="add_course_add_lesson_container">
        <div className="add_course_add_lesson_header_and_title">
            <h1>الدرس {lessonNum}</h1>
            <NormalAddCourseInput
                type="input"
                label="عنوان الدرس"
                validation="هذا هو العنوان المختصر للدرس (يظهر في القائمة الجانبية)"
                placeholder="عنوان الدرس"
                unitId={unit.id}
                lessonId={lesson.id}
                value={lesson.title}
                field="title"
                state={state}
                dispatch={dispatch}
                step="2_2_1"
            />
        </div>
        <div className="add_course_add_lesson_type_and_lesson_container">
            <div className="add_course_add_lesson_choose_type_and_lesson_info">
                <p> اختر نوع الدرس ( فيديو / ملف / رابط البث المباشر  )</p>
                <div className="add_course_add_lesson_choose_type_options">
                    <div className="add_course_add_lesson_choose_type_option">
                        <div className={`add_course_add_lesson_option ${chosenType === "pdf" ? "add_course_add_lesson_chosen" : ""}`} onClick={() => { setLessonType("pdf") }} />
                        <p>ملف pdf</p>
                    </div>
                    <div className="add_course_add_lesson_choose_type_option">
                        <div className={`add_course_add_lesson_option ${chosenType === "live" ? "add_course_add_lesson_chosen" : ""}`} onClick={() => { setLessonType("live") }} />
                        <p>رابط بث مباشر</p>
                    </div>
                    <div className="add_course_add_lesson_choose_type_option">
                        <div className={`add_course_add_lesson_option ${chosenType === "video" ? "add_course_add_lesson_chosen" : ""}`} onClick={() => { setLessonType("video") }} />
                        <p>فيديو</p>
                    </div>
                </div>
            </div>
            {
                chosenType === "pdf" && <div className="add_course_add_lesson_upload_container">
                    <PdfAddCourseInput
                        label="رفع  ( ملف PDF  ) للدرس"
                        unitId={unit.id}
                        lessonId={lesson.id}
                        value={lesson.file}
                        field="file"
                        state={state}
                        dispatch={dispatch}
                        step="2_2_1"
                    />
                    <NormalAddCourseInput
                        label="عنوان الملف"
                        placeholder="عنوان الملف"
                        unitId={unit.id}
                        lessonId={lesson.id}
                        value={lesson.fileTitle}
                        field="fileTitle"
                        state={state}
                        dispatch={dispatch}
                        step="2_2_1"
                    />
                </div>
            }
            {
                chosenType === "video" && <div className="add_course_add_lesson_upload_container">
                    <VideoAddCourseInput
                        label="رفع ( فيديو ) الدرس"
                        unitId={unit.id}
                        lessonId={lesson.id}
                        value={lesson.file}
                        field="file"
                        state={state}
                        dispatch={dispatch}
                        step="2_2_1"
                    />
                    <NormalAddCourseInput
                        label="عنوان الفيديو"
                        placeholder="عنوان الفيديو"
                        unitId={unit.id}
                        lessonId={lesson.id}
                        value={lesson.fileTitle}
                        field="fileTitle"
                        state={state}
                        dispatch={dispatch}
                        step="2_2_1"
                    />
                </div>
            }
            {
                chosenType === "live" && <div className="add_course_add_lesson_upload_container">
                    <NormalAddCourseInput label="رابط البث المباشر"
                        placeholder="37sjjdsfjk/https .com"
                        unitId={unit.id}
                        lessonId={lesson.id}
                        value={lesson.liveLink}
                        field="liveLink"
                        state={state}
                        dispatch={dispatch}
                        step="2_2_1"
                    />
                    <div className="add_lesson_date_container">
                        <label className="add_course_date_picker_label">بداية البث المباشر</label>
                        <DatePicker
                            selected={date}
                            onChange={(newDate) => {
                                setDate(newDate);
                                dispatch({ type: "SET_UNIT_LESSON_FIELD", unitId, lessonId, field: "liveStart", value: newDate })
                            }}
                            showTimeSelect
                            dateFormat="yyyy-MM-dd"
                            placeholderText="اختر تاريخًا"
                            value={lesson.liveStart}
                        />
                    </div>
                    <NormalAddCourseInput
                        label="مدة البث"
                        placeholder="2 ساعة"
                        unitId={unit.id}
                        lessonId={lesson.id}
                        value={lesson.liveDuration}
                        field="liveDuration"
                        state={state}
                        dispatch={dispatch}
                        step="2_2_1"
                    />
                </div>
            }
        </div>
    </div>
};
export default AddCourseAddLessonContainer;