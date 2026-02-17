import './lessons.css';

const Lessons = () => {

    const dummy_lessons = [
        {
            id: 1,
            title: "الوحدة الأولى : مقدمة في قواعد البيانات",
            description: "ورس تصميم واجهات المستخدم (UI Design) هو رحلة متكاملة لتعلّم كيفية تحويل الأفكار إلى تصاميم جذابة وسهلة الاستخدام.يبدأ بشرح أساسيات التصميم، الألوان، الخطوط، وتناسق العناصر على الشاشة.تعرّف الطالب على مبادئ "
        },
        {
            id: 2,
            title: "الوحدة الثانية : مقدمة في UI / UX",
            description: "ورس تصميم واجهات المستخدم (UI Design) هو رحلة متكاملة لتعلّم كيفية تحويل الأفكار إلى تصاميم جذابة وسهلة الاستخدام.يبدأ بشرح أساسيات التصميم، الألوان، الخطوط، وتناسق العناصر على الشاشة.تعرّف الطالب على مبادئ "
        },
        {
            id: 3,
            title: "الوحدة الثانية : مقدمة في UI / UX",
            description: "ورس تصميم واجهات المستخدم (UI Design) هو رحلة متكاملة لتعلّم كيفية تحويل الأفكار إلى تصاميم جذابة وسهلة الاستخدام.يبدأ بشرح أساسيات التصميم، الألوان، الخطوط، وتناسق العناصر على الشاشة.تعرّف الطالب على مبادئ "
        }
    ];
    return <div className="lessons_container">
        <h1 className="lessons_header">قائمة الدروس</h1>
        <div className="lessons">
            {dummy_lessons.map(lesson => <div className="lesson" key={lesson.id}>
                <h1>{lesson.title}</h1>
                <p>{lesson.description}</p>
            </div>)}
        </div>
        <button className="show_all_button">اظهار كل الوحدات</button>
    </div>
};
export default Lessons;