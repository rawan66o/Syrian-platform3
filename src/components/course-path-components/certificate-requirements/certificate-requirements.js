import "./certificate-requirements.css";
import CirculStyleBig from "../circul-style-big/circul-style-big";
import WasHelpfulFeedBack from "../was-helpful-feedback/was-helpful-feedback";


const CertificateRequirements = ({ requirements }) => {


    return <div className="certificate_requirements">
        <div className="certificate_requirements_header">
            <CirculStyleBig />
            <h1 className="certificate_requirements_header_h1">شهادة التدريب</h1>
        </div>
        <div className="certificate_requirements_body">
            <h1 className="certificate_requirements_body_header">
                لاصدار الشهادة يجب عليك اتمام جميع المراحل والاختبارات  التالية  :
            </h1>
            <div className="certificate_requirements_container">
                {requirements.map((requirement, index) => <div key={index} className="certificate_requirement_container">
                    <span className="certificate_requirement_pointer"></span>
                    <p className="certificate_requirement">{requirement}</p>
                </div>)}
            </div>
        </div>
        <WasHelpfulFeedBack feedBackHelpFulPercentage={60} />
    </div>
};
export default CertificateRequirements;