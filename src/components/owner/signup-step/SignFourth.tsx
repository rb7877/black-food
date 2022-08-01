import { Box } from "@mui/material";
import SignCard from "components/utils/SignCard";
import SignSwitch from "components/utils/SignSwitch";
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React from 'react'

interface FourthProps {
  nextStep : () => void
  prevStep? : () => void
  setBusinessOperate : (value : number) => void
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



const SignFourth = (props : FourthProps) => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = React.useState(false);

  const nextStep = () => {
    if (value === 0) {
      setOpen(true);
      return;
    }
    props.setBusinessOperate(value);
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
        subtitle={`Where does your business operate?`}
        description="We’ll make sure you all the help you need to successfully set up your restaurant on JustEat"
        nextStep={nextStep}
        prevStep={props.prevStep}
      >
        <Box display={`flex`} flexDirection={`column`} gap={`16px`}>
          <SignSwitch title="High street location, on its own" description={`A traditional high street place with a shop front, such as a takeaway, restaurant or cafe.`} active={value === 1 ? true : false} onClick={() => setValue(1)}/>
          <SignSwitch title="Shared location with other businesses" description={`You operate multiple businesses at the same address, or share an address with another business run by someone else.`} active={value === 2 ? true : false} onClick={() => setValue(2)}/>
          <SignSwitch title="Somewhere else" description={`Your business operates from a residential address, a pub, a van, an industrial estate or another location.`} active={value === 3 ? true : false} onClick={() => setValue(3)}/>
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



export default SignFourth;