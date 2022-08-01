import { Box, Button } from "@mui/material";
import styled from "styled-components";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const DownloadApp = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <MainContainer>
      <DownloadAppContainer>
          <PageContainer>
            <Box ml={`118px`} data-aos="fade-right" data-aos-delay="500">
              <img src="/assets/images/landing/phone.svg" alt="" />
            </Box>
            <Box data-aos="fade-left" data-aos-delay="700">
              <Box fontFamily={`Montserrat`} fontSize={`40px`} fontWeight={`800`} lineHeight={`49px`} color={{md : `#FFFFFF`, xs : `#fc6428`}}>
                {`Download`}
                <br/>
                {`our Mobile App`}
              </Box>
              <Box mt={`30px`} fontFamily={`Montserrat`} fontSize={`15px`} fontWeight={`500`} lineHeight={`27px`} color={{md : `#FFFFFF`, xs : `#fc6428`}} width={{md : '420px', xs : '100%'}}>
                {`Download the Just Eat app for faster ordering and more personalised recommendations.`}
              </Box>
              <Box display={`flex`} gap={`17px`} mt={`20px`}>
                <Button sx={{padding : 0, width : '130px', height : '40px'}}><img src="/assets/images/utils/googleplay-light.png" style={{width : '100%', height : '100%'}} alt=""/></Button>
                <Button sx={{padding : 0, width : '130px', height : '40px'}}><img src="/assets/images/utils/app-store-light.png" style={{width : '100%', height : '100%'}} alt=""/></Button>
              </Box>
            </Box>
          </PageContainer>
      </DownloadAppContainer>
    </MainContainer>
  )
}

const MainContainer = styled(Box)`
  width : 100% ;
  background : #F8FAFB;
`

const DownloadAppContainer = styled(Box)`
  width : ${window.innerWidth >= 1440 ? '1440px' : '100%'};
  margin : auto ;
  display : flex ;
  flex-direction : column ;
  padding-left : ${window.innerWidth >= 1440 ? '150px' : '50px'};
  padding-top :80px;
  padding-bottom : 120px ;
`

const PageContainer = styled(Box)`
  display : flex ;
  align-items : center ;
  flex-direction : column-reverse ;
  @media screen and (min-width : 1200px) {
    flex-direction : row ;
    background : url('/assets/images/landing/download-app-bg.png');
    background-repeat : no-repeat;
    background-position: center;
  }
  >div:first-of-type {
    >img {
      width : 100%;
    }
  }

`
export default DownloadApp;