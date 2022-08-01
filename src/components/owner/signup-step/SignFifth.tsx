import { Box } from "@mui/material";
import CardSelector from "components/utils/CardSeletor";
import SignCard from "components/utils/SignCard";
import { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React from 'react'

interface FifthProps {
  nextStep: () => void
  prevStep?: () => void
  setSharedLocation: (value: number) => void
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const SignFifth = (props: FifthProps) => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = React.useState(false);

  const nextStep = () => {
    if (active === 0) {
      setOpen(true);
      return;
    }
    props.setSharedLocation(active);
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
        subtitle={`What kind of shared location is it?`}
        description="Pick One"
        nextStep={nextStep}
        prevStep={props.prevStep}
      >
        <Box display={`flex`} flexDirection={`column`} gap={`16px`}>
          <CardSelector title={`I own all the businesses`} description={`There are other businesses in this location and they are all owned by you.`} active={active === 1 ? true : false} onClick={() => setActive(1)} />
          <CardSelector title={`I do not own the other businesses`} description={`There are other businesses in this location and they are owned by other people.`} active={active === 2 ? true : false} onClick={() => setActive(2)} />
          <CardSelector title={`Shared delivery only kitchen`} description={`Leased kitchen facilities shared with multiple restaurants for delivery-only orders. Not open to the public. Sometimes called a ‘dark kitchen’.`} active={active === 3 ? true : false} onClick={() => setActive(3)} />
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


export default SignFifth;