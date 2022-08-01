import { Box } from "@mui/material";
import styled from "styled-components";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";

interface PopularCarouselProps {
  data: any[],
  title: string,
  subtitle: string,
}


const PopularCarousel = (props: PopularCarouselProps) => {
  const [translateX, setTranslateX] = useState(0);
  const [count, setCount] = useState(0);
  const moveUnit = 231;
  const limitCount = window.innerWidth > 1200 ? 5 : Math.floor(window.innerWidth / moveUnit);
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
          <ArrowButton pl={`5px`} onClick={handleRightCarousel} style={{visibility : count !== 0 ? 'visible' : 'hidden'}}>
            <ArrowBackIosIcon width={`24px`} height={`24px`} />
          </ArrowButton>
          <ArrowButton onClick={handleLeftCarousel} style={{visibility : count !== props.data.length - limitCount ? 'visible' : 'hidden'}}>
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
                <img src={row.img} alt='' style={{ width: '100%' }} />
                <FoodTitle>{row.name}</FoodTitle>
                <Box width={`100%`} justifyContent={`center`} alignItems={`center`} display={`flex`} gap={`5px`} color={`#FD6B22`} mt={`-15px`}>
                  <Box fontSize={`14px`} textAlign={`center`} fontWeight={`500`}>{`See more`}</Box>
                  <ArrowForwardIosIcon sx={{ width: '12px' }} />
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
  border-radius: 12px;
  width : 211px ;
  min-width : 211px;
  position : relative;
  gap : 20px ;
  display: flex;
  flex-direction: column;
  position : relative ;
  align-items: center;
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

export default PopularCarousel;