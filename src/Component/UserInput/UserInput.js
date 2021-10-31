import React, { useState } from "react";

//Importing external modules
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from '@mui/material/Box';

import './UserInput.css'

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  btnSave: {
    backgroundColor: "#116aea",
    borderRadius: "100px",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#14336b",
    },
  },
}));


const UserInput = ({ shouldOpen, setShouldOpen, setPlaneSize, setPassengers }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const [passengerssize, setPassengersSize] = useState(0);
  const [sizeError, setSizeError] = useState(false)


  const handleClose = () => {
    setSize('');
    setPassengersSize(0)
    setOpen(false);
    setShouldOpen(false);
  };

  const onProceed = () => {
    let sizeinput;
    try{
         sizeinput = JSON.parse(size);
        //  setting the passengers count and airplane size to global states
         setPlaneSize(sizeinput);
         setPassengers(passengerssize);
         setSizeError(false);
         handleClose();

    }catch{
        setSizeError(true);
    }

  }


  React.useEffect(() => {
    setOpen(shouldOpen);
  }, [shouldOpen]);




  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle id="simple-dialog-title">Please enter the valid Details</DialogTitle>
        <DialogContent>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className='input-container' >
                <div className='item-container' >
                    <label  className="inputlabel">
                        Please enter the size of Airplane in 
                        matrix form :
                    </label>
                    <label className={`error-occur-${sizeError}`} >please enter valid size</label>
                    {/* for getting the size of the airplane from the user */}
                    <input
                        placeholder="eg: [[3,2],[4,3],[2,3],[3,4]]"
                        className='input-text'
                        onChange={(e)=>setSize(e.target.value)}
                    />
                    
                </div>

                <div className='item-container' >
                    <label  className="inputlabel">
                        {/* for getting the count of passengers from user */}
                        Please enter the number of passengers :
                    </label>
                    <input
                        placeholder="eg: 30"
                        className='input-text'
                        type='number'
                        onChange={(e)=>setPassengersSize(e.target.value)}
                    />
                </div>
            </div>

        </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={onProceed}
            disabled={!Boolean(passengerssize&&size)}
            className={classes.btnSave}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserInput;
