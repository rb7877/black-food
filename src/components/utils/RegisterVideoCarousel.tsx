import { Box } from "@mui/material";
import styled from "styled-components";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
interface CarouselProps {
  data: any[]
}

const RegisterVideoCarousel = (props: CarouselProps) => {
  return (
    <Box position={`relative`}>
      <CarouselContainer>
        <DescriptionContainer>
          <Box>
            {`“It’s not all about the extra money. The way the marketing works makes your restaurant stand out and be valuable in the market.”`}
          </Box>
          <Box>
            {`hello@world`}
          </Box>
        </DescriptionContainer>
        <ImageContainer>
          <Box>
            <img src="/uploads/videos/images/cooking.png" alt="" />
            <Box>
              <img src="/assets/images/utils/play.svg" alt="" />
            </Box>
          </Box>
        </ImageContainer>
      </CarouselContainer>
      <ActionContainer>
        <Box>
          <WestIcon />
        </Box>
        <Box>
          <EastIcon />
        </Box>
      </ActionContainer>
    </Box>
  )
}

const CarouselContainer = styled(Box)`
  display : flex ;
  gap : 48px;
  align-items : center ;  
  flex-direction : column-reverse;
  @media screen and (min-width : 1200px){
    flex-direction : row;
  }
`

const DescriptionContainer = styled(Box)`
  max-width : 500px;
  >div: first-of-type { 
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27.52px;
    width: 335px;
    @media screen and (min-width : 1200px){
      font-size: 30px;
      line-height: 46px;  
      width: unset;
    }
    color: #78828A;
  }
  >div:nth-of-type(2) {
    margin-top : 24px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    @media screen and (min-width : 1200px){
      font-size: 20px;
      line-height: 20px;  
    }
    letter-spacing: 0.0885714px;
    color: #1B1D21;
  }
`
const ImageContainer = styled(Box)`
  background : url('/assets/images/utils/rectangle.png');
  background-position : right bottom ;
  background-repeat : no-repeat;
  width: 335px;
  
  background-size: contain;
  @media screen and (min-width : 1200px){
    width: unset;
    background-size: unset;
  }
  >div {
    padding-bottom: 23px;
    padding-right: 20px;
    position : relative ;
    >img {
      width : 100%;
      max-width : 590px;
    }
    >div {
      position : absolute ;
      left : 50%;
      top : 50%;
      transform : translate(-50%, -50%);
    }
  } 
`
const ActionContainer = styled(Box)`
  display : flex ;
  gap : 30px;
  position : absolute;
  left : calc((100% - 335px) / 2);
  bottom : -40px;
  @media screen and (min-width : 1200px){
    left : 0px;
    bottom : 20px;
  }
`

export default RegisterVideoCarousel;