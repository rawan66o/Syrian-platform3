import mycourses from '../../mycoursesdata'
import Card from '../../components/content-dashboard/card-course'
import './dashboard-home.css'

function ContentDashboard() {
  const statsData = [
    {
      id: 1,
      logo:'/images/icons/dashboard/tow_truck.png',
      color:'#34C75914',
      number:'14',
      name:'الدورات المنجزة'
    },
    {
      id: 2,
      logo:'/images/icons/dashboard/course-icon/course-icon1.png',
      color:'#6DCDE514',
      number:'3',
      name:'دورات جارية'
    },
    {
      id: 3,
      logo:'/images/icons/dashboard/clock/clock.png',
      color:'#FF950014',
      number:'245',
      name:'ساعات محتملة'
    },
  ]
   
  return(
    <div style={{padding: '20px', width: '100%'}}>
      {/* HEADER SECTION */}
      <div className="header-content">
        <div style={{display:'flex', alignItems:'center', gap: '20px'}}>
            <img className="img-avatar" src="/images/logo/2.jpg" alt="صورة الملف الشخصي"/>
            <div>
                <h1 style={{margin: '0 0 5px 0', color: '#072127'}}>محمد احمد الشيخ</h1>
                <p style={{margin: 0, color: '#666'}}>(طالب)</p>
            </div>
        </div>
        <div className='button-h'>
            <p>تعديل الملف</p> 
            <img src='/images/icons/dashboard/edite.png' alt='تعديل'/>
        </div>
      </div>
      {/* STATS SECTION */}
      <div style={{
          display:'flex', 
          alignItems:'center',
          justifyContent: 'space-between',
          gap:'20px',
          marginBottom: '40px'
      }}>
        {statsData.map((data)=>(
          <div 
            className='card-border card-flex-row' 
            style={{width: '100%'}}  
            key={data.id}
          >
            <div>
              <h1 className="stats-number">{data.number}</h1>
              <p className="stats-name">{data.name}</p>
            </div>
            <div className='card-icon' style={{background:`${data.color}`}}>
              <img src={data.logo} alt={data.name}/>
            </div>
          </div>
        ))}
      </div>
       
      {/* COURSES SECTION */}
      <div>
        <div style={{
          display:'flex',
          alignItems:'center', 
          justifyContent:'space-between',
          marginBottom: '20px'
        }}>
          <h2 style={{margin: 0, color: '#072127'}}>الدورات الحالية</h2>
          <div style={{
            display:'flex',
            alignItems:'center',
            gap: '8px',
            cursor: 'pointer'
          }}>
            <button style={{
              border:'0px',
              background:'transparent',
              color:'#072127',
              fontSize: '16px',
              cursor: 'pointer'
            }}>
               عرض الكل
            </button>
            <img src='/images/icons/dashboard/Vector.png' alt='سهم'/>
          </div>
        </div>
        
        <div className='courses-grid'>
          {mycourses.map((course)=>(
           <div key={course.id} className='card-border' >
             <Card data={course} />
           </div>
          ))}
        </div>
      </div>
    </div>
    )
}

export default ContentDashboard