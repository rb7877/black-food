
import { Box, Button } from "@mui/material";
import styled from "styled-components";
import parse from "html-react-parser"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
interface SignCardProps {
  children?: React.ReactNode,
  title: string,
  subtitle?: string,
  description?: string,
  last?: boolean,
  nextStep?: () => void,
  prevStep?: () => void,
  final?: boolean
}

const SignCard = (props: SignCardProps) => {
  return (
    <SignContainer>
      <Box>
        <img src="/assets/images/utils/circle-1.svg" alt="" />
      </Box>
      <Box>
        <img src="/assets/images/utils/circle-2.svg" alt="" />
      </Box>
      <HeaderContainer>
        <Box>
          {`JustEat`}
        </Box>
        <Box>
          {`Bussiness`}
        </Box>
      </HeaderContainer>
      <TitleContainer>
        {props.title}
      </TitleContainer>
      <CardContainer position={`relative`}>
        <Box>
          {props.subtitle && parse(props.subtitle)}
        </Box>
        <Box mt={`16px`}>
          {props.description && parse(props.description)}
        </Box>
        <Box mt={`24px`}>
          {props.children}
        </Box>
        {!props.final && (<NextActionContainer>
          <Button variant="contained"
            sx={{
              '&:hover': { background: '#EEF3F9' },
              padding: '6px',
              minWidth: '50px',
              width: '50px',
              height: '50px',
              background: '#EEF3F9',
              borderRadius: '50px',
              color: '#1C1C1C'
            }} onClick={props.prevStep} disabled={!props.prevStep ? true : false}><ArrowBackIosNewIcon /></Button>
          <Button sx={{
            '&:hover': { background: '#FD6B22' },
            background: '#FD6B22',
            borderRadius: '35px',
            color: 'white',
            padding: '15px 27px',
            width: '150px',
            height: '50px',
            fontSize: '14px'
          }} onClick={props.nextStep}>Next</Button>
        </NextActionContainer>)}
        {props.final && (<FinalVisitButton>Visit JustEat</FinalVisitButton>)}
      </CardContainer>
    </SignContainer>
  )
}

const SignContainer = styled(Box)`
  background : #F8FAFB;
  position : relative;
  min-height : 100vh;
  display: flex;
  flex-direction : column ;
  justify-content: center;
  align-items: center;
  gap : 20px;
  >div:first-of-type {
    display : none ;
    @media screen and (min-width : 1200px) {
      display : block ;
      position : absolute ;
      top : 0px ;
      right : 0px;
    }
  }
  >div:nth-of-type(2) {
    display : none ;
    @media screen and (min-width : 1200px) {
      display : block ;
      position : absolute ;
      bottom : 0px ;
      left : 0px;
    }
  }
`

const TitleContainer = styled(Box)`
  width: 335px;
  @media screen and (min-width : 500px) {
    margin-top : 25px ;
    width: 450px;
    font-weight: 600;
    font-size: 38px;
    line-height: 55px;
    color: #1B1D21;
  }
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.186984px;
  color: #1F2C37;
`


const CardContainer = styled(Box)`
  width: 335px;
  height: 684px;
  padding: 24px 20px;
  @media screen and (min-width : 500px) {
    width: 450px;
    height: 650px;
    padding : 32px;
    margin-bottom : 105px;
  }
  background: #FFFFFF;
  box-shadow: 0px -8px 104px rgba(0, 0, 0, 0.0860194);
  border-radius: 15px;
  display : flex ;
  flex-direction : column ;
  >div:first-of-type {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content : center ;
    color: #1B1D21;
  }
  >div:nth-of-type(2) {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #78828A;
    display: flex;
    align-items: center;
    justify-content : center ;
    text-align: center;
  } 
`

const HeaderContainer = styled(Box)`
  display : none ;
  @media screen and (min-width : 1200px){
    display : flex ;
    margin-top : 25px;
    gap : 10px ;
    >div:first-of-type {
      font-family: 'Montserrat';
      font-style: italic;
      font-weight: 800;
      font-size: 34.2759px;
      line-height: 49px;
      letter-spacing: 0.168659px;
      color: #000000;
      mix-blend-mode: normal;
    }
    >div:last-of-type {
      
      font-family: 'Montserrat';
      font-style: italic;
      font-weight: 500;
      font-size: 32px;
      line-height: 49px;
      letter-spacing: 0.168659px;
      color: #000000;
      mix-blend-mode: normal;
    }  
  }
  
`

const NextActionContainer = styled(Box)`
  position : absolute ;
  bottom : 32px;
  left : 32px ;
  width : calc(100% - 64px);
  display : flex ;
  justify-content : space-between ;
`

const FinalVisitButton = styled(Box)`
  position : absolute ;
  bottom : 32px;
  left : 32px ;
  cursor : pointer ;
  width : calc(100% - 64px);
  height : 50px;
  background: linear-gradient(0deg, #F8F9FC, #F8F9FC), #FFFFFF;
  border: 1px solid #EEF3F9;
  border-radius: 25px;
  display : flex ;
  align-items : center ;
  text-align : center ;
  justify-content : center ;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.0688889px;
  color: #1B1D21;
  mix-blend-mode: normal;
  &:hover {
    background: linear-gradient(0deg,#ffffff,#F8F9FC),#FFFFFF;
  }
`

export default SignCard;