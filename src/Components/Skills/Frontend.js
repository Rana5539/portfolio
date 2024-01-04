import { Box, Typography } from '@mui/material'
import React from 'react'
const data = [{text:'React js', src:require('./images/physics.png')},
               {text:'CSS', src: require('./images/css-3.png')},
               {text:'HTML', src:require('./images/html-5.png')}
            ]  
            const data1 = [{text:'Bootstrap', src:require('./images/bootstrap.png')},
               {text:'Tailwind', src: require('./images/icons8-tailwind-css-32.png')},
               
            ] 
            const data2 = [{text:'Javascript', src:require('./images/java-script.png')},
            {text:'Material UI', src: require('./images/icons8-material-ui-48.png')},
            
         ]  
         const img = require('./images/icons8-chakra-ui-48.png')        
function Frontend() {
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
    '@media screen and (max-width: 500px)': {
 width:'40vh',
          },}}>
<Typography sx={{
color:'white',
fontSize:'18px',
mt:1,
fontFamily:'Poppins',
fontWeight:'300'}}>Frontend</Typography>
<Box sx={{
    display:'flex',
    mx:'auto',
    mt:1, 
    width:'90%', 
    justifyContent:'space-between'}}>
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
    <img src={a.src} style={{width:'3vh',marginRight:1}} alt=''></img>
  {a.text}
</Box>
    ))}   
</Box>
<Box  sx={{
    display:'flex',
    mx:'auto',
    mt:2, 
    width:'90%', 
    justifyContent:'space-evenly'}}>
        {data2.map((a)=>(
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
    <img src={a.src} style={{width:'3vh',marginRight:1}} alt=''></img>
  {a.text}
</Box>
    ))}   
    </Box>
    <Box sx={{
    display:'flex',
    mx:'auto',
    mt:2, 
    width:'90%', 
    justifyContent:'space-evenly'}}>
{data1.map((a)=>(
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
    <img src={a.src} style={{width:'3vh',marginRight:1}} alt=''></img>
  {a.text}
</Box>
    ))}   
</Box>
<Box
  sx={{
    width:'16vh',
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
    <img src={img} style={{width:'3vh',marginRight:1}} alt='' ></img>
  Chakra UI
</Box>
</Box>
    </>
  )
}

export default Frontend