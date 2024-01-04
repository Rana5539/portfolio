import { Box, Typography } from '@mui/material'
import React from 'react'
const data = [{text:'Adobe XD', src:require('./images/icons8-adobe-xd-48.png')},
               {text:'CorelDraw', src: require('./images/icons8-corel-draw-67.png')},
               
            ] 
            const img = require('./images/icons8-figma-48.png')
function Ui() {
  return (
    <>
    <Box sx={{
    width:'50vh', 
    height:'40vh', 
    bgcolor:'rgb(0, 3, 20)',
    border:'1px solid #63C5DA',
    boxShadow: `0 4px 8px rgba(0, 123, 255, 0.3)`, 
    borderRadius:'15px',
    textAlign:'center',
    '@media screen and (max-width: 1050px)':{
        mt:2,
    },
    '@media screen and (max-width: 500px)': {
 width:'40vh',
          },}}>
            <Typography sx={{
color:'white',
fontSize:'18px',
mt:1,
fontFamily:'Poppins',
fontWeight:'300'}}>UI/UX</Typography>
<Box sx={{
    display:'flex',
    mx:'auto',
    mt:1, 
    width:'90%', 
    justifyContent:'space-evenly'}}>
    {data.map((a)=>(
        <Box
  sx={{
    pl:1,pr:1,
    height: '5vh',
    border: '1px solid #63C5DA',
    borderRadius: '10px',
    color: '#BEBEBE',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily:'Poppins',
    fontWeight:'300'
  }}
>
    <img src={a.src} style={{width:'3vh',marginRight:1}} alt='img'></img>
  {a.text}
</Box>
    ))}   
</Box>
<Box
  sx={{
    width:'13vh',
    pl:1,pr:1,
    height: '5vh',
    border: '1px solid #63C5DA',
    borderRadius: '10px',
    color: '#BEBEBE',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily:'Poppins',
    fontWeight:'300',
    mt:1,
    mx:'auto'
  }}
>
<img src={img} style={{ width: '3vh', marginRight: 1 }}  alt="Skills" />
  Figma
</Box>
          </Box>
    </>
  )
}

export default Ui