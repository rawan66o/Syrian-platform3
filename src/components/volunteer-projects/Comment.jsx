import { Avatar, Typography, Box, Button, Collapse } from "@mui/material";
import { useState } from 'react';

function Comment({ 
  id,
  author = "مستخدم",
  content,
  timestamp,
  replies = [],
  onReply 
}) {
  const [showReplies, setShowReplies] = useState(false);
  
  // تنسيق التاريخ
  const formatDate = (dateString) => {
    if (!dateString) return "اليوم";
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  // تنسيق الوقت النسبي
  const formatTimeAgo = (dateString) => {
    if (!dateString) return "الآن";
    const now = new Date();
    const commentDate = new Date(dateString);
    const diffInMinutes = Math.floor((now - commentDate) / (1000 * 60));
    
    if (diffInMinutes < 1) return "الآن";
    if (diffInMinutes < 60) return `منذ ${diffInMinutes} دقيقة`;
    if (diffInMinutes < 1440) return `منذ ${Math.floor(diffInMinutes / 60)} ساعة`;
    return `منذ ${Math.floor(diffInMinutes / 1440)} يوم`;
  };

  // مكون الرد الواحد
  const ReplyItem = ({ reply }) => (
    <Box sx={{ 
      display: 'flex', 
      gap: '12px',
      marginTop: '12px',
      padding: '12px',
      marginRight: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px'
    }}>
      <Avatar 
        src="/images/default-avatar.png" 
        sx={{ width: 32, height: 32 }}
      />
      <Box sx={{ flex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#072127' }}>
            {reply.author || "مستخدم"}
          </Typography>
          <Typography sx={{ fontSize: '12px', color: '#708387' }}>
            {formatTimeAgo(reply.timestamp)}
          </Typography>
        </Box>
        <Typography sx={{ fontSize: '14px', color: '#072127' }}>
          {reply.content}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ 
      padding: '20px 0',
      borderBottom: '1px solid #eee'
    }}>
      {/* رأس التعليق */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", gap: '12px', marginBottom: '12px' }}>
        <Avatar src="/images/default-avatar.png" sx={{ width: 40, height: 40 }} />
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#0A1826' }}>
            {author}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Typography sx={{ fontSize: '12px', color: '#4A5568' }}>
              {formatDate(timestamp)}
            </Typography>
            <Typography sx={{ fontSize: '12px', color: '#708387' }}>
              {formatTimeAgo(timestamp)}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* نص التعليق */}
      <Typography sx={{ 
        fontSize: '14px', 
        color: '#072127', 
        lineHeight: 1.6,
        marginBottom: '12px'
      }}>
        {content}
      </Typography>

      {/* أزرار الإجراءات */}
      <Box sx={{ display: 'flex', gap: '16px', justifyContent:"space-between", alignItems:"center" }}>
        
        {replies.length > 0 ?(
          <Button 
            onClick={() => setShowReplies(!showReplies)}
            sx={{ 
              fontSize: '12px', 
              color: '#708387'
            }}
          >
            {showReplies ? 'إخفاء الردود' : `عرض ${replies.length} رد`}
          </Button>
        ) :  (<Typography sx={{ 
        fontSize: '14px', 
        color: '#708387', 
        lineHeight: 1.6,
        marginBottom: '12px'
      }}>
        لا يوجد تعليقات بعد
      </Typography>)}

        <Button 
          onClick={() => onReply && onReply(id)}
          sx={{ 
            fontSize: '12px', 
            color: '#6DCDE5',
            padding: '4px 12px',
            border: '0px',
            backgroundColor: 'white'
          }}
        >
          رد على التعليق
        </Button>
      </Box>

      {/* عرض الردود */}
      {replies.length > 0 && (
        <Collapse in={showReplies}>
          <Box sx={{ marginTop: '12px' }}>
            {replies.map((reply, index) => (
              <ReplyItem key={index} reply={reply} />
            ))}
          </Box>
        </Collapse>
      )}
    </Box>
  );
}

export default Comment;