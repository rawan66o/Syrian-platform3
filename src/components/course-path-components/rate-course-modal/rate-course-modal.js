import BackDrop from "../../backdrop/backdrop";
import "./rate-course-modal.css";
import { Rating } from "react-simple-star-rating";

const RateCourseModal = ({ close, value }) => {



    const handleRatingChange = () => {

    };
    return <>
        <BackDrop onClick={close} />
        <div className="rate_course_modal">
            <div className="rate_course_modal_body">
                <div className="rate_course_modal_header">
                    <h1 className="rate_course_h1">قيم هذه الدورة</h1>
                    <Rating
                        size={38}
                        allowFraction
                        fillColor="#ffb71b"
                        emptyColor="#dbdfe1"
                        transition
                        readonly={false}
                        initialValue={value}
                        onClick={handleRatingChange} />
                </div>
                <div className="rate_course_modal_comment_container">
                    <p className="rate_course_modal_comment_p">أخبرنا ماذا اعجبك بهذه الدورة ؟</p>
                    <textarea className="rate_course_modal_comment_textarea" placeholder="ملاحظاتك حول الدورة" />
                </div>
            </div>
            <div className="rate_course_modal_buttons">
                <button className="rate_course_send_button">ارسال التقييم</button>
                <button className="rate_course_cancel_button" onClick={close}>الغاء</button>
            </div>
        </div>
    </>

};
export default RateCourseModal;