import { Box, Typography } from '@mui/material'
import React from 'react'
import Project2 from './Project2'
const img = require('./images/c.jpg')
const data = [{text:'React js'},
{text:'Material UI'},
{text:'JavaScript'}
]
function Portfo() {
  return (
    <>
    <Box sx={{
    display:"flex", 
    m:'auto', 
    justifyContent:'space-evenly',
    mt:5,
    '@media screen and (max-width: 650px)': {
      flexDirection:'column',
      alignItems:'center'
    },}}>
        <Box sx={{
            width:'45vh', 
            height:'60vh',  
            borderRadius:'15px', 
            bgcolor:'rgb(0, 3, 20)',
            boxShadow: `0 4px 8px rgba(0, 123, 255, 0.3)`,
            cursor:'pointer',
            transition: 'transform 0.3s ease-in-out',
          ':hover': {
            transform: 'translateY(-10px)'
           
          },}}
        ><Box sx={{
            width:"90%", 
            m:'auto', 
            height:'23vh', 
            mt:2, 
            borderRadius:'10px',
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}>

            </Box>
            <Box sx={{m:'auto', display:'flex', justifyContent:'space-evenly',mt:2}}>
              {data.map((a)=>(
                <Box sx={{ 
                  color:'#63C5DA',
                  fontWeight:'200',
                  fontFamily:'Poppins', 
                  fontSize:'14px',
                  boxShadow: `0 4px 8px rgba(0, 123, 255, 0.3)`,
                pl:0.8,
                pr:0.8,
                pt:0.5,
                pb:0.5,
              borderRadius:'10px'}}>{a.text}</Box>
              ))}
            </Box>
            <Typography sx={{
              color:'white', 
            fontFamily:'Poppins', 
            fontWeight:'300', 
            mt:2,ml:2, 
            fontSize:'18px'}}>Portfolio</Typography>
            <Typography sx={{
              color:'grey', 
              fontFamily:'Inria Sans',
              ml:2, 
              fontSize:'13px'}}>Sep 2023 - Sep 2023</Typography>
              <Typography sx={{color:'whitesmoke', fontFamily:'Poppins', fontWeight:'300', ml:2, fontSize:'15px'}}>The Portfolio you are currently observing is developed by me , it is the project based on personal portfolio </Typography>
            </Box>
        <Project2/>
    </Box>
    </>
  )
}

export default Portfo