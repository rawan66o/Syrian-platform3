import Card from '../../components/content-dashboard/card-course';
import styles from './mycourses-dashboard.module.css';
import mycourses from '../../mycoursesdata';

function MycoursesDashboard() {
  // Filter courses
  const ongoingCourses = mycourses.filter(course => course.progress !== 100);
  const completedCourses = mycourses.filter(course => course.progress === 100);
  
  return (
    <div className={styles.layout}>
      {/* Ongoing Courses Section */}
      <h4 className={styles.sectionTitle}>دورات جارية:</h4>
      <div className={styles.coursesGrid}>
        {ongoingCourses.length > 0 ? (
          ongoingCourses.map((course) => (
            <div key={course.id} className={styles.cardCourse}>
              <Card data={course} />
            </div>
          ))
        ) : (
          <div className={styles.emptyState}>
            <img src="/images/icons/empty-courses.png" alt="لا توجد دورات جارية" />
            <h3>لا توجد دورات جارية</h3>
            <p>سجل في بعض الدورات لتبدأ التعلم</p>
          </div>
        )}
      </div>
      
      {/* All Courses Section */}
      <h4 className={styles.sectionTitle}>جميع الدورات:</h4>
      <div className={styles.coursesGrid}>
        {completedCourses.length > 0 ? (
          completedCourses.map((course) => (
            <div key={course.id} className={styles.cardCourse}>
              <Card data={course} />
            </div>
          ))
        ) : (
          <div className={styles.emptyState}>
            <img src="/images/icons/empty-courses.png" alt="لا توجد دورات مكتملة" />
            <h3>لا توجد دورات مكتملة</h3>
            <p>أكمل بعض الدورات لتظهر هنا</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MycoursesDashboard;