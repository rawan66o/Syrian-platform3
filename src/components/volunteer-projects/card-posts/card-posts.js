import { useNavigate } from 'react-router';
import '../CardProject/CardProject.css'
// import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlinedIcon';

function CardPosts({  project }) {
    const navigate = useNavigate();

    function handleClick() {
    navigate(`/forum/${ project.id }`);
  }

    return(
        <div className='volunteer-card-project'>
            <img className='image-volunteer-card-project' src="/images/5.jpg" alt=''/>
            {/* DATE SECTION */}
            <div className="volunteer-card-header">
              {/* Time */}
              <div className="date-info">
                <img src='/icons/chalender/calendar.svg' alt='' />
                <h6>{project.startDate}</h6>
              </div>
              {/* COUNTE COMMENT */}
              <p>+100 تعليق</p>

            </div>

                {/* TITLE && DISCRIPTION && AUTH SECTION */}
            <div className="volunteer-card-content">
                {/* TITLE SECTION */}
                <h1>{project.title}</h1>

                {/* DISCRIPTION SECTION */}
                <p>{project.shortDes}</p>

                {/* AUTH SECTION */}
                <div className='teach-o'>
                    <img src="/images/logo/2.jpg" alt=''/>
                    <div>
                        <h5>محمد الشيخ</h5>
                        <h6>24 دورة</h6>
                    </div>
                </div>

                {/* BUTTON SECTION */}
                <button className='btn-c' onClick={handleClick}>
                    <img src='/icons/arrows/small_right_arrow.svg' alt='' style={{ fontSize: 'small' }} />
                    عرض المنشور
                </button>
            </div>

            
        </div>
    )
}

export default CardPosts