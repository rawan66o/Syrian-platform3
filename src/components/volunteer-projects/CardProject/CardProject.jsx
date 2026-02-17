import './CardProject.css'
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarGroup, Button, Typography } from "@mui/material";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

function CardProject({ projectId, project }) {
  const navigate = useNavigate();
  
  function handleClick() {
    navigate(`/projects/${projectId}`);
  }
  return (
    <div className='volunteer-card-project'>
      <img 
        className='image-volunteer-card-project' 
        alt='مشروع'
        src="/images/5.jpg"
      />
      
        {/* الحالة والتاريخ */}
        <div className="volunteer-card-header">
          {/* Time */}
          <div className="date-info">
            <CalendarMonthOutlinedIcon sx={{ fontSize: '20px' }} />
            <Typography variant='h6'>2025 / 8 / 18</Typography>
          </div>
          {/* status */}
          <button disabled className={`status-badge ${project.full ? 'full' : 'not-full'} `}>
            <div className='status-badge-text'>{project.full ? "ممتلئ" : "لم يكمتل العدد"}</div>
          </button>
        </div>

      <div className="volunteer-card-content">
        {/* العنوان والتفاصيل */}
        <div className="volunteer-card-body">
          <Typography className="project-title" variant='h1'>
            {project.title}
          </Typography>
          <Typography className="project-detail" variant='h6'>
            {project.ditail}
          </Typography>
        </div>

        {/* المتطوعين والزر */}
        <div className="volunteer-card-footer">
          <div className="volunteers-section">
            <AvatarGroup total={project.number}>
              <Avatar alt="متطوع 1" src='/images/logo/1.jpg' />
              <Avatar alt="متطوع 2" src='/images/logo/2.jpg' />
              <Avatar alt="متطوع 3" src='/images/logo/3.jpg' />
            </AvatarGroup>
            <h4 className="volunteers-text">
              {project.number}
               متطوع حالي بالمشروع
            </h4>
          </div>
          
          <Button 
            variant='contained' 
            className="project-button"
            onClick={handleClick}
          >
            <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 'small' }} />
            عرض المشروع
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CardProject;