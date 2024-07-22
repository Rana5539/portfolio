import { Box } from '@mui/material';
import React, { useEffect, lazy, Suspense } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Frontend() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div data-aos="zoom-in">
        <Box
          sx={{
            p: 3,
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
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mx: 'auto',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <img width="auto" height="auto" src="https://img.icons8.com/nolan/128/html-5.png" alt="html-5"/>
            <img width="auto" height="auto" src="https://img.icons8.com/nolan/128/css3.png" alt="css3"/>
            <img width="auto" height="auto" src="https://img.icons8.com/nolan/128/react-native.png" alt="react-native"/>
            <img width="auto" height="auto" src="https://img.icons8.com/nolan/128/javascript.png" alt="javascript"/>
            


           
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mx: 'auto',
              mt: 2,
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <img width="auto" height="auto" src="https://img.icons8.com/color/144/mongodb.png" alt="mongodb"/>
<img width="v" height="auto" src="https://img.icons8.com/fluency/144/tailwind_css.png" alt="tailwind_css"/>
<img width="auto" height="auto" src="https://img.icons8.com/color/144/figma--v1.png" alt="figma--v1"/>
<img width="auto" height="auto" src="https://img.icons8.com/color/144/visual-studio-code-2019.png" alt="visual-studio-code-2019"/>         
</Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mx: 'auto',
              mt: 2,
              justifyContent: 'center',
              gap: 2,
            }}
          >
           <img width="auto" height="auto" src="https://img.icons8.com/color/144/material-ui.png" alt="material-ui"/>
<img width="auto" height="auto" src="https://img.icons8.com/nolan/128/git.png" alt="git"/>
<img width="auto" height="auto" src="https://img.icons8.com/nolan/128/github.png" alt="github"/>
<img width="auto" height="auto" src="https://img.icons8.com/color/144/redux.png" alt="redux"/>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Frontend;
