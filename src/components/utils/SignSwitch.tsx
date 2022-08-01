import { Box } from "@mui/material";
import styled from "styled-components";

interface SignSwitchProps {
  active: boolean
  title: string
  description?: string
  onClick : () => void
}

const SignSwitch = (props: SignSwitchProps) => {
  return (
    <SignSwitchContainer onClick={props.onClick}>
      <Box >
        <Box>
          {props.active === true ? (
            <img src="/assets/images/utils/switch-active.svg" alt="" />
          ) : (
            <img src="/assets/images/utils/switch-unactive.svg" alt="" />
          )}
        </Box>
        <Box fontSize={`14px`} fontWeight={`500`} lineHeight={`17px`} color={props.active === true ? `#1B1D21` : `#78828A`}>
          {props.title}
        </Box>
      </Box>
      {props.description && (<Box pl={`30px`} fontSize={`12px`} fontWeight={`400`} mt={`7px`} lineHeight={`14.63px`}>
        {props.description}
      </Box>)}
    </SignSwitchContainer>
  )
}

const SignSwitchContainer = styled(Box)`
  display : flex ;
  flex-direction : column ;
  
  background: #FDFDFD;
  border: 1px solid #ECF1F6;
  border-radius: 10px;
  padding : 17px;
  cursor : pointer ;
  >div:first-of-type {
    display : flex ;
    align-items : center ;
    gap : 9px;
    >div:first-of-type {
      >img {
        display : flex ;
        align-items : center ;
      }
    }
  }
`

export default SignSwitch;