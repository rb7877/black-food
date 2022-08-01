import { Box } from "@mui/material";
import IconInput from "components/utils/IconInput";
import SignCard from "components/utils/SignCard";
import { useState } from "react";
import styled from "styled-components";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React from 'react'

interface FirstStepProps {
  setFirstName: (first: string) => void
  setLastName: (last: string) => void
  nextStep: () => void
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SignFirst = (props: FirstStepProps) => {

  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleFirstNameChange = (event: any) => {
    setFirst(event.target.value.trim())
  }
  const handleLastNameChange = (event: any) => {
    setLast(event.target.value.trim());
  }

  const nextStep = () => {
    if (first === '' || last === '') {
      setOpen(true);
      return;
    }
    props.setFirstName(first);
    props.setLastName(last);
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
        subtitle={`Who own the restaurant?`}
        description="We need the name of the legal owner.<br/>We’ll ask you for proof of ownership"
        nextStep={nextStep}
      >
        <InputComponent>
          <Box>{`First Name`}</Box>
          <Box mt={`8px`}>
            <IconInput placeHolder="Enter your first name" onChange={handleFirstNameChange} />
          </Box>
        </InputComponent>
        <InputComponent mt={`24px`}>
          <Box>{`Last Name`}</Box>
          <Box mt={`8px`}>
            <IconInput placeHolder="Enter your last name" onChange={handleLastNameChange} />
          </Box>
        </InputComponent>
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

export default SignFirst;