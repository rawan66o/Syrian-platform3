import mycourses from '../../mycoursesdata';
import Card from '../../components/content-dashboard/card-course';
import styles from './dashboard-home.module.css';

function ContentDashboard() {
  const statsData = [
    {
      id: 1,
      logo: '/images/icons/dashboard/tow_truck.png',
      color: '#34C75914',
      number: '14',
      name: 'الدورات المنجزة'
    },
    {
      id: 2,
      logo: '/images/icons/dashboard/course-icon/course-icon1.png',
      color: '#6DCDE514',
      number: '3',
      name: 'دورات جارية'
    },
    {
      id: 3,
      logo: '/images/icons/dashboard/clock/clock.png',
      color: '#FF950014',
      number: '245',
      name: 'ساعات محتملة'
    },
  ];
   
  return (
    <div className={styles.container}>
      {/* HEADER SECTION */}
      <div className={styles.headerContent}>
        <div className={styles.userInfo}>
          <img 
            className={styles.avatar} 
            src="/images/logo/2.jpg" 
            alt="صورة الملف الشخصي"
          />
          <div>
            <h1 className={styles.userName}>محمد احمد الشيخ</h1>
            <p className={styles.userRole}>(طالب)</p>
          </div>
        </div>
        <div className={styles.editButton}>
          <p>تعديل الملف</p> 
          <img src='/images/icons/dashboard/edite.png' alt='تعديل'/>
        </div>
      </div>
      
      {/* STATS SECTION */}
      <div className={styles.statsContainer}>
        {statsData.map((data) => (
          <div 
            className={styles.statsCard} 
            key={data.id}
          >
            <div>
              <h1 className={styles.statsNumber}>{data.number}</h1>
              <p className={styles.statsName}>{data.name}</p>
            </div>
            <div 
              className={styles.statsIcon} 
              style={{background: `${data.color}`}}
            >
              <img src={data.logo} alt={data.name}/>
            </div>
          </div>
        ))}
      </div>
       
      {/* COURSES SECTION */}
      <div className={styles.coursesSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>الدورات الحالية</h2>
          <div className={styles.viewAllButton}>
            <button>عرض الكل</button>
            <img src='/images/icons/dashboard/Vector.png' alt='سهم'/>
          </div>
        </div>
        
        <div className={styles.coursesGrid}>
          {mycourses.length > 0 ? (
            mycourses.map((course) => (
              <div key={course.id} className={styles.courseCard}>
                <Card data={course} />
              </div>
            ))
          ) : (
            <div className={styles.emptyState}>
              <img src="/images/icons/empty-courses.png" alt="لا توجد دورات" />
              <h3>لا توجد دورات حالياً</h3>
              <p>سجل في بعض الدورات لتظهر هنا</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContentDashboard;