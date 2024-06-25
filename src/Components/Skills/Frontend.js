import { Box} from '@mui/material'
import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const next = require('./images/iduLChSb1a.jpeg')
          const reac = require('./images/react.png')  
          const js = require('./images/js.png')
         const mongo = require('./images/mongo.png') 
         const vs = require('./images/pngwing.com.png')
         const git = require('./images/git.png')
         const github = require('./images/github.png')
         const tail = require('./images/tail.png')
         const css = require('./images/css.png')
         const html = require('./images/html.png')
         const mui = require('./images/mui.png') 
         const figma = require('./images/fig.png')  
function Frontend() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  return (
    <>
    <div data-aos='zoom-in'>
    <Box sx={{
    p: 1,
    width: 'auto',
    height: 'auto',
    bgcolor: 'rgb(0, 3, 20)',
    border: '1px dashed #63C5DA',
    boxShadow: `0 4px 8px rgba(0, 123, 255, 0.3)`,
    borderRadius: '15px',
    
                
       
    alignItems: 'center',       
    '@media screen and (max-width: 500px)': {
        width: '40vh',
    },
}}>
    <Box sx={{ display: 'flex', alignItems: 'center', mx:'auto', justifyContent:'center' , gap:2}}>
        <img src={next} style={{ width: '15%', }} alt=''></img>
        <img src={reac} style={{ width: '13%' }} alt=''></img>
        <img src={js} style={{ width: '15%', }} alt=''></img>
        <img src={mongo} style={{ width: '15%' }} alt=''></img>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', mx:'auto',  mt:2,justifyContent:'center', gap:2 }}>
    <img src={css} style={{ width: '15%', }} alt=''></img>
        <img src={tail} style={{ width: '15%' }} alt=''></img>
        <img src={figma} style={{ width: '15%', }} alt=''></img>
        <img src={vs} style={{ width: '12%' }} alt=''></img>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', mx:'auto', mt:2,justifyContent:'center', gap:2 }}>
    <img src={mui} style={{ width: '15%', }} alt=''></img>
        <img src={git} style={{ width: '12%' }} alt=''></img>
        <img src={github} style={{ width: '15%', }} alt=''></img>
        <img src={html} style={{ width: '15%' }} alt=''></img>
    </Box>
</Box>
</div>
    </>
  )
}

export default Frontend