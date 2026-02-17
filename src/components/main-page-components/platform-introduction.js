import "./platform-introduction.css";
import { Link } from "react-router";


const PlatformIntroduction = () => {


    return <div className="platform_introduction_container">
        <div className="platform_intoduction">
            <div className="platform_introduction_header">
                <div className="platform_introduction_header_start">
                    <div className="platform_introduction_header_start_now">
                        ابدأ الان
                    </div>
                    <h1>منصتك المناسبة للتعلم والتعليم .</h1>
                </div>
                <p>
                    المنصّة الوزاريّة التعليميّة هي بوابة رقمية شاملة تهدف إلى دعم التعليم في سوريا  تجمع المنصّة بين التقنيات الحديثة والمحتوى المحلي لتسهيل الوصول إلى المعرفة في أي وقت ومكان.
                </p>
            </div>
            <div className="platform_introduction_courses_viewmore_btn">
                <Link className="platform_intoduction_courses_btn">الكورسات</Link>
                <p>أو</p>
                <Link className="platform_intoduction_viewmore_btn">عرض المزيد</Link>
            </div>
            <div className="platform_introduction_statistics_container">
                <div className="platform_introduction_statistics">
                    <h2>+220</h2>
                    <p>كورس</p>
                </div>
                <div className="platform_introduction_statistics">
                    <h2>+500</h2>
                    <p>مدرب</p>
                </div>
                <div className="platform_introduction_statistics">
                    <h2>+2.5k</h2>
                    <p>طالب</p>
                </div>
            </div>
            <div className="platform_introduction_students_stats">
                <div className="platform_introduction_students_imgs">
                    <img src="/images/students/students_1.png" alt="" />
                    <img src="/images/students/students_2.png" alt="" />
                    <img src="/images/students/students_3.png" alt="" />
                    <button className="platform_introduction_plus_students">+</button>
                </div>
                <p>اكثر من 10000 الاف طالب يتدرب في المنصة</p>
            </div>
        </div>
        <div className="platform_introduction_img">
            <div className="platform_introduction_img_circul">
                <img src="/images/platform_introduction/main_page_student.png" className="platform_introduction_image" alt="" />
                <div className="platform_introduction_vol_badge">مشاريع تطوعية 👑</div>
                <div className="platform_introduction_courses_badge">كورسات تعليمية 🔥</div>
            </div>
            <img src="/icons/graduation_hat_main/graduation_hat_main.svg" className="platform_introduction_graduation_hat" alt="" />
            <img src="/icons/platform_introduction/platform_introduction_shape1.svg" className="platform_introduction_shape1" alt="" />
            <img src="/icons/platform_introduction/platform_introduction_shape2.svg" className="platform_introduction_shape2" alt="" />
        </div>
    </div>
};
export default PlatformIntroduction;