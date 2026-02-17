import { Avatar, Typography } from "@mui/material"

function Volunteer({image,name,isVolunteer}) {
  return(
    <div className='volunteer'>
      <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
        <Avatar src={image} alt=''/>
        <div>
          <Typography variant='h6' fontSize='16px' color='#0A1826' >{name}</Typography>
          <Typography variant='body1' fontSize='12px' color='#708387' >{isVolunteer ? '' : ''}</Typography>
        </div>
      </div>
    </div>
  )
}

export default Volunteer