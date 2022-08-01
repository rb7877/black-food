import { Box } from "@mui/material";
import SignCard from "components/utils/SignCard";
import styled from "styled-components";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

interface SecondStepProps {
  setPrimary : (first : string) => void
  setSecond : (last : string) => void
  nextStep : () => void
  prevStep : () => void
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SignSecond = (props : SecondStepProps) => {
  const [primary, setPrimary] = React.useState('');
  const [second, setSecond] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handlePrimaryChange = (event: SelectChangeEvent) => {
    setPrimary(event.target.value as string);
  };

  const handleSecondChange = (event: SelectChangeEvent) => {
    setSecond(event.target.value as string);
  };

  const nextStep = () => {
    if (primary === '' || second === '') {
      setOpen(true);
      return;
    }
    props.setPrimary(primary);
    props.setSecond(second);
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
        subtitle={`handleSecondChange`}
        description="This will help customers find your restaurant"
        nextStep={nextStep}
        prevStep={props.prevStep}
      >
        <InputComponent>
          <Box>{`Primary cuisine`}</Box>
          <Box mt={`8px`}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={primary}
                  onChange={handlePrimaryChange}
                >
                  <MenuItem value={`ten`}>Ten</MenuItem>
                  <MenuItem value={`Twenty`}>Twenty</MenuItem>
                  <MenuItem value={`Thirty`}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </InputComponent>
        <InputComponent mt={`24px`}>
          <Box>{`Secondary cuisine`}</Box>
          <Box mt={`8px`}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={second}
                  onChange={handleSecondChange}
                >
                  <MenuItem value={`Ten`}>Ten</MenuItem>
                  <MenuItem value={`Twenty`}>Twenty</MenuItem>
                  <MenuItem value={`Thirty`}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
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

export default SignSecond;