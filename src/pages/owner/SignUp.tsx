import { Box } from "@mui/material";
import axios from "axios";
import Final from "components/owner/signup-step/Final";
import SignFirst from "components/owner/signup-step/SignFirst";
import SignFifth from "components/owner/signup-step/SignFifth";
import SignFourth from "components/owner/signup-step/SignFourth";
import SignSecond from "components/owner/signup-step/SignSecond";
import SignSix from "components/owner/signup-step/SignSix";
import SignThird from "components/owner/signup-step/SignThird";
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import Snackbar from '@mui/material/Snackbar';
import { useHistory } from "react-router-dom";
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const SignUp = () => {

  const { restaurant_name, mobile_number, address, email_address } = useSelector((store: any) => store.AuthReducer)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [primaryCuisine, setPrimaryCuisine] = useState('');
  const [secondCuisine, setSecondCuisine] = useState('')
  const [deliveryDriverType, setDeliveryDriverType] = useState(0)
  const [businessOperate, setBusinessOperate] = useState(0)
  const [sharedLocation, setSharedLocation] = useState(0)
  const [confirmEmailAddress, setConfirmEmailAddress] = useState('')
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = useState(1);
  const [errMsg, setErrMsg] = useState('')
  const navigate = useHistory()

  // useEffect(() => {
  //   console.log("email address = ", email_address);
  //   if (restaurant_name === '' || email_address === '') {
  //     navigate.push("/restaurant/register")
  //   }
  // }, [])

  const handleRegister = async () => {
    const BASE_URL = process.env.REACT_APP_BASE_URL + '/api/v1/justeat/addrestaurant';

    const _registerData = {
      restaurant_name: restaurant_name,
      restaurant_address: address,
      contact_number: mobile_number,
      email: email_address,
      first_name: firstName,
      last_name: lastName,
      primary_cuisine: primaryCuisine,
      secoundry_cuisine: secondCuisine,
      drivers_availability: deliveryDriverType,
      confirm_email: confirmEmailAddress,
      business_operate: businessOperate,
      typeof_location: sharedLocation,
    }

    console.log("send data = ", _registerData)

    try {
      const result = await axios.post(BASE_URL, _registerData, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
        }
      });
      setStep(7);
    } catch (err: any) {
      console.log("err = ", err.response.data.message)
      setErrMsg(err.response.data.message);
      setOpen(true)
    }
  }
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <Box>
      {step === 1 && (<SignFirst setFirstName={setFirstName} setLastName={setLastName} nextStep={() => setStep(2)} />)}
      {step === 2 && (<SignSecond setPrimary={setPrimaryCuisine} setSecond={setSecondCuisine} nextStep={() => setStep(3)} prevStep={() => setStep(1)} />)}
      {step === 3 && (<SignThird setDriverType={setDeliveryDriverType} nextStep={() => setStep(4)} prevStep={() => setStep(2)} />)}
      {step === 4 && (<SignFourth setBusinessOperate={setBusinessOperate} nextStep={() => setStep(5)} prevStep={() => setStep(3)} />)}
      {step === 5 && (<SignFifth setSharedLocation={setSharedLocation} nextStep={() => setStep(6)} prevStep={() => setStep(4)} />)}
      {step === 6 && (<SignSix setConfirmEmailAddress={setConfirmEmailAddress} nextStep={handleRegister} prevStep={() => setStep(5)} />)}
      {step === 7 && (<Final />)}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
          {errMsg}
        </Alert>
      </Snackbar>
    </Box>
  )
}


export default SignUp;