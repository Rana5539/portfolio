import { Box, Typography } from '@mui/material'
import React from 'react'
const img = require('./images/icons8-fiverr-48.png')
function Fiverr() {
  return (
    <>
    <Box sx={{width:'60%', 
    height:'auto', 
    border:'1px solid #63C5DA', 
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
   <Typography sx={{color:'white', fontFamily:'Poppins', fontWeight:'200', ml:3, mt:2 }}>Worked on graphic designing now working as a Frontend Developer on fiverr.</Typography>
   <Typography sx={{color:'white', fontFamily:'Poppins', fontWeight:'200', ml:3, mt:2, display:'flex'}}>Skills  <Typography sx={{ml:1, fontFamily:'Inria Sans', fontWeight:'200', color:'grey'}}>Coreldraw , Photoshop , JavaScript , ReactJs , Material UI</Typography></Typography>
    </Box>
    </>
  )
}

export default Fiverr