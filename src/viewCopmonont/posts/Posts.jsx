import './Posts.css'
import { useEffect, useState } from 'react';
import { volunteers } from '../Data';
import { useComments, useProjects } from '../../context/volunteer-projects-context'; 

import appTheme from '../../appTeme';
import { ThemeProvider } from '@mui/material/styles';
import Comment from '../../components/volunteer-projects/Comment';
import Volunteer from '../../components/volunteer-projects/Volunteer';
import LatestProjects from "../../components/volunteer-projects/latest-projects/LatestProjects";

// IMPORTS MUI
import { Box, Container, Grid, Typography } from '@mui/material';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useNavigate, useParams } from 'react-router';

function Posts() {
  const { projectId: id } = useParams();
  const navigate = useNavigate();
  const { state } = useProjects();
  const { commentsState, commentsDispatch } = useComments();
  
  const [commentInput, setCommentInput] = useState('');
  const [replyToId, setReplyToId] = useState(null);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // حالة التحكم
  const [showAll, setShowAll] = useState(false);
  const MAX_ROWS = 2;
  const ITEMS_PER_ROW = 3;
  const MAX_ITEMS = MAX_ROWS * ITEMS_PER_ROW;
  
  // تحميل المشروع
  useEffect(() => {
    const loadProject = async () => {
      try {
        setLoading(true);
        setError(null);

        let foundProject = null;

        // البحث في state.projects أولاً
        if (state.projects && state.projects.length > 0) {
          foundProject = state.projects.find(p => 
            p && p.id && String(p.id) === String(id)
          );
        }

        // إذا لم يجده في state، ابحث في localStorage
        if (!foundProject) {
          const saved = localStorage.getItem('volunteer-projects');
          if (saved) {
            const projects = JSON.parse(saved);
            foundProject = projects.find(p => 
              p && p.id && String(p.id) === String(id)
            );
          }
        }

        if (foundProject) {
          setProject(foundProject);
          localStorage.setItem(`project_${id}`, JSON.stringify(foundProject));
        } else {
          setError('المشروع غير موجود');
        }

      } catch (error) {
        console.error('خطأ:', error);
        setError('حدث خطأ في تحميل المشروع');
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [id, state.projects]); 

  // دالة لتنسيق التاريخ بالعربي
  const formatArabicDate = (dateString, formatType = 'full') => {
    if (!dateString) return 'غير محدد';

    try {
      const date = new Date(dateString);

      // أيام الأسبوع بالعربي
      const days = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];

      // الأشهر بالعربي
      const months = [
        'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
        'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
      ];

      const dayName = days[date.getDay()];
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();

      if (formatType === 'day-only') {
        return dayName; // "الثلاثاء"
      }

      if (formatType === 'date-only') {
        return `${day} ${month} ${year}`; // "18 مارس 2024"
      }

      if (formatType === 'short') {
        return `${dayName}، ${day}/${date.getMonth() + 1}/${year}`; // "الثلاثاء، 18/3/2024"
      }

      // full format
      return `${dayName}، ${day} ${month} ${year}`; // "الثلاثاء، 18 مارس 2024"

    } catch (error) {
      console.error('Error formatting date:', error);
      return dateString;
    }
  };
  
  function handleProjectApplicationTo() {
    if (!project) {
      alert("المشروع غير محمل بعد. الرجاء الانتظار...");
      return;
    }
    navigate(`/project-application/${project.id}`, {
      // state: {
      //   project: project,          // بيانات المشروع كاملة
      //   userId: user.id,           // ID المستخدم
      //   userName: user.name,       // اسم المستخدم
      //   userEmail: user.email      // إيميل المستخدم
      // }
    }); 
  }

  function handleAddComment(e) {
    e.preventDefault();
    
    if (!commentInput.trim()) {
      alert('الرجاء كتابة تعليق');
      return;
    }

    commentsDispatch({ 
      type: 'ADD_COMMENT', 
      payload: {
        projectId: id,
        comment: {
          content: commentInput,
          author: "مستخدم",
          parentId: replyToId
        }
      }
    });
    setCommentInput('');
    setReplyToId(null);
  }

  const handleReplyToComment = (commentId) => {
    setReplyToId(commentId);
    setCommentInput(''); // تفريغ الحقل للبدء بالرد
  };

  // جلب تعليقات هذا المشروع
  const projectComments = commentsState?.commentsByProject?.[id] || [];


  // حالة التحميل
  if (loading) {
    return (
      <ThemeProvider theme={appTheme}>
        <Container maxWidth="lg">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '50vh' 
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              border: '5px solid #f3f3f3',
              borderTop: '5px solid #6DCDE5',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
          </div>
        </Container>
      </ThemeProvider>
    );
  }

  // حالة الخطأ
  if (error || !project) {
    return (
      <ThemeProvider theme={appTheme}>
        <Container maxWidth="lg">
          <div style={{ textAlign: 'center', padding: '100px 0' }}>
            <Typography variant="h5" color="error">
              {error || 'المشروع غير موجود'}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
              المشروع بالرقم {id} غير موجود.
            </Typography>
            <button 
              onClick={() => navigate('/volunteer-projects')}
              style={{
                padding: '12px 24px',
                background: '#6DCDE5',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              العودة إلى المشاريع
            </button>
          </div>
        </Container>
      </ThemeProvider>
    );
  }

  // استخدام بيانات المشروع الفعلية
  const displayedVolunteers = showAll 
    ? volunteers 
    : volunteers.slice(0, MAX_ITEMS);
  
  const hiddenCount = volunteers.length - displayedVolunteers.length;

  return(
    <ThemeProvider theme={appTheme}>
      <Container maxWidth="lg">
        <div className="layout-l">
          <div className="layout-post">
            {/* TITLE SECTION */}
            <div className='layout-title'>
              <ArrowForwardOutlinedIcon fontSize='medium'/>
              <div className='title-text'>{project.title}</div>
            </div>
            
            {/* HEADER SECTION */}
            <div style={{
              gap:'20px', 
              display:'flex', 
              flexDirection:'column',
              borderBottom: '1px solid #D9E4E5',
              paddingBottom:'24px'
            }}>
              <div className="post-header">
                <div className={`status-badge ${project.isFull ? 'full' : 'not-full'}`}>
                  <div className='status-badge-text'>
                    {project.isFull ? "ممتلئ" : "لم يكتمل العدد"}
                  </div>
                </div>
                <button className='button-shere'>
                  مشاركة 
                  <img 
                    src='/images/icons/shere.png' 
                    alt='مشاركة' 
                    style={{width:'13px', height:'16px'}} 
                  />
                </button>
              </div>
              <button 
                type='button' 
                onClick={handleProjectApplicationTo}
                style={{ width:'372px', height:'52px',fontSize:'18px' }}
                disabled={project.isFull}
              >
                {project.isFull ? 'المشروع ممتلئ' : 'طلب الدخول كمتطوع'}
              </button>
            </div>
            
            {/* صورة المشروع */}
            <img 
              src={ '/images/5.jpg'} 
              alt={project.title}
              style={{width:'100%', height:'441.57px', objectFit: 'cover'}} 
            />
            
            {/* START TIME SECTION */}
            <div style={{
              display:'flex',
              alignItems:'center',
              justifyContent:'space-between',
              marginTop: '24px'
            }}>
              <div className='card-time'>
                <p>موعد البدأ</p>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', gap:'5px'}}>
                  <h6>
                    {formatArabicDate(project.startDate, 'day-only')}
                  </h6>
                  <div className="date-info">
                    <img src='/images/icons/dashboard/calendar.svg' alt='تقويم' />
                    <h6>
                      {formatArabicDate(project.startDate, 'date-only')}
                    </h6>
                  </div> 
                </div>       
              </div>
              
              {/* الجهة المنفذة */}
              <div style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                gap:'12px'
              }}>
                <Typography variant='h2' fontSize='16px'>الجهة المنفذة:</Typography>
                <div style={{
                  display:'flex', 
                  justifyContent:'space-around',
                  alignItems:'center',
                  gap:'12px'
                }}>
                  <img 
                    src={ '/images/icons/icon2.png'} 
                    alt='الجهة المنفذة'
                    style={{width:'147px',height:'28px', objectFit: 'contain'}} 
                  />
                  <img 
                    src='/images/icons/icon.png' 
                    alt='شعار'
                    style={{width:'56px',height:'42px'}} 
                  />
                </div>
              </div>
            </div>
            
            <div className='divider'/>
            
            {/* وصف المشروع */}
            <Typography variant='h2' fontSize='20px'>وصف المشروع:</Typography>  
            <Typography variant='body1' fontSize='16px' color='#708387'>
              {project.fullDescription || project.description || 'لا يوجد وصف للمشروع'}
            </Typography>  
            <div className='divider'/>
            
            {/* المتطوعين */}
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
              <div style={{display:'flex', alignItems:'center'}}>
                <Typography variant='h4' sx={{ color: '#072127', fontSize: '16px' }}>
                  المتطوعين الحاليين:
                </Typography>
                <Typography variant='h4' sx={{ color: '#708387', fontSize: '16px' }}>
                  ({project.currentVolunteers || 0} متطوع)
                </Typography>
              </div>
              <div className='number-of-vol'>
                العدد المطلوب: {project.volunteersNeeded || project.volunteers}
              </div>
            </div>
            
            <div>
              <Grid
                container
                spacing={2.5}
                sx={{ width: "100%", justifyContent: "center" }}>
                {displayedVolunteers.map((vol) => (
                  <Grid item xs={12} md={4} sm={6} key={vol.id}
                    sx={{ display:'flex', justifyContent:'center', padding:'8px'}}
                  >
                    <Volunteer {...vol} />
                  </Grid>
                ))}
              </Grid>
              
              {!showAll && hiddenCount > 0 && (
                <Box sx={{ textAlign: 'center', mt: 3 }}>
                  <button  
                    className='button-hidden'
                    onClick={() => setShowAll(true)}
                  >
                    عرض {hiddenCount} متطوع إضافي
                  </button>
                </Box>
              )}
              
              {showAll && (
                <Box sx={{ textAlign: 'center', mt: 3 }}>
                  <button className='button-hidden'
                    onClick={() => setShowAll(false)}
                  >
                    إخفاء المتطوعين الإضافيين
                  </button>
                </Box>
              )}
            </div> 
            
            <div className='divider'/>
            
            {/* COMMENTS SECTION */}
            <div style={{display:'flex',alignItems:'center', gap:'6px'}}>
              <Typography variant='h4' sx={{ color: '#072127', fontSize: '16px' }}>
                التعليقات : 
              </Typography>
              <Typography variant='h4' sx={{ color: '#708387', fontSize: '16px' }}>
                ({projectComments.length} تعليق)
              </Typography>
            </div>
            
            <div style={{ gap:'16px' }}>
              {projectComments.map((comment) => (
                <Comment 
                  key={comment.id} 
                  {...comment} 
                  onReply={() => handleReplyToComment(comment.id)}
                />
              ))}
            </div>
            
            <div className='divider'/>
            
            {/* إضافة تعليق */}
            <form onSubmit={handleAddComment}>
              <div className='comment-publish'>
                <input 
                  placeholder='أضف تعليق هنا' 
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  required
                />
                <button type="submit" style={{ width:'111px', height:'52px',fontSize:'18px' }}>
                  نشر
                </button>
              </div>
            </form>
          </div>
          
          <div style={{ width:'25%'}}>
            <LatestProjects />
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
}

// CSS للـ spinner
const spinnerStyles = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

// إضافة الـ styles إذا لم تكن موجودة
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = spinnerStyles;
  document.head.appendChild(style);
}

export default Posts;