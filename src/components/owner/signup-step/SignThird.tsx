import { Box } from "@mui/material";
import SignCard from "components/utils/SignCard";
import SignSwitch from "components/utils/SignSwitch";
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React from 'react'

interface ThirdProps {
  nextStep : () => void
  prevStep? : () => void
  setDriverType : (value : number) => void
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SignThird = (props : ThirdProps) => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = React.useState(false);

  const nextStep = () => {
    if (value === 0) {
      setOpen(true);
      return;
    }
    props.setDriverType(value);
    props.nextStep();
  }
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Box>
      <SignCard
        title={`Sign UP`}
        subtitle={`Does your restaurant have its<br/>own delivery drivers?`}
        description="This will help customers find your restaurant"
        nextStep={nextStep}
        prevStep={props.prevStep}
      >
        <Box display={`flex`} flexDirection={`column`} gap={`16px`}>
          <SignSwitch title="Yes" active={value === 1 ? true : false} onClick={() => setValue(1)}/>
          <SignSwitch title="No, it’s collection only" active={value === 2 ? true : false} onClick={() => setValue(2)} />
          <SignSwitch title="No, I want Just Eat to deliver" active={value === 3 ? true : false} onClick={() => setValue(3)} />
        </Box>
      </SignCard>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
          Please input correctly.
        </Alert>
      </Snackbar>
    </Box>
  )
}



export default SignThird;