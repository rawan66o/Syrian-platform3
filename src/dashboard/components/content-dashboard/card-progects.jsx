import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

function Card({ data }) {
  const safeData = data || {};

  function handleProject() {
    alert('go to project');
  }

  return (
    <div className="card-pro">
      <div className="card-content-header">
        <img 
          src={safeData.image || '/images/5.jpg'} 
          alt={safeData.name || 'صورة الدورة'}
          onError={(e) => {
            e.target.src = '/images/default-course.jpg';
          }}
        />
        <h5>{safeData.name || "اسم الدورة"}</h5>
      </div>
      
      {/* SECTION DATE */}
      <div className="card-flex-center">
        <div className="volunteers-section-card">
          <AvatarGroup total={22} max={3}>
            <Avatar alt="متطوع 1" src='/images/logo/1.jpg' />
            <Avatar alt="متطوع 2" src='/images/logo/2.jpg' />
            <Avatar alt="متطوع 3" src='/images/logo/3.jpg' />
          </AvatarGroup>
          <h6>22</h6>
          <p>متطوع</p>
        </div>
        <div className='card-flex'>
          <img src='/images/icons/dashboard/calendar.svg' alt='تاريخ' />
          <h5>{safeData.date || "تاريخ غير محدد"}</h5>
        </div>
      </div>
      
      {/* BUTTONS SECTION */}
      <button className="continue-pro" onClick={handleProject}>
        <h2>عرض المشروع</h2>
        <img src='/images/icons/dashboard/Vector.png' alt='متابعة' />
      </button>
    </div>
  );
}

export default Card;