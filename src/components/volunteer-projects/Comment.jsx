import { Avatar, Typography, Box, Button, Collapse } from "@mui/material";
import { useState } from 'react';

function ReplyItem({ reply }) {
  return (
    <Box sx={{ 
      display: 'flex', 
      gap: '12px',
      marginTop: '16px',
      padding: '16px',
      marginRight: '20px'
    }}>
      {/* صورة الرد */}
      <Avatar 
        src={reply.avatar} 
        sx={{ width: 32, height: 32 }}
      />
      
      {/* محتوى الرد */}
      <Box sx={{ flex: 1 }}>
        {/* معلومات المستخدم */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Typography sx={{ 
            fontSize: '14px', 
            fontWeight: 600, 
            color: '#072127' 
          }}>
            {reply.name}
          </Typography>
          <Typography sx={{ 
            fontSize: '12px', 
            color: '#708387' 
          }}>
            {reply.timeAgo}
          </Typography>
        </Box>
        
        {/* نص الرد */}
        <Typography sx={{ 
          fontSize: '14px',
          color: '#072127',
          lineHeight: 1.6
        }}>
          {reply.content}
        </Typography>
      </Box>
    </Box>
  );
}

function CommentItem({ avatar, name, status, comment, date, timeAgo, replies = [] }) {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: { xs: '12px', md: '16px' },
      padding: { xs: '16px 0', md: '20px 0' }
    }}>
      {/* Header Section */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'flex-start',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        gap: { xs: '12px', sm: 0 }
      }}>
        {/* User Info */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px',
          order: { xs: 1, sm: 1 }
        }}>
          <Avatar 
            src={avatar} 
            sx={{ 
              width: { xs: 40, sm: 48 }, 
              height: { xs: 40, sm: 48 } 
            }}
          />
          <Box>
            <Typography 
              variant="h6"
              sx={{ 
                fontSize: { xs: '14px', sm: '16px' }, 
                color: '#0A1826',
                fontWeight: 600,
                marginBottom: '2px'
              }}
            >
              {name}
            </Typography>
            <Typography 
              variant="body2"
              sx={{ 
                fontSize: { xs: '11px', sm: '12px' }, 
                color: '#4A5568',
                fontWeight: 400
              }}
            >
              {status}
            </Typography>
          </Box>
        </Box>
        
        {/* Time Info */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          order: { xs: 2, sm: 2 }
        }}>
          <Typography 
            variant="body2"
            sx={{ 
              color: '#0A1826',
              fontSize: { xs: '12px', sm: '14px' },
              fontFamily: 'Tajawal', 
              fontWeight: 500
            }}
          >
            {date}
          </Typography>
          <Typography 
            variant="body2"
            sx={{ 
              fontSize: { xs: '12px', sm: '14px' },
              color: '#708387',
              fontFamily: 'Tajawal', 
              fontWeight: 500
            }}
          >
            {timeAgo}
          </Typography>
        </Box>
      </Box>

      {/* Comment Content */}
      <Typography 
        variant="body1"
        sx={{ 
          fontFamily: 'Tajawal', 
          fontWeight: 500,
          fontSize: { xs: '13px', sm: '14px' },
          color: '#072127',
          lineHeight: 1.8,
          textAlign: 'right',
          padding: { xs: '8px 0', sm: '12px 0' }
        }}
      >
        {comment}
      </Typography>

      {/* عرض الردود */}
      {replies.length > 0 && (
        <Box>
          <Button 
            onClick={() => setShowReplies(!showReplies)}
            sx={{ 
              fontSize: '12px', 
              color: '#708387',
              fontWeight: 500,
              padding: '4px 8px',
              minWidth: 'auto'
            }}
          >
            {showReplies ? 'إخفاء الردود' : `عرض ${replies.length} ردود`}
          </Button>
          
          <Collapse in={showReplies}>
            <Box sx={{ marginTop: '8px' }}>
              {replies.map((reply, index) => (
                <ReplyItem key={index} reply={reply} />
              ))}
            </Box>
          </Collapse>
        </Box>
      )}
    </Box>
  );
}

function Comment() {
  // بيانات نموذجية للتعليق والردود
  const commentData = {
    avatar: "/images/logo/2.jpg",
    name: "خليل أحمد",
    status: "طالب",
    comment: "منصة رائعة، سهلت علي متابعة الدروس والوصول للمحتوى. التجربة التعليمية فيها حديثة وممتعة، فعلاً خطوة كبيرة نحو تعليم أفضل في سوريا.",
    date: "24 أيار 2025",
    timeAgo: "(منذ يومين)",
    replies: [
      {
        avatar: "/images/logo/3.jpg",
        name: "فاطمة علي",
        content: "أوافقك الرأي! الخدمة رائعة حقاً والمحتوى منظم بشكل جيد. خاصة قسم الفيديوهات التفاعلية.",
        timeAgo: "منذ ساعة"
    },
    {
        avatar: "/images/logo/4.jpg",
        name: "أحمد محمد",
        content: "شكراً على المشاركة، هل يمكنك مشاركة تجربتك مع الدروس التفاعلية؟ أنا مهتمة بالانضمام.",
        timeAgo: "منذ ٣٠ دقيقة"
      },
      {
        avatar: "/images/logo/5.jpg",
        name: "يوسف إبراهيم",
        content: "أستخدم المنصة منذ شهر والنتائج ممتازة. أنصح الجميع بتجربتها.",
        timeAgo: "منذ ١٥ دقيقة"
      }
    ]
  };

  return (
    <div className="comment">
      <CommentItem 
        avatar={commentData.avatar}
        name={commentData.name}
        status={commentData.status}
        comment={commentData.comment}
        date={commentData.date}
        timeAgo={commentData.timeAgo}
        replies={commentData.replies}
      />
    </div>
  );
}

export default Comment;