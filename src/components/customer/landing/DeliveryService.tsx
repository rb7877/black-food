import { Box } from "@mui/material";
import { useEffect } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const DeliveryService = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <MainContainer>
      <HomeContainer>
        <Bar />
        <Box data-aos="fade-down" mt={`10px`}>{`Lorem ipsum`}</Box>
        <TitleBox data-aos="fade-down">
          {`Why You Use Our Food`}
          <br/>
          {`Delivery Service?`}
        </TitleBox>
        <Box display={`flex`} justifyContent={`center`} flexDirection={{md : `row`, xs : `column`}} alignItems={{md : 'unset', xs : 'center'}} gap={`108px`} mt={`30px`}>
          <ServiceBox data-aos-delay="500" data-aos="fade-up">
            <img src="/assets/images/landing/easytoorder.svg" alt="" />
            <Box width={`100%`} textAlign={`center`} fontSize={`24px`} fontWeight={`500`}>{`Easy to Order`}</Box>
            <Box width={`100%`} justifyContent={`center`} alignItems={`center`} display={`flex`} gap={`5px`} color={`#FD6B22`}>
              <Box fontSize={`14px`} textAlign={`center`} fontWeight={`500`}>{`Order Now`}</Box>
              <ArrowForwardIosIcon sx={{ width: '12px' }} />
            </Box>
          </ServiceBox>
          <ServiceBox data-aos-delay="800" data-aos="fade-up">
            <img src="/assets/images/landing/contactless.svg" alt="" />
            <Box width={`100%`} textAlign={`center`} fontSize={`24px`} fontWeight={`500`}>{`Contactless Delivery`}</Box>
            <Box width={`100%`} justifyContent={`center`} alignItems={`center`} display={`flex`} gap={`5px`} color={`#FD6B22`}>
              <Box fontSize={`14px`} textAlign={`center`} fontWeight={`500`}>{`Order Now`}</Box>
              <ArrowForwardIosIcon sx={{ width: '12px' }} />
            </Box>
          </ServiceBox>
          <ServiceBox data-aos-delay="1100" data-aos="fade-up">
            <img src="/assets/images/landing/quality.png" alt="" />
            <Box width={`100%`} textAlign={`center`} fontSize={`24px`} fontWeight={`500`}>{`Quality Food`}</Box>
            <Box width={`100%`} justifyContent={`center`} alignItems={`center`} display={`flex`} gap={`5px`} color={`#FD6B22`}>
              <Box fontSize={`14px`} textAlign={`center`} fontWeight={`500`}>{`Order Now`}</Box>
              <ArrowForwardIosIcon sx={{ width: '12px' }} />
            </Box>
          </ServiceBox>
        </Box>
      </HomeContainer>
    </MainContainer>
  )
}

const HomeContainer = styled(Box)`
  min-height : 100vh;
  width : ${window.innerWidth >= 1440 ? '1440px' : '100%'};
  margin : auto ;
  display : flex ;
  flex-direction : column;
  padding-top : 100px;
  padding-bottom : 65px;
  padding-left : ${window.innerWidth >= 1440 ? '150px' : '50px'};
`

const MainContainer = styled(Box)`
  width : 100% ;
  background: rgb(253 107 34 / 10%);
`
const Bar = styled(Box)`
  width : 40px;
  height : 2px;
  background: #1B1D21;
`

const TitleBox = styled(Box)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 35px;
  letter-spacing: 0.186984px;
  color: #1B1D21;
  width : 100% ;
  @media screen and (min-width : 1200px){
    font-size: 38px;
    line-height: 55px;
  }
`

const ServiceBox = styled(Box)`
  display : flex ;
  flex-direction : column;
  width : 300px ;
`

export default DeliveryService;