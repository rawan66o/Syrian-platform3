import Card from '../../components/content-dashboard/card-course'
import './mycourses-dashboard.css'
import mycourses from '../../mycoursesdata'

function MycoursesDashboard() {
  return(
    <div className='mycourses-dashboard-layout'>
      <h4>دورات جارية:</h4>
      <div className='courses-grid'>
        {mycourses.map((cours)=>(
          cours.progress !== 100 ?(
          <div key={cours.id} className='card-course'>
            <Card data={cours} />
          </div> ) : ''
        ))}
      </div>
      <h4>جميع الدورات:</h4>
      <div className='courses-grid'>
        {mycourses.map((cours)=>(
          cours.progress === 100 ?(
          <div key={cours.id} className='card-course'>
            <Card data={cours} />
          </div> ) : ''
        ))}
      </div>
    </div>
  )
}

export default MycoursesDashboard