import "./add-course-input.css";
import Select from "react-select";

const SelectAddCourseInput = ({ label, placeholder, options, field, state, dispatch, step }) => {


    const selectInputStyles =
    {
        indicatorSeparator: (base) => ({
            ...base,
            display: "none"
        }),
        control: (base) => ({
            ...base,
            cursor: "pointer",
            height: "56px",
            borderRadius: "8px",
            border: "1px solid #70838766",
            padding: "0 20px",
            width: "100%",
            minWidth: "100%",
            maxWidth: "100%"
        }),
        placeholder: (base) => ({
            ...base,
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "100%",
            letterSpacing: "0px",
            textAlign: "right",
            color: "#708387"
        }),
        option: (base) => ({
            ...base,
            color: "#072127",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "100%",
            letterSpacing: "0px",
            textAlign: "right",
        }),
        dropdownIndicator: (base) => ({
            ...base,
            color: "#072127",
        }), menu: (base) => ({
            ...base,
            zIndex: 9999,
        }),
        menuPortal: (base) => ({
            ...base,
            zIndex: 9999,
        }),
        input: (base) => ({
            ...base,
            width: "100%"
        }),
    };

    const value = options.find(option => option.label === state.values[field]);

    const handleSelectChange = (selectedOption) => {
        switch (step) {
            case "1":
                dispatch({ type: "SET_VALUE", field, value: selectedOption.label });
                return;
            default:
                return;
        }
    };

    return <div className="add_course_input_container">
        <label className="add_course_label">{label}</label>
        <Select
            placeholder={placeholder}
            options={options}
            styles={selectInputStyles}
            value={value}
            onChange={handleSelectChange}
            isClearable
        />
    </div>
};
export default SelectAddCourseInput;