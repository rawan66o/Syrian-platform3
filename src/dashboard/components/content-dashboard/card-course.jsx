import styles from './card.module.css';

function Card({ data }) {
  const safeData = data || {};
  const progress = safeData.progress || 0;
  
  const getProgressColor = () => {
    if (progress === 100) return "#34C759";
    if (progress >= 80) return "#6DCDE5";
    if (progress >= 50) return "#6DCDE5";
    if (progress >= 25) return "#6DCDE5";
    return "#6DCDE5";
  };

  const getProgressText = () => {
    if (progress === 100) return "مكتملة";
    if (progress >= 80) return "ممتاز";
    if (progress >= 50) return "جيد";
    if (progress >= 25) return "بداية جيدة";
    return "بدأ للتو";
  };

  function handleCourse() {
    alert('go to course success');
  }
  
  return (
    <div className={styles.cardFlexColumn}>
      <div className={styles.cardFlexRow}>
        <div className={styles.cardContentHeader}>
          <img 
            className={styles.cardImage} 
            src={safeData.image || '/images/default-course.png'} 
            alt={safeData.name}
          />
          <div>
            <h5 className={styles.courseTitle}>
              {safeData.name || "اسم الدورة"}
            </h5>
          </div>
        </div>
        <img 
          className={styles.pointersIcon}
          src="/images/icons/dashboard/pointers.png" 
          alt="خيارات"
        />  
      </div>
      
      <div>
        <p className={styles.progressLabel}>
          نسبة التقدم الحالية: {progress}% ({getProgressText()})
        </p>
        
        <div className={styles.progressBarContainer}>
          <div 
            className={styles.progressBar}
            style={{
              width: `${progress}%`,
              backgroundColor: getProgressColor()
            }}
          >
            {/* {progress > 10 && `${progress}%`} */}
          </div>
        </div>
        
        <div className={styles.courseInfo}>
          <div className={styles.infoItem}>
            <img 
              className={styles.infoIcon}
              src="/images/icons/dashboard/course-icon/course-icon2.png" 
              alt="محاضرات"
            /> 
            <p className={styles.infoText}>
              {safeData.numberoflectures || 0}/{safeData.lectures || 0} درس
            </p>
          </div>
          <div className={styles.infoItem}>
            <img 
              className={styles.infoIcon}
              src="/images/icons/dashboard/clock/clock1.png" 
              alt="ساعات"
            /> 
            <p className={styles.infoText}>
              {safeData.hours || 0} ساعة
            </p>
          </div>
        </div>
      </div>
      
      {safeData.progress !== 100 ? (
        <div className={styles.continueCourse} onClick={handleCourse}>
          <h2>متابعة الدورة</h2>
          <img src='/images/icons/dashboard/Vector.png' alt='متابعة' />
        </div>
      ) : (
        <div className={styles.completedCourseContainer}>
          <div className={styles.endCourse} onClick={handleCourse}>
            <h2>عرض الدورة</h2>
            <img src='/images/icons/dashboard/Vector.png' alt='متابعة' />
          </div>
          <div className={styles.endBadge}>مكتملة ✓</div>
        </div>
      )}
    </div>
  );
}

export default Card;