import { Box } from "@mui/material";
import styled from "styled-components";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  background: 'transparent',
  border: `1px solid none`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));
const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'transparent',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: '20px',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: '20px',
  background: 'transparent',
}));
const FAQ = () => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <MainContainer>
      <StepsContainer >
        <TitleBox  data-aos="zoom-in-up">
          <Box color={`#1B1D21`} fontSize={`20px`} fontWeight={500} lineHeight={`27px`}>
            {`FAQ`}
          </Box>
          <Box color={`#1B1D21`} fontSize={{md : `38px`, xs : `24px`}} fontWeight={600} lineHeight={{md : `55px`, xs : `30px`}}>
            {`Frequently Asked Questions`}
          </Box>
          <Box color={`#1B1D21`} fontSize={{md : `20px`, xs : `14px`}} fontWeight={400} lineHeight={{md : `32px`, xs : `27px`}}>
            {`A curated list of the most commonly asked questions about pricing & plans`}
          </Box>
        </TitleBox>
        <Box mt={`90px`} width={`100%`} data-aos="fade-up"  data-aos-delay="500">

          <Accordion sx={{ background: 'transparent', borderBottom: '1px solid red' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary sx={{ '.MuiSvgIcon-root': { color: expanded === 'panel1' ? '#FD6B22' : '#1B1D21' }, borderBottom: '1px solid rgba(0, 0, 0, .125)', color: expanded === 'panel1' ? '#FD6B22' : '#1B1D21' }} aria-controls="panel1d-content" id="panel1d-header">
              <Typography>{`How much does it cost to join and how much commission will I pay?`}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography ml={{md : `80px`, xs : `30px`}}>
                {`You don’t need to have your FSA rating before you join Just Eat, but you do need to register your business with the Food Standards Agency (FSA) or Food Standards Scotland (FSS), as well as with your local council, so your restaurant can be inspected and given a hygiene rating as soon as possible. In England and Wales you will need to get a food hygiene rating of 3 or more from the FSA for your restaurant to appear on Just Eat. In Scotland you will need to get a Pass rating from FSS.Find out more about registering your business with the FSA or FSS`}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ background: 'transparent' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary sx={{ '.MuiSvgIcon-root': { color: expanded === 'panel2' ? '#FD6B22' : '#1B1D21' }, borderBottom: '1px solid rgba(0, 0, 0, .125)', color: expanded === 'panel2' ? '#FD6B22' : '#1B1D21' }} aria-controls="panel2d-content" id="panel2d-header">
              <Typography>{`My restaurant is a van/unit. Can I still join Just Eat?`}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography ml={{md : `80px`, xs : `30px`}}>
                {`You don’t need to have your FSA rating before you join Just Eat, but you do need to register your business with the Food Standards Agency (FSA) or Food Standards Scotland (FSS), as well as with your local council, so your restaurant can be inspected and given a hygiene rating as soon as possible. In England and Wales you will need to get a food hygiene rating of 3 or more from the FSA for your restaurant to appear on Just Eat. In Scotland you will need to get a Pass rating from FSS.Find out more about registering your business with the FSA or FSS`}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ background: 'transparent' }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary sx={{ '.MuiSvgIcon-root': { color: expanded === 'panel3' ? '#FD6B22' : '#1B1D21' }, borderBottom: '1px solid rgba(0, 0, 0, .125)', color: expanded === 'panel3' ? '#FD6B22' : '#1B1D21' }} aria-controls="panel3d-content" id="panel3d-header">
              <Typography>{`I want to join Just Eat but I don’t have any drivers. Can you help?`}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography ml={{md : `80px`, xs : `30px`}}>
                {`You don’t need to have your FSA rating before you join Just Eat, but you do need to register your business with the Food Standards Agency (FSA) or Food Standards Scotland (FSS), as well as with your local council, so your restaurant can be inspected and given a hygiene rating as soon as possible. In England and Wales you will need to get a food hygiene rating of 3 or more from the FSA for your restaurant to appear on Just Eat. In Scotland you will need to get a Pass rating from FSS.
Find out more about registering your business with the FSA or FSS`}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ background: 'transparent' }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary sx={{ '.MuiSvgIcon-root': { color: expanded === 'panel4' ? '#FD6B22' : '#1B1D21' }, borderBottom: '1px solid rgba(0, 0, 0, .125)', color: expanded === 'panel4' ? '#FD6B22' : '#1B1D21' }} aria-controls="panel3d-content" id="panel4d-header">
              <Typography>{`I want to join Just Eat but I don’t have any drivers. Can you help?`}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography ml={{md : `80px`, xs : `30px`}}>
                {`You don’t need to have your FSA rating before you join Just Eat, but you do need to register your business with the Food Standards Agency (FSA) or Food Standards Scotland (FSS), as well as with your local council, so your restaurant can be inspected and given a hygiene rating as soon as possible. In England and Wales you will need to get a food hygiene rating of 3 or more from the FSA for your restaurant to appear on Just Eat. In Scotland you will need to get a Pass rating from FSS.
Find out more about registering your business with the FSA or FSS`}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ background: 'transparent' }} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary sx={{ '.MuiSvgIcon-root': { color: expanded === 'panel5' ? '#FD6B22' : '#1B1D21' }, borderBottom: '1px solid rgba(0, 0, 0, .125)', color: expanded === 'panel5' ? '#FD6B22' : '#1B1D21' }} aria-controls="panel3d-content" id="panel5d-header">
              <Typography>{`I want to join Just Eat but I don’t have any drivers. Can you help?`}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography ml={{md : `80px`, xs : `30px`}}>
                {`You don’t need to have your FSA rating before you join Just Eat, but you do need to register your business with the Food Standards Agency (FSA) or Food Standards Scotland (FSS), as well as with your local council, so your restaurant can be inspected and given a hygiene rating as soon as possible. In England and Wales you will need to get a food hygiene rating of 3 or more from the FSA for your restaurant to appear on Just Eat. In Scotland you will need to get a Pass rating from FSS.
Find out more about registering your business with the FSA or FSS`}
              </Typography>
            </AccordionDetails>
          </Accordion>
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
  padding-bottom : 120px ;
`

const TitleBox = styled(Box)`
  display : flex ;
  flex-direction : column ;
  align-items : center ;
  justify-content : center ;
  width : 335px;
  margin: auto;
  text-align: center;
  @media screen and (min-width : 1200px){
    width : unset ;
  }
`

export default FAQ;