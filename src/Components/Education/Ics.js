import { Box, Typography } from '@mui/material'
import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const img = require('./images/logo.png')
function Ics() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  return (
    <><div data-aos='zoom-in'>
    <Box sx={{width:'30%', 
    height:'auto',  
    borderRadius:'15px',
    bgcolor:'rgb(0, 3, 20)',
    boxShadow: `0 4px 8px rgba(0, 123, 255, 0.3)`,
    m:'auto',
    pb:1,
    mt:5,
    pt:0.4,
    '@media screen and (max-width: 1000px)': {
 width:'80%',
          },}}>
           <Box style={{ textAlign: 'center' }}>
      <img src={img} width={'60vh'} style={{ margin: 'auto', display: 'block', marginTop:4}} alt="You" />
    </Box>
  
        
       
            <Typography sx={{color:'white', fontFamily:'Poppins', fontWeight:'300', textAlign:'center',mt:1}}>Inter-ICS</Typography>
            <Typography sx={{color: 'grey', fontSize:'15px', fontFamily:'Inria Sans', lineHeight:1, textAlign:'center'}}>Garisson College Lahore</Typography>
            <Typography sx={{color: 'grey', fontSize:'13px', fontFamily:'Inria Sans', textAlign:'center'}}>2017 - 2019</Typography>
     <Typography sx={{ fontFamily:'Inria Sans', fontWeight:'200', color:'grey', textAlign:'center'}}>Marks 58%</Typography>
   <Typography sx={{color:'white', fontFamily:'Poppins', fontWeight:'200',mt:2 , textAlign:'center',pl:1.1,pr:1.1}}>I have completed my intermediate in computer sciences from lahore garisson college</Typography>
   
    </Box></div>
    </>
  )
}

export default Ics