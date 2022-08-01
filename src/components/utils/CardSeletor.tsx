import { Box } from "@mui/material"
import styled from "styled-components"

interface CardSelectorProps {
  active: boolean
  title: string
  description?: string
  onClick: () => void
}

const CardSelector = (props: CardSelectorProps) => {
  return (
    <CardSelectorContainer active={props.active} onClick={props.onClick}>
      <Box>
        {props.title}
      </Box>
      <Box>
        {props.description}
      </Box>
    </CardSelectorContainer>
  )
}

interface CardSelectorContainerProps {
  active: boolean
}

const CardSelectorContainer = styled(Box) <CardSelectorContainerProps>`
  display : flex ;
  flex-direction : column ;
  gap : 8px;
  padding : 16px;
  width : unset ;
  background: #FDFDFD;
  border: 1px solid ${({ active }) => active === true ? '#FD6B22' : '#ECF1F6'};
  border-radius: 10px;
  @media screen and (min-width : 1200px) {
    width : 386px;
  }
  >div:first-of-type {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #1B1D21;
  }
  >div:last-of-type {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #78828A;
  }
`

export default CardSelector;