import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import UserInput from '../UserInput/UserInput'

export default function Header(props) {

const [openUserInput, setOpenUserInput] = React.useState(false);
const {setPlaneSize, setPassengers} = props

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">   {/* created a header for the application */}
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Airplane Seat Arrangement
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
            {/* on click of this button  UserInput pop up box will appear */}
            <Button color="inherit" 
                onClick={()=>setOpenUserInput(true)} >
              Create New Arrangements
            </Button>
        </Toolbar>
      </AppBar>
      {/*  pop up box for user input */}
      <UserInput    
        shouldOpen = {openUserInput}
        setShouldOpen= {setOpenUserInput} 
        setPlaneSize= {setPlaneSize}
        setPassengers={setPassengers}
        />
    </Box>
  );
}