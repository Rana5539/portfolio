import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';

function Contact() {
    const facebookProfileUrl = 'https://www.facebook.com/profile.php?id=100076756789132'
    const instaUrl = 'https://www.instagram.com/commercer_/'
    const LinkedUrl = 'https://www.linkedin.com/in/waqar-akram-396b36208/'
    const handleFacebookClick = () => {
        window.open(facebookProfileUrl, '_blank');
      };
    
      const handleInstagramClick = () => {
        window.open(instaUrl, '_blank');
      };

      const handleLinkedinClick = () => {
        window.open(LinkedUrl, '_blank');
      };
      
  return (
    <>
    <Box sx={{
        width:'100%', 
        pt:3,
        pb:2, 
        height:'auto', 
        bgcolor:'black', 
        alignItems:'center',
        display:'flex',
        mt:5,
        borderTop:'1px solid #63C5DA',
        boxShadow: `0 4px 8px rgba(0, 123, 255, 0.3)`,}}>
        <Box sx={{m:'auto', textAlign:"center"}}>
            <Typography sx={{
                color:'#63C5DA', 
                fontFamily:'Poppins', 
                fontSize:'18px', 
                fontWeight:'300'}} id='contact'>Waqar Akram</Typography>

<Box sx={{justifyContent:'space-between', mt:1}}>
<Link
      component="button"
      underline="none"
      sx={{ color: 'white', cursor: 'pointer' }}
      onClick={handleFacebookClick}
    >
      <FacebookRoundedIcon />
    </Link>
    <Link
      component="button"
      underline="none"
      sx={{ color: 'white', cursor: 'pointer',ml:2 }}
      onClick={handleInstagramClick}
    >
      <InstagramIcon />
    </Link>
    <Link
      component="button"
      underline="none"
      sx={{ color: 'white', cursor: 'pointer',ml:2 }}
      onClick={handleLinkedinClick}
    >
      <LinkedInIcon />
    </Link>
</Box>
<Box sx={{m:'auto',mt:1}}>
<Typography sx={{ color:'grey', fontFamily:'Poppins', fontSize:'14px'}}>
    <CopyrightRoundedIcon sx={{color:'grey', fontSize:'14px'}}/>
    2023 Waqar Akram. All rights reserved
</Typography>
</Box>
        </Box>
    </Box>
    </>
  )
}

export default Contact