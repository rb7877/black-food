import { Box } from "@mui/material";
import IconInput from "components/utils/IconInput";
import SignCard from "components/utils/SignCard";
import styled from "styled-components";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React, { useEffect, useState } from 'react'

interface SixProps {
  setConfirmEmailAddress : (email : string) => void
  nextStep : () => void
  prevStep? : () => void
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const SignSix = ( props : SixProps ) => {
  const [open, setOpen] = React.useState(false);
  const [emailAddress, setEmailAddress] = useState('');
  const [sentFlg, setSentFlg] = useState(0);

  const handleEmailChange = (event : any) => {
    setEmailAddress(event.target.value.trim());
  }
  function isValidEmail(email : string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const nextStep = () => {
    if (emailAddress === '' || !isValidEmail(emailAddress)) {
      setOpen(true);
      return;
    }

    props.setConfirmEmailAddress(emailAddress);
    setSentFlg(1)
  }
  
  useEffect(() => { 
    if (sentFlg === 1) {
      props.nextStep();
    }
  }, [sentFlg])

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
        subtitle={`We’re going to email to confirm your email address.`}
        description="Check we’ve got it right."
        prevStep={props.prevStep}
        nextStep={nextStep}
      >
         <InputComponent>
            <Box>{`Email Address`}</Box>
            <Box mt={`8px`}>
              <IconInput placeHolder="eg. name@email.com" onChange={handleEmailChange}/>
            </Box>
          </InputComponent>
      </SignCard>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
          Email is invalid.
        </Alert>
      </Snackbar>
    </Box>
  )
}

const InputComponent = styled(Box)`
  display : flex ;
  flex-direction : column ;
  >div:first-of-type {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #1B1D21;
  }
`

export default SignSix;