import { Box, Button, Divider } from "@mui/material";
import styled from "styled-components";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";

interface HomeCarouselProps {
  data: any[],
  title: string,
  subtitle: string,
}


const HomeCarousel = (props: HomeCarouselProps) => {
  const [translateX, setTranslateX] = useState(0);
  const [count, setCount] = useState(0);
  const moveUnit = 392;
  const limitCount = window.innerWidth > 1200 ? 3 : Math.floor(window.innerWidth / moveUnit);
  const handleLeftCarousel = () => {
    
    if (count === props.data.length - limitCount) return;
    setCount(count + 1)
    setTranslateX(translateX - moveUnit);
  }

  const handleRightCarousel = () => {
    if (count === 0) return;
    setCount(count - 1)
    setTranslateX(translateX + moveUnit);
  }

  return (
    <Box position={`relative`} overflow={`hidden`}>
      <Bar />
      <Box display={`flex`} justifyContent={`space-between`} alignItems={`end`}>
        <TitleBox mt={`10px`} lineHeight={`55px`}>{props.title}</TitleBox>
        <ActionButton mr={{md : `140px`, xs :`20px`}} gap={`10px`}>
          <ArrowButton pl={`5px`} onClick={handleRightCarousel} style={{ visibility: count !== 0 ? 'visible' : 'hidden' }}>
            <ArrowBackIosIcon width={`24px`} height={`24px`} />
          </ArrowButton>
          <ArrowButton onClick={handleLeftCarousel} style={{ visibility: count !== props.data.length - limitCount ? 'visible' : 'hidden' }}>
            <ArrowForwardIosIcon />
          </ArrowButton>
        </ActionButton>
      </Box>
      <Box mt={`10px`}>{props.subtitle}</Box>
      <CarouselContainer gap={`20px`} mt={`23px`}>
        {
          props.data.map((row: any, index) => {
            return (
              <CarouselItem key={index} style={{ transform: `translateX(${translateX}px)` }}>
                <Button variant="contained" sx={{ '&:hover': { background: 'white' }, padding: '6px 8px', background: 'white', borderRadius: '6px', color: '#1C1C1C', position: 'absolute', top: '26px', left: '26px', fontSize: '9px' }}>Promoted</Button>
                <img src={row.img} alt='' style={{ width: '100%' }} />
                <FoodTitle>{row.name}</FoodTitle>
                <Box fontSize={`14px`} fontWeight={`400`} lineHeight={`22px`} >{row.description}</Box>
                <Box display={`flex`} gap={`20px`} alignItems={`center`} >
                  <Box display={`flex`} gap={`4px`} alignItems={`center`}>
                    <img src="/assets/images/utils/star.svg" alt='' />
                    <Box>{row.rating}</Box>
                  </Box>
                  <Dot />
                  <Box>{row.estimate}</Box>
                  <Dot />
                  <Box>{row.cost}</Box>
                </Box>
                <Divider />
                <Box display={`flex`} alignItems={`center`} gap={`8px`}>
                  <img src="/assets/images/utils/Discount.svg" alt="" />
                  <Box fontWeight={`500`} fontSize={`14px`} lineHeight={`24px`}>{row.discount}</Box>
                </Box>
              </CarouselItem>
            )
          })
        }

      </CarouselContainer>
    </Box>
  )
}

const TitleBox = styled(Box)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 35px;
  letter-spacing: 0.186984px;
  color: #1B1D21;
  width : 410px ;
  @media screen and (min-width : 1200px){
    font-size: 38px;
    line-height: 55px;
  }
`

const Bar = styled(Box)`
  width : 40px;
  height : 2px;
  background: #1B1D21;
`

const CarouselContainer = styled(Box)`
  display : flex ;
`

const CarouselItem = styled(Box)`
  transition: 0.5s;
  background: #FFFFFF;
  border-radius: 12px;
  width : 372px ;
  min-width : 372px;
  padding : 16px;
  position : relative;
  gap : 16px ;
  display: flex;
  flex-direction: column;
  position : relative ;
`
const FoodTitle = styled(Box)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.0984127px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.9;
`

const Dot = styled(Box)`
  width : 4px ;
  height : 4px ;
  border-radius : 10px ;
  background : black ;
  opacity : 0.5;
`
const ActionButton = styled(Box)`
  display : flex ;
`

const ArrowButton = styled(Box)`
  display : flex;
  align-items : center ;
  justify-content : center ;
  width : 50px ;
  height : 50px ;
  color : black ;
  border-radius : 50px ;
  cursor : pointer ;
  &:hover {
    background : #FD6B22;
    color : white ;
  }
`

export default HomeCarousel;