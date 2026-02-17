import "./add-course-step-one.css";
import ImageAddCourseInput from "../add-course-input/image-add-course-input";
import NormalAddCourseInput from "../add-course-input/normal-add-course-input";
import SelectAddCourseInput from "../add-course-input/select-add-course-input";
import TextAreaAddCourseInput from "../add-course-input/text-area-add-course-input";
import { useEffect, useReducer } from "react";




const AddCourseStepOne = () => {

    const categories = [
        { value: "all_courses", label: "كل الكورسات", },
        { value: "langs", label: "اللغات", },
        { value: "mangement", label: "الادارة والقيادة", },
        { value: "graphic_design", label: "غرافيك دزاين", },
        { value: "arabic", label: "العربية", },
        { value: "ui_ux", label: "تصميم UI / UX", },
        { value: "managementb", label: "الادارة والقيادة", },
        { value: "graphic_designb", label: "غرافيك دزاين", },
    ];

    const initialState = {
        values: {
            title: "",
            description: "",
            courseImage: null,
            type: ""
        },
        errors: {
            title: false,
            description: false,
            courseImage: false,
        },
        loading: false,
        serverError: null,
    };

    const reducerFunction = (state, action) => {
        switch (action.type) {
            case "SET_VALUE":
                return {
                    ...state, values: {
                        ...state.values,
                        [action.field]: action.value
                    }
                };
            case "SET_ERROR":
                return {
                    ...state, errors: {
                        ...state.errors,
                        [action.field]: true
                    }
                };
            case "RESET_ERROR":
                return {
                    ...state, errors: {
                        ...state.errors,
                        [action.field]: false
                    }
                };
            case "SET_SERVER_ERROR":
                return { ...state, serverError: true };
            case "RESET_SERVER_ERROR":
                return { ...state, serverError: false };
            case "SET_LOADING":
                return { ...state, loading: true };
            case "RESET_LOADING":
                return { ...state, loading: false };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducerFunction, initialState);

    useEffect(() => {
        console.log(state);
    }, [state]);

    return <div className="add_course_step_one_container">
        <NormalAddCourseInput
            type="input"
            label="اسم الدورة"
            validation=" من فضلك يجب أن يكون الاسم معبرا ولا يتجاوز 30 حرف ."
            placeholder="دورة لغة انكليزية"
            value={state.values.title}
            field="title"
            state={state}
            dispatch={dispatch}
            step="1"
        />
        <TextAreaAddCourseInput
            type="textarea"
            label="وصف الدورة"
            placeholder="وصف الدورة كامل ومعبر"
            value={state.values.description}
            field="description"
            state={state}
            dispatch={dispatch}
            step="1"
        />
        <ImageAddCourseInput
            type="image"
            label="صورة غلاف الدورة"
            validation=" من فضلك يجب أن تكون الصورة معبرة ومناسبة مع الاسم ."
            field="courseImage"
            state={state}
            dispatch={dispatch}
            step="1"
        />
        <SelectAddCourseInput
            type="select"
            label="تصنيف الكورس"
            placeholder="تصنيف الكورس"
            options={categories}
            field="type"
            state={state}
            dispatch={dispatch}
            step="1"
        />
    </div>
};
export default AddCourseStepOne;