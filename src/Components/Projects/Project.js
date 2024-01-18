import { Typography } from '@mui/material'
import React from 'react'
import Portfo from './Portfo'


function Project() {
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
  id = 'Project'
>
  Projects
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
  I have worked on a wide range of projects. Most of them were web apps. Here are some of my projects i have worked on
  </Typography>
  <Portfo/>
    </>
  )
}
export default Project