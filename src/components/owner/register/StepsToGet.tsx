import { Box } from "@mui/material";
import RegisterVideoCarousel from "components/utils/RegisterVideoCarousel";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const StepsToGet = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <MainContainer>
      <TitleContainer>
        <Box position={`absolute`} top={`-123px`} left={0}>
          <img src="/assets/images/register/dessert.png" alt="" />
        </Box>
        <Box  position={`relative`} zIndex={2} width={`100%`} textAlign={`center`} color={`#1B1D21`} letterSpacing={`0.186984px`} fontSize={`38px`} fontWeight={600} lineHeight={`55px`}>
          {`Steps to get set up`}
        </Box>
        <Box position={`absolute`} top={`-56px`} right={0}>
          <img src="/assets/images/register/cake.png" alt="" />
        </Box>
      </TitleContainer>
      <StepsContainer>
        <CardContainer>
          <CardItem data-aos="fade-up"  data-aos-delay="300">
            <Box>
              <img src="/assets/images/register/note.svg" alt="" />
            </Box>
            <Box>{`Create your page`}</Box>
            <Box>{`Help users discover your place by creating a listing on Zomato`}</Box>
          </CardItem>
          <CardItem data-aos="fade-up"  data-aos-delay="500">
            <Box>
              <img src="/assets/images/register/delivery.svg" alt="" />
            </Box>
            <Box>{`Create your page`}</Box>
            <Box>{`Help users discover your place by creating a listing on Zomato`}</Box>
          </CardItem>
          <CardItem data-aos="fade-up"  data-aos-delay="700">
            <Box>
              <img src="/assets/images/register/result.svg" alt="" />
            </Box>
            <Box>{`Create your page`}</Box>
            <Box>{`Help users discover your place by creating a listing on Zomato`}</Box>
          </CardItem>
        </CardContainer>
        <Box mt={`120px`}>
          <RegisterVideoCarousel data={[]}/>
        </Box>
        
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
  width : ${window.innerWidth >= 1440 ? '1440px' : '100%'};
  margin : auto ;
  display : flex ;
  flex-direction : column ;

  @media screen and (min-width : 475px) {
    padding-left : ${window.innerWidth >= 1440 ? '140px' : '50px'};
    padding-right : ${window.innerWidth >= 1440 ? '140px' : '50px'};
  }
  @media screen and (min-width : 1200px){
    margin-top :-180px;  
  }
  margin-top :-1200px;
  padding-bottom : 120px ;
`

const TitleContainer = styled(Box)`
  position : relative;
  background: rgb(253 107 34 / 10%);
  padding : 220px 0 1300px;
  @media screen and (min-width : 1200px){
    padding : 120px 0 262px;
  }
  z-index : 1;
  >div:first-of-type {
    >img {
      @media screen and (max-width : 1200px){
        width : 100%;
        max-width : 560px;
      }  
    }
    @media screen and (max-width : 1200px){
      width : 100%;
      max-width : 560px;
    }
  }
  >div:last-of-type{
    width : 130px;
    overflow: hidden;
    >img {
      width: 100%;
      max-width : 200px;
    }
    @media screen and (min-width : 1200px){
      width : 200px;
    }
  }
`

const CardContainer = styled(Box)`
  display : flex ;
  flex-direction : column ;

  gap : 21px;
  align-items : center ;
  justify-content : center ;
  @media screen and (min-width : 1200px ){
    flex-direction : row ;
  }
  @media screen and (min-width : 1440px){
    justify-content : start ;
  }
`

const CardItem = styled(Box)`
  background: #FFFFFF;
  border-radius: 15px;
  max-width : 372px;
  min-width : 370px;
  padding : 40px 25px;
  display : flex ;
  flex-direction : column ;
  align-items : center ;
  justify-content : center ;
  flex : 1;
  >div:nth-of-type(2) {
    margin-top : 32px ;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.0984127px;
    color: #1B1D21;
  }
  >div:nth-of-type(3) {
    margin-top : 24px ;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    color: #78828A;
  }
`

export default StepsToGet;