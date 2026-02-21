function Card({data}) {
  const safeData = data || {};
  const progress = safeData.progress || 0;
  
  const getProgressColor = () => {
    if (progress === 100) return "#34C759";
    if (progress >= 80) return "#6DCDE5";
    if (progress >= 50) return "#6DCDE5";
    if (progress >= 25) return "#6DCDE5";
    return "#6DCDE5";
  };

  function handleCourse() {
    alert('go to course succsses')
  }
  
  return(
   <div className="card-flex-column">
    {/* Course Header */}
    <div className="card-flex-row">
      <div className="card-content-header">
        <img src={safeData.image || '/images/default-course.png'} alt={safeData.name}/>
        <div>
            <h5 style={{margin: 0, color: '#072127',fontSize:'20px'}}>{safeData.name || "اسم الدورة"}</h5>
            {/* <p style={{margin: '5px 0 0 0', color: '#666', fontSize: '14px'}}>
                {safeData.status || "المحاضر"}
            </p> */}
        </div>
      </div>
      <img src="/images/icons/dashboard/pointers.png" alt="خيارات" style={{cursor: 'pointer'}}/>  
    </div>
    
    {/* Progress Section */}
    <div>
      <p className="progress-label">نسبة التقدم الحالية:  {progress}%</p>
      
      {/* Progress Bar */}
      <div style={{
        width: '100%',
        height: '19px',
        backgroundColor: '#ecf0f1',
        borderRadius: '6px',
        // overflow: 'hidden',
        margin: '10px 0 20px 0'
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          backgroundColor: getProgressColor(),
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingRight: '5px',
          transition: 'width 0.5s ease'
        }}>
          {/* {progress > 20 && (
            <span style={{
              color: 'white',
              fontSize: '9px',
              fontWeight: 'bold'
            }}>
              {progress}%
            </span>
          )} */}
        </div>
      </div>
      
      {/* Course Info */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <img src="/images/icons/dashboard/course-icon/course-icon2.png" alt="محاضرات" /> 
          <p style={{margin: 0, color: '#555', fontSize: '14px'}}>
            {safeData.numberoflectures || 0}/{safeData.lectures || 0} درس
          </p>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
           <img src="/images/icons/dashboard/clock/clock1.png" alt="ساعات" /> 
           <p style={{margin: 0, color: '#555', fontSize: '14px'}}>
             {safeData.hours || 0} ساعة
           </p>
        </div>
      </div>
      
    </div>
    
    {/* Continue Button */}
    {safeData.progress !== 100 ?(
      <div className="continue-course" onClick={handleCourse}>
        <h2>متابعة الدورة</h2>
        <img src='/images/icons/dashboard/Vector.png' alt='متابعة' style={{cursor: 'pointer'}} />
      </div>) : (
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <div className="end-course" onClick={handleCourse}>
            <h2>عرض الدورة</h2>
            <img src='/images/icons/dashboard/Vector.png' alt='متابعة' style={{cursor: 'pointer'}} />
          </div>
          <div className="end">منهية</div>
        </div>
      )
    }
   </div>
  )
}

export default Card