import { Box } from "@mui/material";
import IconInput from "components/utils/IconInput";
import SignCard from "components/utils/SignCard";
import { useState } from "react";
import styled from "styled-components";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React from 'react'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SignIn = () => {

  const [open, setOpen] = React.useState(false);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleNextStep = () => {
    return ;
  }

  return (
    <Box>
      <SignCard
        title={`Sign IP`}
        subtitle={`Hello Again`}
        description=" "
        nextStep={handleNextStep}
      >
        <InputComponent>
          <Box>{`Email`}</Box>
          <Box mt={`8px`}>
            <IconInput placeHolder="eg Hello@gmail.com" />
          </Box>
        </InputComponent>
        <InputComponent mt={`24px`}>
          <Box>{`Your Restaurant ID`}</Box>
          <Box mt={`8px`}>
            <IconInput placeHolder="eg XYCZ695CY" />
          </Box>
        </InputComponent>
        <Box display={`flex`} justifyContent={`space-between`} mt={`12px`}>
            <Box fontWeight={400} fontSize={`12px`} lineHeight={`24px`} color={`#78828A`}>
              {`You can find this in the email we sent you.`}
            </Box>
            <Box fontWeight={400} fontSize={`12px`} lineHeight={`24px`} color={`#FD6B22`} sx={{cursor : 'pointer'}}>
              {`Need Help?`}
            </Box>
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

export default SignIn;