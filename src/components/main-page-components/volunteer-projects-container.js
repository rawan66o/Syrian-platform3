import "./volunteer-projects-container.css";



const VolunteerProjectsContainer = () => {

    const volunteerProjects = [
        {
            id: 1,
            img: "/images/volenteers_imgs/volenteers_img_1.svg",
            date: "2025 / 8 / 18",
            title: "مشروع تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
            vulenteersNum: 22,
        },
        {
            id: 2,
            img: "/images/volenteers_imgs/volenteers_img_2.svg",
            date: "2025 / 8 / 18",
            title: "مشروع تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
            vulenteersNum: 22,
        },
        {
            id: 3,
            img: "/images/volenteers_imgs/volenteers_img_3.svg",
            date: "2025 / 8 / 18",
            title: "مشروع تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
            vulenteersNum: 22,
        },
    ];



    return <div className="volunteer_projects_container">
        <div className="volunteer_projects_container_header">
            <h2>المشاريع التطوعية</h2>
            <h1>اكتشف افضل واشمل المشاريع التطوعية</h1>
        </div>
        <div className="volunteer_projects_cards">
            {volunteerProjects.map((project, index) => <div key={index} className="volunteer_projects_card">
                <img src={project.img} alt="" />
                <div className="volunteer_projects_card_details">
                    <div className="volunteers_card_date_h1">
                        <div className="volunteers_card_date">
                            <img src="/icons/chalender/calendar.svg" alt="" />
                            <p>{project.date}</p>
                        </div>
                        <h1>{project.title}</h1>
                    </div>
                    <div className="volunteers_num_container">
                        <div className="volunteers_students_imgs">
                            <img src="/images/students/students_1.png" alt="" />
                            <img src="/images/students/students_2.png" alt="" />
                            <img src="/images/students/students_3.png" alt="" />
                            <button className="volunteers_plus_students">+</button>
                        </div>
                        <p>{project.vulenteersNum} متطوع حالي بالمشروع</p>
                    </div>
                    <button className="volunteer_view_project_btn">عرض المشروع <img src="/icons/previous_icon/Prev.svg" alt="" /></button>
                </div>
            </div>)}
        </div>
        <button className="view_all_volunteer_projects_btn">
            عرض جميع المشاريع
        </button>
    </div>
};
export default VolunteerProjectsContainer;