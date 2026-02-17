import "./why-us.css";

const WhyUs = () => {

    const platformOffers = [
        {
            id: 1,
            icon: "/icons/offers_icons_main_page/graduation_hat.svg",
            title: "الكورسات",
            description: "نقدم افضل انواع الكورسات بميزات عالية جدا وبانظمة جميلة وفعالة وبنظام ."
        },
        {
            id: 2,
            icon: "/icons/offers_icons_main_page/lamp.svg",
            title: "المشاريع التطوعية",
            description: "نقدم افضل انواع الكورسات بميزات عالية جدا وبانظمة جميلة وفعالة وبنظام ."
        },
        {
            id: 3,
            icon: "/icons/offers_icons_main_page/offers_star.svg",
            title: "الخبرات",
            description: "نقدم افضل انواع الكورسات بميزات عالية جدا وبانظمة جميلة وفعالة وبنظام ."
        },
        {
            id: 4,
            icon: "/icons/offers_icons_main_page/message.svg",
            title: "نظام المنتدى",
            description: "نقدم افضل انواع الكورسات بميزات عالية جدا وبانظمة جميلة وفعالة وبنظام ."
        },
    ];



    return <div className="why_us_container">
        <div className="why_us_img_container">
            <div className="why_us_note_container">
                <div className="why_us_question_mark_container">?</div>
                <div>
                    <p className="why_us_what_are_you_waiting_for">ماذا تنتظر الآن</p>
                    <h1>اتصل بنا</h1>
                </div>
            </div>
            <div className="why_us_circul_outer">
                <div className="why_us_circul" />
            </div>
            <img className="why_us_img" src="/images/students/why_us_stud.png" alt="" />
        </div>
        <div className="why_us_description_container">
            <div className="why_us_description">
                <div className="why_us_header">
                    <p className="why_us_why_us">لماذا نحن ؟</p>
                    <h1>نحن المنصة السورية التي تقدم كافة أنواع الدورات.</h1>
                </div>
                <p className="why_us_header_p_p">المنصّة الوزاريّة التعليميّة هي بوابة رقمية شاملة تهدف إلى دعم التعليم في سوريا  تجمع المنصّة بين التقنيات الحديثة والمحتوى المحلي لتسهيل الوصول إلى المعرفة في أي وقت ومكان.</p>
            </div>
            <div className="why_us_platform_offers">
                {platformOffers.map(offer => <div key={offer.id} className="why_us_offer">
                    <div className="why_us_offer_header">
                        <div className="why_us_icon_container"><img src={offer.icon} alt="" /></div>
                        <img src="/icons/arrows/top_left_arrow.svg" alt="" />
                    </div>
                    <h1>{offer.title}</h1>
                    <p>{offer.description}</p>
                </div>)}
            </div>
        </div>
    </div>
};
export default WhyUs;