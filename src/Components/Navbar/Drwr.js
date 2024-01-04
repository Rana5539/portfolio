import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import LightIcon from '@mui/icons-material/Light';
export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
        transitionDuration: '0.8s',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{textAlign:'center', fontSize:'18px', fontFamily:'Poppins',display:'flex',ml:'17vh'}}><LightIcon/>Portfolio</List>
      <List sx={{textAlign:'center', fontFamily:'Inria Sans'}}>
       Scroll down to know more about me
      </List>
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '8px',
        }}
      ></Box>
    </Box>
  );

  return (
    <div>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            startIcon={<MenuIcon sx={{ color: 'white' }} />}
          >
            {String.fromCharCode(160)}
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
