function Card({ data }) {
  const safeData = data || {};

  return (
    <div className='card-certificates'>
      {/* HEADER SECTION */}
      <div className="card-content-header">
        <img 
          src={safeData.image || '/images/5.jpg'} 
          alt={safeData.name || "صورة الدورة"}
          onError={(e) => {
            e.target.src = '/images/default-course.jpg';
          }}
        />
        <div>
          <h5>{safeData.name || "اسم الدورة"}</h5>
        </div>
      </div>
      
      {/* DATE SECTION */}
      <div className='card-flex'>
        <img src='/images/icons/dashboard/calendar.svg' alt='تاريخ'/>
        <h5>{safeData.date || "تاريخ غير محدد"}</h5>
      </div>
      
      {/* BUTTONS SECTION */}
      <div className='card-flex-row'>
        <button className='button-certificates' style={{background:'#6DCDE5', color:'#ffff'}}>
          التنزيل ك PDF 
          <img style={{width:'20px', height:'20px'}}
            src='/images/icons/dashboard/Layer_1.png' 
            alt='تنزيل'
          />
        </button>
        
        <button className='button-certificates' style={{background:'#7C83891A', color:'#071722'}}>
          عرض الشهادة 
          <img
            src='/images/icons/dashboard/Vector.png' 
            alt='عرض'
          />
        </button>
      </div>
    </div>
  )
}

export default Card