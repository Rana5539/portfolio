import { Box, Typography } from '@mui/material'
import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const img = require('./images/icons8-fiverr-48.png')
function Fiverr() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  return (
    <><div data-aos='fade-up'>
    <Box sx={{width:'60%', 
    height:'auto', 
    border:'1px dashed #63C5DA', 
    borderRadius:'15px',
    bgcolor:'rgb(0, 3, 20)',
    boxShadow: `0 4px 8px rgba(0, 123, 255, 0.3)`,
    m:'auto',
    pb:1,
    mt:5,
    '@media screen and (max-width: 1000px)': {
 width:'80%',
          },}}>
   <Box sx={{width:'95%', m:'auto',mt:1.5, display:'flex'}}>
        <img src={img} width={'60vh'}></img>
        <Box sx={{ml:1}}>
            <Typography sx={{color:'white', fontFamily:'Poppins', fontWeight:'300'}}>Freelancer</Typography>
            <Typography sx={{color: 'grey', fontSize:'15px', fontFamily:'Inria Sans', lineHeight:1}}>Fiverr</Typography>
            <Typography sx={{color: 'grey', fontSize:'13px', fontFamily:'Inria Sans'}}>July 2022 - Present</Typography>
            
        </Box>
        
   </Box>
   <Typography sx={{color:'white', fontFamily:'Poppins', fontWeight:'200', ml:3, mt:2 }}> Working as a Frontend Developer on fiverr from 2 years.</Typography>
   <Typography sx={{color:'white', fontFamily:'Poppins', fontWeight:'200', ml:3, mt:2, display:'flex'}}>Skills  <Typography sx={{ml:1, fontFamily:'Inria Sans', fontWeight:'200', color:'grey'}}>Coreldraw , Photoshop , JavaScript , ReactJs , Material UI</Typography></Typography>
    </Box></div>
    </>
  )
}

export default Fiverr