import "./add-post.css";
import { useEffect, useReducer, useState } from "react";
import ImageAddCourseInput from "../../../components/add-course-components/add-course-input/image-add-course-input";
import NormalAddCourseInput from "../../../components/add-course-components/add-course-input/normal-add-course-input";
import SelectAddCourseInput from "../../../components/add-course-components/add-course-input/select-add-course-input";
import TextAreaAddCourseInput from "../../../components/add-course-components/add-course-input/text-area-add-course-input";
import ReactPlayer from "react-player";

const AddPost = () => {
    const [files, setFiles] = useState([]);
    const [filesPreview, setFilesPreview] = useState([]);

    const addPostOptions = [
        { value: "essay", label: "مقالة" },
        { value: "essay2", label: "مقالة2" },
        { value: "essay3", label: "مقالة3" },
        { value: "essay4", label: "مقالة4" },
    ];

    useEffect(() => {
        return () => {
            filesPreview.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [filesPreview]);

    const handleFileChange = (e) => {
        const newfiles = Array.from(e.target.files);
        setFiles(newfiles);
        const previews = newfiles.map(file => URL.createObjectURL(file));
        setFilesPreview(previews);
    }

    const initialState = {
        values: {
            title: "",
            category: "",
            image: null,
            description: "",
            assets: [],
            fullDescription: "",
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
        dispatch({ type: "SET_VALUE", field: "assets", value: files });
    }, [files]);
    useEffect(() => {
        console.log(state);
    }, [state]);

    return <div className="add_post_page">
        <div className="add_post_container_full">
            <h1>اضافة منشور جديدة :</h1>
            <div className="add_post_container">
                <NormalAddCourseInput label="عنوان المنشور"
                    validation=" من فضلك يجب أن يكون الاسم معبرا ولا يتجاوز 30 حرف ."
                    placeholder="عنوان المنشور"
                    value={state.values.title}
                    field="title"
                    dispatch={dispatch}
                    step="1"
                />
                <SelectAddCourseInput
                    label="تصنيف المنشور"
                    placeholder="تصنيف المنشور"
                    options={addPostOptions}
                    field="category"
                    state={state}
                    dispatch={dispatch}
                    step="1"
                />
                <ImageAddCourseInput
                    label="صورة الغلاف"
                    validation=" من فضلك يجب أن تكون الصورة معبرة ومناسبة مع الاسم ."
                    field="image"
                    dispatch={dispatch}
                    step="1"
                />
                <TextAreaAddCourseInput
                    label="وصف قصير"
                    validation="يجب ان لا يتجاوز ال 50 حرف"
                    placeholder="وصف الدورة كامل ومعبر"
                    field="description"
                    value={state.values.description}
                    state={state}
                    dispatch={dispatch}
                    step="1"
                />
                <div className="add_post_add_accessories">
                    <div className="add_post_label_and_validation">
                        <label className="add_post_label">ملحقات (صور او فيديهات)</label>
                        <label className="add_course_validation"> من فضلك يجب أن تكون الصورة معبرة ومناسبة مع الاسم .</label>
                    </div>
                    <div className="add_post_add_file_container">
                        <div className="add_post_add_file_input_container">
                            <input id={`add_post_file_input_file`} type="file" multiple style={{ display: "none" }} onChange={handleFileChange} />
                            <label className="add_post_add_file_style" htmlFor={`add_post_file_input_file`} />
                        </div>
                    </div>
                    <div className="add_post_files_preview">
                        {filesPreview.length > 0 &&
                            filesPreview.map((file, index) => {
                                const isVideo = files[index].type.startsWith("video");
                                const isImage = files[index].type.startsWith("image");
                                const isPdf = files[index].type.includes("pdf");
                                return <div key={index} className="add_post_file_preview">
                                    {isImage && <img className="add_post_image" src={file} alt="" />}
                                    {isVideo && <ReactPlayer
                                        src={file}
                                        width="100%"
                                        height="100%"
                                        preload=""
                                        controls
                                    />}
                                    {isPdf && <iframe src={file} title="pdf" width="100%" height="100%" />}
                                </div>
                            })
                        }
                    </div>
                </div>
                <TextAreaAddCourseInput
                    label="وصف المنشور الكامل"
                    placeholder="وصف المنشور كامل ومعبر"
                    value={state.values.fullDescription}
                    field="fullDescription"
                    state={state}
                    dispatch={dispatch}
                    step="1"
                />
            </div>
        </div>
        <div className="add_post_bottom_bar_container">
            <div className="add_post_bottom_bar">
                <button className="add_post_bottom_bar_previous">السابق</button>
                <button className="add_post_bottom_bar_next">نشر المنشور</button>
            </div>
        </div>
    </div>
};
export default AddPost;