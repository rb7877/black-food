import { Box } from "@mui/material";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SignUpStep = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <MainContainer>
      <StepsContainer>
        <Box data-aos="zoom-in-up"  color={`#1B1D21`} letterSpacing={`0.186984px`} fontSize={`38px`} fontWeight={600} lineHeight={`55px`}>
          {`What do you get on sign-up`}
        </Box>
        <Box  data-aos="fade-up"  data-aos-delay="300" color={`#1B1D21`} fontSize={`20px`} fontWeight={500} lineHeight={`30px`} mt={`24px`}>
          {`JustEat Partner Platform helps you take your business to new heights instantly with no hassle and 100% transparency!`}
        </Box>
        <StepBox>
          <Box data-aos="fade-up"  data-aos-delay="500">
            <Box>
              <Box display={`flex`} alignItems={`center`}>
                <NumberBox>1</NumberBox>
                <Box color={`#1B1D21`} fontSize={`20px`} fontWeight={700} lineHeight={`30px`} ml={`16px`}>
                  {`Restaurant Partner app`}
                </Box>
              </Box>
              <DescriptionBox>
                {`Manage all your orders on your smartphone with our Android app`}
              </DescriptionBox>
            </Box>
            <Box>
              <Box display={`flex`} alignItems={`center`}>
                <NumberBox>2</NumberBox>
                <Box color={`#1B1D21`} fontSize={`20px`} fontWeight={700} lineHeight={`30px`} ml={`16px`}>
                  {`Restaurant Partner web dashboard`}
                </Box>
              </Box>
              <DescriptionBox>
                {`Manage all your orders on your desktop or laptop`}
              </DescriptionBox>
            </Box>
            <Box>
              <Box display={`flex`} alignItems={`center`}>
                <NumberBox>3</NumberBox>
                <Box color={`#1B1D21`} fontSize={`20px`} fontWeight={700} lineHeight={`30px`} ml={`16px`}>
                  {`Data & Insights`}
                </Box>
              </Box>
              <DescriptionBox>
                {`Personalised data, insights and business best practice`}
              </DescriptionBox>
            </Box>
            <Box>
              <Box display={`flex`} alignItems={`center`}>
                <NumberBox>4</NumberBox>
                <Box color={`#1B1D21`} fontSize={`20px`} fontWeight={700} lineHeight={`30px`} ml={`16px`}>
                  {`Cashback`}
                </Box>
              </Box>
              <DescriptionBox>
                {`Cashback up to 7% at Booker and Makro`}
              </DescriptionBox>
            </Box>
            <Box>
              <Box display={`flex`} alignItems={`center`}>
                <NumberBox>5</NumberBox>
                <Box color={`#1B1D21`} fontSize={`20px`} fontWeight={700} lineHeight={`30px`} ml={`16px`}>
                  {`Bikes & Scooters`}
                </Box>
              </Box>
              <DescriptionBox>
                {`Up to £1,000 off electric delivery bikes and scooters`}
              </DescriptionBox>
            </Box>
            <Box>
              <Box display={`flex`} alignItems={`center`}>
                <NumberBox>6</NumberBox>
                <Box color={`#1B1D21`} fontSize={`20px`} fontWeight={700} lineHeight={`30px`} ml={`16px`}>
                  {`Merchandise`}
                </Box>
              </Box>
              <DescriptionBox style={{border: 'none'}}>
                {`Free Just Eat merchandising`}
              </DescriptionBox>
            </Box>
          </Box>
          <Box data-aos="fade-up"  data-aos-delay="700">
            <img src="/assets/images/register/stepmobile.png" alt="" />
          </Box>
        </StepBox>
      </StepsContainer>
    </MainContainer>
  )
}

const MainContainer = styled(Box)`
  width : 100% ;
  background : #F8FAFB;
`


const StepsContainer = styled(Box)`
  z-index : 2;
  position: relative;
  margin : auto ;
  display : flex ;
  flex-direction : column ;
  width: 335px;
  @media screen and (min-width : 1200px) {
    width : ${window.innerWidth >= 1440 ? '1440px' : '100%'};
  }

  @media screen and (min-width : 475px) {
    padding-left : ${window.innerWidth >= 1440 ? '140px' : '50px'};
    padding-right : ${window.innerWidth >= 1440 ? '140px' : '50px'};
  }
  padding-bottom : 120px ;
`

const StepBox = styled(Box)`
  display : flex ;
  margin-top : 50px ;
  flex-direction: column;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
  >div:last-of-type {
    width : 100%;
    @media screen and (min-width: 1200px) {
      width : unset;
    }
    >img {
      width : 100%;
      max-width : 555px;
      @media screen and (min-width: 1200px) {
        width : unset;

      }
    }
  }
`
const NumberBox = styled(Box)`
  width: 32px;
  height: 32px;
  background: linear-gradient(0deg, #F8F9FC, #F8F9FC), #FFFFFF;
  border: 1px solid #D4D9DE;
  border-radius: 25px;
  display : flex ;
  align-items : center ;
  justify-content : center ;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #78828A;
`

const DescriptionBox = styled(Box)`
  padding : 12px 36px;
  padding-right : 0px ;
  margin-left : 16px;
  border-left :  1px dashed #D4D9DE;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;


  color: #78828A;
`

export default SignUpStep;