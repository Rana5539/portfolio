import { Box, Typography } from '@mui/material'
import React from 'react'
const img = require('./images/logo.png')
function Ics() {
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
            <Typography sx={{color:'white', fontFamily:'Poppins', fontWeight:'300'}}>Inter-ICS</Typography>
            <Typography sx={{color: 'grey', fontSize:'15px', fontFamily:'Inria Sans', lineHeight:1}}>Garisson college Lahore</Typography>
            <Typography sx={{color: 'grey', fontSize:'13px', fontFamily:'Inria Sans'}}>2017 - 2019</Typography>
            
        </Box>
        
   </Box>
   <Typography sx={{color:'white', fontFamily:'Poppins', fontWeight:'200', ml:3, mt:2, display:'flex'}}>Grade  <Typography sx={{ml:1, fontFamily:'Inria Sans', fontWeight:'200', color:'grey'}}>58%</Typography></Typography>
   <Typography sx={{color:'white', fontFamily:'Poppins', fontWeight:'200', ml:3, mt:2 }}>I have completed my intermediate in computer sciences from lahore garisson college</Typography>
   
    </Box>
    </>
  )
}

export default Ics