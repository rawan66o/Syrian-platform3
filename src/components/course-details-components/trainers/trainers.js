import './trainers.css';

const Trainers = () => {
    const dummy_trainers = [
        {
            id: 1,
            image: '/images/trainers/Ellipse 1245.svg',
            title: 'خليل شركة تيكنوفا',
            courses_count: 24,
            description: 'ورس تصميم واجهات المستخدم (UI Design) هو رحلة متكاملة لتعلّم كيفية تحويل الأفكار إلى تصاميم جذابة وسهلة الاستخدام. يبدأ بشرح أساسيات التصميم، الألوان، الخطوط، وتناسق العناصر على الشاشة.تعرّف الطالب على مبادئ التصميم الجيد وكيفية بناء تجربة بصرية مريحة وواضحة.يشمل الكورس تطبيقات عملية باستخدام أدوات احترافية مثل Figma وAdobe '
        },
        {
            id: 2,
            image: '/images/trainers/Ellipse 1245.svg',
            title: 'خليل شركة تيكنوفا',
            courses_count: 24,
            description: 'ورس تصميم واجهات المستخدم (UI Design) هو رحلة متكاملة لتعلّم كيفية تحويل الأفكار إلى تصاميم جذابة وسهلة الاستخدام. يبدأ بشرح أساسيات التصميم، الألوان، الخطوط، وتناسق العناصر على الشاشة.تعرّف الطالب على مبادئ التصميم الجيد وكيفية بناء تجربة بصرية مريحة وواضحة.يشمل الكورس تطبيقات عملية باستخدام أدوات احترافية مثل Figma وAdobe '
        },
    ];
    return <div className="container">
        <h1 className="trainers_container_header">مدربين الدورة</h1>
        <div className="trainers">
            {dummy_trainers.map(trainer => <div className="trainer" key={trainer.id}>
                <div className="trainer_header">
                    <img className="trainer_image" src={trainer.image} alt='' />
                    <div className="title_and_count">
                        <h1>{trainer.title}</h1>
                        <h2>{trainer.courses_count} دورة</h2>
                    </div>
                </div>
                <div className="trainer_body">
                    {trainer.description}
                </div>
            </div>)}
        </div>
    </div>
}
export default Trainers;