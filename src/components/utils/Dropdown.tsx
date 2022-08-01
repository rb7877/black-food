import { Box } from "@mui/material";
import styled from "styled-components";

interface DropdownProps{
  title : string
  mainlink? : string
  subdata? : any[]
}

const Dropdown = (props : DropdownProps) => {
  
  return (
    <DropdownContainer>
      <Box>
        {props.title}
      </Box>    
    </DropdownContainer>
  )
}

const DropdownContainer = styled(Box)`

`


export default Dropdown;