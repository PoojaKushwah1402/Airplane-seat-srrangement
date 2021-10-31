import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              Footer
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>

  );
}