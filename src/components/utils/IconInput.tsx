import { Box } from "@mui/material"
import styled from "styled-components"

interface IconInputProps {
  onChange? : (event : any) => void
  placeHolder? : string
  icon? : any 
  width? : number
  height? : number
}

const IconInput = (props : IconInputProps) => {
  return (
    <IconInputContainer>
      {props.icon && (
        props.icon
      )}
      <input placeholder={`${props.placeHolder ? props.placeHolder : ''}`} onChange={props.onChange}/>
    </IconInputContainer>
  )
}

const IconInputContainer = styled(Box)`
  background: #FDFDFD;
  border: 1px solid #ECF1F6;
  border-radius: 10px;
  padding : 14px ;
  display : flex ;
  gap : 10px;
  align-items : center ;
  >input {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #78828A;
    outline: none;
    border: none;
    width: calc(100%);
  }
`

export default IconInput;