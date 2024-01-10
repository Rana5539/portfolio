import { Box, Typography } from '@mui/material'
import React from 'react'
const data = [
    {text:'Github', src: require('./images/icons8-github-48.png')},
    {text:'Vs code', src: require('./images/icons8-vs-code-48.png')}
]
const img = require('./images/icons8-git-48.png')

function Other() {
  return (
    <>
    <Box sx={{
    width:'50vh', 
    height:'30vh', 
    bgcolor:'rgb(0, 3, 20)',
    border:'1px dashed #63C5DA', 
    boxShadow: `0 4px 8px rgba(0, 123, 255, 0.3)`,
    borderRadius:'15px',
    textAlign:'center',
    m:'auto',
    mt:5,
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
fontWeight:'300'}}>Others</Typography>
    <Box sx={{
    display:'flex',
    mx:'auto',
    mt:2, 
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
    width:'10vh',
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
  id='skillsSection'
>
<img src={img} style={{ width: '3vh', marginRight: 1 }}  alt="Skills"  />
  Git
</Box>
          </Box>
    </>
  )
}

export default Other