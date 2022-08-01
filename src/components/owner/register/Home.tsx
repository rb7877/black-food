import { Box, Button } from "@mui/material"
import React, { useEffect, useState } from "react";
import styled from "styled-components"
import AOS from "aos";
import "aos/dist/aos.css";
import IconInput from "components/utils/IconInput";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useDispatch } from 'react-redux'
import { setForm } from "redux/owner/AuthReducer";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useHistory } from "react-router-dom";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

declare let window : any;

const Home = () => {
  const navigate = useHistory()
  const dispatch = useDispatch()
  const [phoneNumber, setPhoneNumber] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [address, setAddress] = useState('');
  const [emailAddress, setEmailAddress] = useState('')
  const [open, setOpen] = React.useState(false);
  const [errorMsg, setErrorMsg] = useState('')

  function isValidEmail(email : string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  const register = async () => {

    if(restaurantName.trim() === '') {
      setErrorMsg('Please input restaurant name.')
      setOpen(true);
      return ;
    }

    if(phoneNumber.trim() === '') {
      setErrorMsg('Please input phone number.')
      setOpen(true);
      return ;
    }

    if(address.trim() === '') {
      setErrorMsg('Please input address.')
      setOpen(true);
      return ;
    }

    if(emailAddress.trim() === '') {
      setErrorMsg('Please input Email address.')
      setOpen(true);
      return ;
    }

    if(!isValidEmail(emailAddress)) {
      setErrorMsg('Email is invalid.')
      setOpen(true);
      return ;
    }



    const actionValue = {
      restaurant_name: restaurantName,
      mobile_number : phoneNumber,
      address : address,
      email_address : emailAddress
    }
    dispatch(setForm(actionValue))
    navigate.push("/restaurant/signup")
  }

  const handleRestaurantNameChange = (event: any) => {
    setRestaurantName(event.target.value.trim());
  }

  const handleAddressChange = (event: any) => {
    setAddress(event.target.value.trim());
  }

  const handleEmailChange = (event: any) => {
    setEmailAddress(event.target.value.trim());
  }



  return (
    <MainContainer>
      <HomeContainer>
        <MainBox data-aos="fade-right">
          <Box mt={`26px`}>
            {`Join the UK’s leading food delivery provider platform`}
          </Box>
          <Box maxWidth={`420px`} mt={`29px`} fontSize={`16px`} lineHeight={`167%`} fontWeight={`400`} fontStyle={`normal`}>
            {`Your talent and passion for food.Our technical and marketing know-how.`}<br />
            {`Just think what we could cook up together`}
          </Box>
        </MainBox>
        <JoinUs data-aos="fade-left">
          <Box>
            <Box fontSize={`24px`} fontWeight={`600`} lineHeight={`29px`} color={`#1B1D21`} textAlign={`center`}>
              {`Join us today`}
            </Box>
            <Box mt={`16px`} fontSize={`14px`} fontWeight={`500`} lineHeight={`17px`} color={`#1B1D21`} textAlign={`center`}>
              {`for free & get more customers`}
            </Box>
          </Box>
          <InputComponent>
            <Box>{`Your Restaurant’s Name`}</Box>
            <Box mt={`8px`}>
              <IconInput placeHolder="Search for restaurant, item or more" icon={(<img src="/assets/images/utils/search.svg" alt="" />)} onChange={handleRestaurantNameChange} />
            </Box>
          </InputComponent>
          <PhoneAddres>
            <Box mb={`8px`}>{`Mobile Number`}</Box>
            <PhoneInput
              country={'us'}
              value={phoneNumber}
              onChange={phone => setPhoneNumber(phone)}
            />
          </PhoneAddres>
          <InputComponent>
            <Box>{`Address`}</Box>
            <Box mt={`8px`}>
              <IconInput placeHolder="eg. 123 High Street" icon={(<img src="/assets/images/utils/search.svg" alt="" />)} onChange={handleAddressChange} />
            </Box>
          </InputComponent>
          <InputComponent>
            <Box>{`Email Address`}</Box>
            <Box mt={`8px`}>
              <IconInput placeHolder="eg. name@email.com" onChange={handleEmailChange} />
            </Box>
          </InputComponent>
          <ActionContainer>
            <Button sx={{ '&:hover': { background: '#FD6B22' }, background: '#FD6B22', borderRadius: '50px', color: 'white', padding: '6px', textTransform: 'none', minWidth: '35px', width: '122px', height: '50px' }} onClick={register} >Register Now</Button>
            <Box>
              <Box color={`#78828A`} letterSpacing={`0.0688889px`} fontSize={`12px`} lineHeight={`20px`} fontWeight={`500`}>{`Restaurant already listed?`}</Box>
              <Box color={`#000`} letterSpacing={`0.0688889px`} fontSize={`12px`} lineHeight={`20px`} fontWeight={`500`}>{`Login Now`}</Box>
            </Box>
          </ActionContainer>
        </JoinUs>
        {/* </JoinUsContainer> */}
      </HomeContainer>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
          {errorMsg}
        </Alert>
      </Snackbar>
    </MainContainer>
  )
}

const HomeContainer = styled(Box)`
  position : relative;
  min-height : 100vh;
  width : ${window.innerWidth >= 1440 ? '1440px' : '100%'};
  margin : auto ;
  display : flex ;
  justify-content: space-between;
  flex-direction: column;
  align-items : center ;
  padding-top : 100px;
  padding-bottom : 50px;
  @media screen and (min-width : 1200px) {
    flex-direction: row;
    padding-top : 140px;
    padding-left : ${window.innerWidth >= 1440 ? '140px' : '50px'};
    padding-right : ${window.innerWidth >= 1440 ? '140px' : '50px'};
  }
`

const MainContainer = styled(Box)`
  width : 100% ;
  height : 100vh;
  background: url('/assets/images/register/register-bg.png');
  background-size : 100% 100%;
  @media screen and (max-width : 1200px){
    background-position : top center ;
    background-repeat: no-repeat;
    background-size : unset;
  }
`

const MainBox = styled(Box)`
  width : 335px;
  max-width : 565px;
  @media screen and (min-width : 500px){
    width : 400px;
  }
  @media screen and (min-width : 1200px){
    width : unset;
  }
  >div:nth-of-type(1) {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 47px;
    @media screen and (min-width : 500px){
      font-size: 50px;
      line-height: 62px;
    }
    display: flex;
    align-items: center;
    color: #FFFFFF;
  }
  >div:last-of-type {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 167%;
    color: #FFFFFF;
  }
`
const JoinUs = styled(Box)`

  
  background: #FFFFFF;
  box-shadow: 0px -8px 104px rgba(0, 0, 0, 0.0860194);
  border-radius: 15px;
  padding : 32px;
  display : flex;
  flex-direction : column ;
  gap : 24px;
  width : 335px;
  margin-top: 36px;
  @media screen and (min-width : 1200px){
    width : 400px;
    position : absolute ;
    bottom : -40px;
    right : 150px;
  }
`
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

const ActionContainer = styled(Box)`
  display: flex;
  gap : 24px;
  align-items : center;
`

const PhoneAddres = styled(Box)`
  .react-tel-input .form-control {
    font-size: 14px;
    letter-spacing: .01rem;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    padding-left: 48pximport { useDispatch } from 'react-redux';
;import { useSelector } from 'react-redux';

    margin-left: 0;
    background: #FDFDFD;
    border: 1px solid #ECF1F6;
    border-radius: 5px;
    line-height: 25px;
    height: 48px;
    width: 100%;
    outline: none;
  }

`

export default Home;