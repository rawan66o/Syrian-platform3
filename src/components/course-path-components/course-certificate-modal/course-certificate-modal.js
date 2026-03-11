import BackDrop from "../../backdrop/backdrop";
import "./course-certificate-modal.css";


const CourseCertificateModal = ({ close }) => {

    return <>
        <BackDrop onClick={close} />
        <div className="course_certificate_modal">
            <img src="/images/empty_certificate/empty_certificate.svg"
                className="course_certificate_modal_image"
                alt="" />
        </div>
    </>
};
export default CourseCertificateModal;