import './request-course.css';


const RequestCourse = () => {
    const dummy_features = [
        { id: 1, text: '+ 170 طالبًا مشاركًا.' },
        { id: 2, text: 'شهادة بعد الانتهاء من الدورة.' },
        { id: 3, text: 'اختبارات بعد الانتهاء من كل درس.' }
    ];
    return <div className="course_details_request_container">
        <img className="course_details_request_image" src='/images/request-course/1.svg' alt='' />
        <div className="course_details_features">
            <h1>المميزات</h1>
            <ul className="course_details_request_list">
                {
                    dummy_features.map(feature => <li className="course_details_request_list_item" key={feature.id}>
                        {feature.text}
                    </li>)
                }
            </ul>
        </div>
        <div className="course_details_request">
            <button className="course_details_request_button">طلب الدورة</button>
            <p>انضم إلى آلاف الطلاب</p>
        </div>
    </div>
};
export default RequestCourse;