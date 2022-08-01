import { Box } from "@mui/material";
import Search from "components/utils/Search";
import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <MainContainer>
      <HomeContainer>
        <MainBox data-aos="fade-right" data-aos-delay="300">
          <PeopleTrustUs>
            <img src="/assets/images/landing/peopletrustus.svg" alt="People trust us" />
            People trust us
          </PeopleTrustUs>
          <Box mt={`26px`}>
            <img src="/assets/images/landing/Most Fastest Delivery in Your City.svg" alt="Most Fastest Delivery in Your City" />
          </Box>
          <Box maxWidth={`420px`} mt={`29px`} fontSize={`16px`} lineHeight={`167%`} fontWeight={`400`} fontStyle={`normal`}>
            {`Enter your location to get your nearest restaurants or get deliver & enjoy. Happy foodie life`}
          </Box>
          <Box mt={`20px`}>
            <Search
              width={window.innerWidth > 1200 ? 420 : -1}
              height={55}
              placeholder="Enter your location or pincode"
              icon={(<SearchIcon src="/assets/images/landing/icon-map.svg" />)}
              button={`Search`}
              buttonwidth={86}
            />
          </Box>
        </MainBox>
        <DelieveryBox data-aos="fade-left" data-aos-delay="500">
          <img src="/assets/images/landing/home.png" alt="Home png" />
        </DelieveryBox>
      </HomeContainer>
    </MainContainer>
  )
}

const HomeContainer = styled(Box)`
  min-height : 100vh;
  width : ${window.innerWidth >= 1440 ? '1440px' : '100%'};
  margin : auto ;
  backdrop-filter: blur(125px);
  display : flex ;
  justify-content: space-between;
  flex-direction: column-reverse;
  align-items : center ;
  padding-top : 100px;
  padding-bottom : 50px;
  @media screen and (min-width : 1200px) {
    flex-direction: row;
    padding-top : 175px;
    padding-left : ${window.innerWidth >= 1440 ? '150px' : '50px'};
  }
`

const MainContainer = styled(Box)`
  width : 100% ;
  background: rgb(253 107 34 / 10%);
`

const PeopleTrustUs = styled(Box)`
  background: rgb(0 0 0 / 10%);
  border-radius: 35px;
  padding: 10px;
  gap: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.0688889px;
  color: #000000;
  mix-blend-mode: normal;
  display : flex;
  justify-content : start ;
  align-items : center ;
  width : 168px;
  cursor : pointer ;
`

const SearchIcon = styled.img`
  width : 24px;
  height : 24px;
`

const MainBox = styled(Box)`
  width : calc(100% - 100px);
  @media screen and (min-widht : 1200px){
    width : unset;
  }
  >div:nth-of-type(2) {
    >img {
      width : 100%;
      @media screen and (min-widht : 1200px){
        width : unset;
      }
    }
  }
`
const DelieveryBox = styled(Box)`
  width : calc(100% - 100px);
  @media screen and (min-width : 1200px){
    width : unset;
  }
  >img {
    width : 100%;
    @media screen and (min-width : 1200px){
      width : unset;
    }
  }
`

export default Home;