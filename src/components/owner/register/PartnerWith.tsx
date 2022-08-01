import { Box } from "@mui/material";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PartnerWith = () => {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <MainContainer>
      <PartnerContainer>
        <Box data-aos="zoom-in-up" color={`#1B1D21`} letterSpacing={`0.186984px`} fontSize={{md : `38px`, xs : `24px`}} fontWeight={600} lineHeight={{md : `55px`, xs : `30px`}}>
          {`Why should you partner with JustEat?`}
        </Box>
        <Box  data-aos="fade-up" color={`#1B1D21`} fontSize={{md : `20px`, xs : `14px`}} fontWeight={500} lineHeight={{md : `30px`, xs : `24px`}} mt={`24px`}>
          {`JustEat enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insights to improve your business.`}
        </Box>
        <InfoContainer>
          <Box flex={1}>
            <Box data-aos="fade-up"  data-aos-delay="300">
              <img src="/assets/images/register/clock.svg" alt="" />
              <Box color={`#1B1D21`} fontSize={`20px`} fontWeight={700} lineHeight={`24px`} mt={`16px`}>
                {`Get More Customers`}
              </Box>
              <Box color={`#78828A`} fontSize={`16px`} fontWeight={400} lineHeight={`25px`} mt={`8px`}>
                {`Restaurants on Just Eat take 4,000 orders a year on average. We’ll put your restaurant in front of more potential customers than anyone else.`}
              </Box>
            </Box>
            <Box mt={3} data-aos="fade-up"  data-aos-delay="500">
              <img src="/assets/images/register/percent.svg" alt="" />
              <Box color={`#1B1D21`} fontSize={`20px`} fontWeight={700} lineHeight={`24px`} mt={`16px`}>
                {`We’ll do the marketing`}
              </Box>
            </Box>
            <Box mt={6} data-aos="fade-up"  data-aos-delay="500">
              <img src="/assets/images/register/map.svg" alt="" />
              <Box color={`#1B1D21`} fontSize={`20px`} fontWeight={700} lineHeight={`24px`} mt={`16px`}>
                {`Save with exclusive perks`}
              </Box>
            </Box>
          </Box>
          <Box  data-aos="fade-up"  data-aos-delay="500" flex={1} display={`flex`} alignItems={`center`} justifyContent={`center`}>
            <img src="/assets/images/register/partner.png" alt="" />
          </Box>
        </InfoContainer>
      </PartnerContainer>
    </MainContainer>
  )
}
const MainContainer = styled(Box)`
  width : 100% ;
  background : #F8FAFB;
`

const PartnerContainer = styled(Box)`
  width : ${window.innerWidth >= 1440 ? '1440px' : '100%'};
  margin : auto ;
  display : flex ;
  flex-direction : column ;
  padding-left : calc((100% - 375px) / 2);

  @media screen and (min-width : 475px) {
    padding-left : ${window.innerWidth >= 1440 ? '150px' : '50px'};
    padding-right : ${window.innerWidth >= 1440 ? '140px' : '50px'};
  }
  padding-top : 450px;
  @media screen and (min-width : 1200px) {
    padding-top :135px;
  }
  padding-bottom : 120px ;
  >div:nth-of-type(1) {
    width : 335px;
    margin : auto;
    @media screen and (min-width : 1200px){
      width : unset;
    }
  }
  >div:nth-of-type(2) {
    width : 335px;
    margin : auto;
    margin-top :16px ;
    @media screen and (min-width : 1200px){
      width : unset;
    }
  }
`

const InfoContainer = styled(Box)`
    display : flex ;
    align-items : center ;
    margin-top : 50px;
    flex-direction : column-reverse;
    @media screen and (min-width : 1200px){
      flex-direction : row ;
    }
    >div:first-of-type {
      >div:first-of-type {
        background: #FFFFFF;
        box-shadow: 0px -8px 104px rgba(0, 0, 0, 0.0860194);
        border-radius: 15px;
        padding : 24px ;
        max-width : 557px;
        width : 335px;
        margin-top : 33px;
        @media screen and (min-width : 1200px){
          width : unset;
        }
      }
    }
    >div:last-of-type {
      width : 335px;
      @media screen and (min-width : 1200px){
        width : unset;
      }
      >img {
        width : 100%;
        max-width : 480px;
        @media screen and (min-width : 1200px){
          width : unset;
        } 
      }
    }
`

export default PartnerWith;