import "./footer.css";
const Footer = () => {


    return <div className="footer_container">
        <div className="footer_content">
            <div className="platform_description">
                <img className="footer_logo" src='/icons/syrian_platform_icon/syrian_platform_footer.svg' alt="" />
                <p className="footer_p">
                    المنصّة الوزاريّة التعليميّة هي بوابة رقمية شاملة تهدف  تجمع المنصّة بين التقنيات الحديثة والمحتوى المحلي لتسهيل الوصول إلى المعرفة في أي وقتمكان.المنصّة الوزاريّةشاملة تهدف .
                </p>
            </div>
            <div className="footer_section">
                <h1 className="h1">الرئيسية</h1>
                <div className="footer_dividing_line" />
                <ul className="footer_section_list">
                    <li className="footer_list_item">من نحن</li>
                    <li className="footer_list_item">الدورات</li>
                    <li className="footer_list_item">المشاريع</li>
                    <li className="footer_list_item">المنتدى</li>
                    <li className="footer_list_item">الاخبار</li>
                </ul>
            </div>
            <div className="footer_section">
                <h1 className="h1">التنقلات</h1>
                <div className="footer_dividing_line" />
                <ul className="footer_section_list">
                    <li className="footer_list_item">السياسة</li>
                    <li className="footer_list_item">الشركاء</li>
                    <li className="footer_list_item">المشاريع</li>
                    <li className="footer_list_item">المساعدة</li>
                    <li className="footer_list_item">الدعم</li>
                </ul>
            </div>
            <div className="footer_section">
                <h1 className="h1">اتصل بنا</h1>
                <div className="footer_dividing_line" />
                <ul className="footer_section_list">
                    <li className="footer_list_item">
                        <img style={{ alignSelf: 'flex-start' }} src='/icons/location/location.svg' alt="" />
                        <p>
                            سوريا /  جانب مبنى الشيخ احمد الشرع / الشارع 10024 / الحي رقم 1
                        </p>
                    </li>
                    <li className="footer_list_item">
                        <img src='/icons/email/email.svg' alt="" />
                        <p>info@yourdomain.com</p>
                    </li>
                    <li className="footer_list_item">
                        <img src='/icons/call/call.svg' alt="" />
                        <p style={{ direction: 'ltr' }}>+99 (0) 101 0000 888</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className="dividing_line_footer" />
        <div className="footer_social">
            <p className="footer_rights">جميع الحقوق محفوظة للمنصة السورية  2025 ©</p>
            <ul className="footer_social_buttons">
                <li style={{ backgroundColor: '#6DCDE5', boxShadow: '-5px 10px 30px 0px #6DCDE54D' }}><img src='/icons/twitter/twitter.svg' alt="" /></li>
                <li><img src='/icons/linked_in/linkedin.svg' alt="" /></li>
                <li><img src='/icons/instagram/instagram.svg' alt="" /></li>
                <li><img src='/icons/facebook/facebook.svg' alt="" /></li>
            </ul>
        </div>
    </div>
};
export default Footer;