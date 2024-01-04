import { Box, Typography } from '@mui/material'
import React from 'react'
const img = require('./images/Untitled-1.png')
function BSCS() {
  return (
    <>
    <Box sx={{width:'60%', 
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
   <Box sx={{width:'95%', m:'auto',mt:1.5, display:'flex'}}>
        <img src={img} width={'60vh'}></img>
        <Box sx={{ml:1}}>
            <Typography sx={{color:'white', fontFamily:'Poppins', fontWeight:'300'}}>Bachelor-BSCS</Typography>
            <Typography sx={{color: 'grey', fontSize:'15px', fontFamily:'Inria Sans', lineHeight:1}}>Garisson University Lahore</Typography>
            <Typography sx={{color: 'grey', fontSize:'13px', fontFamily:'Inria Sans'}}>2019 - 2023</Typography>
            
        </Box>
        
   </Box>
   <Typography sx={{color:'white', fontFamily:'Poppins', fontWeight:'200', ml:3, mt:2, display:'flex'}}>Grade  <Typography sx={{ml:1, fontFamily:'Inria Sans', fontWeight:'200', color:'grey'}}>CGPA 3.1</Typography></Typography>
   <Typography sx={{color:'white', fontFamily:'Poppins', fontWeight:'200', ml:3, mt:2 }}>I have recently done my bachelors in computer sciences from lahore garisson university</Typography>
   
    </Box>
    </>
  )
}

export default BSCS