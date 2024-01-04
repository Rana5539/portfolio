import { Typography } from '@mui/material'
import React from 'react'
import Matric from './Matric'
import Ics from './Ics'
import BSCS from './BSCS'
function Education() {
  return (
    <>
     <Typography
  sx={{
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: '30px',
    textAlign: 'center',
    mt: 10,
  }}
  id='Edu'
>
  Education
</Typography>
<Typography
  sx={{
    color: '#BEBEBE',
    fontFamily: 'Poppins',
    fontSize: '15px',
    textAlign: 'center',
    fontWeight:'300'
  }}
  
>
  My education has been a journey of self-discovered and growth. My educational details are as follows
  </Typography>
  <BSCS/>
  <Ics/>
  <Matric/>
  
    </>
  )
}

export default Education