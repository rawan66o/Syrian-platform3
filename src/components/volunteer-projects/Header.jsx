import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router";

function Header() {
  const menuItems=['الرئيسية','اخبار','مقالات','قصص نجاح','مقالات']
  const navigate = useNavigate(); // استدعاء الهوك

  const handleGo = () => {
    navigate('/add-project'); // التنقل إلى المسار المطلوب
  };
  
  return(
    <>
    <div style={{direction:'rtl', height:'209px',
       background: 'linear-gradient(101.6deg, #E9F0E8 0.88%, rgba(177, 211, 229, 0.66) 28.52%, rgba(210, 244, 234, 0.58) 51.4%, rgba(177, 211, 229, 0.6) 76.65%, #E9F0E8 100%)'}}>
      <div style={{height:'52px'}} />
      <Container maxWidth='lg'>
      <Box sx={{display:'flex', height:'100px',
        alignItems:'center',justifyContent:'space-between',paddingRight:'400px'}}>
        <Typography variant="h2" sx={{fontSize:'34px',lineHeight:'100%'}}>المشاريع التطوعية</Typography>
        <button color="#6DCDE5" onClick={handleGo} style={{width:'219px', height:'52px', display:'flex', alignItems:'center',justifyContent:'center',
          border:'0px', borderRadius:'150px',color:'#ffff', background:'#6DCDE5'}}>اضافة  مشروع<img src="/images/icons/add-square.png" alt="" /></button>
      </Box>
    </Container>
    <Box sx={{background:'#FFFFFF80',height:'57px',
      display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
      {menuItems.map((item) => (
        <Typography
          key={item}
          variant="body1"
          sx={{
            cursor: 'pointer',
            fontWeight: 500,
            '&:hover': {
              color: 'primary.main',
            },
            px: 1,
            py: 0.5
          }}
        >
          {item}
        </Typography>
      ))}
    </Box>
    </div>
    </>
  )
}

export default Header;