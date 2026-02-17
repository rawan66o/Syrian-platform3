import { useEffect, useState } from "react";
import "./question.css";



const Question = ({ question }) => {
    const [checkedId, setCheckedId] = useState(null);
    const [chosenOption, setChosenOption] = useState(null);
    useEffect(() => {
        console.log(checkedId, " ", chosenOption);

    }, [checkedId, chosenOption]);
    return <div className="test_container" key={question.number}>
        <div className="test_container_header">
            <h1 className="question_title">{question.number} : {question.title}</h1>
            <p className="question_pointer">{question.pointer}</p>
        </div>
        {
            question.type === "multiple_choice" && <div className="choices">
                {question.options.map((option, index) => {
                    const id = index;
                    return <div key={id}>
                        <div className={`option ${checkedId === id ? 'option_sky' : ''}`}>
                            {/* <input type="checkbox" className="checkbox" /> */}
                            <span className={`custom_checkbox ${checkedId === id ? 'checked' : ''}`} onClick={() => {
                                if (checkedId === id) {
                                    setCheckedId(null);
                                    setChosenOption(null);
                                    return;
                                }
                                setCheckedId(id);
                                setChosenOption(option);
                            }} />
                            <span className="option_p">{option}</span>
                        </div>
                    </div>
                })}
            </div>
        }
        {
            question.type === "open" && <div className="solution_input">
                <textarea className="open_input" placeholder="الحل : " />
            </div>
        }
        <div className="question_submit_container">
            <button className="question_submit_button">تسليم</button>
            <p className="mark_note">{question.marks} علامة على السؤال</p>
        </div>
    </div>
};
export default Question;