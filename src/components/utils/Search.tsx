import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface SearchProps {
  icon?: any
  placeholder?: string
  button?: any
  onClick?: () => void
  width?: number
  height?: number
  buttonwidth?: number
}

const Search = (props: SearchProps) => {
  return (
    <SearchContainer cwidth={props.width} cheight={props.height}>
      <Box display={`flex`} alignItems={`center`} width={`calc(100% - ${props.buttonwidth ? (props.buttonwidth + 25) : 80}px)`} ml={`15px`}>
        {props.icon && props.icon}
        <InputContainer placeholder={props.placeholder} />
      </Box>
      <SearchButton style={{ height: props.height ? `${props.height - 8}px` : 'unset', width: props.buttonwidth ? `${props.buttonwidth}px` : 'unset' }}>{props.button}</SearchButton>
    </SearchContainer>
  )
}

interface SearchContainerProps {
  cwidth?: number
  cheight?: number
}

const SearchContainer = styled(Box) <SearchContainerProps>`
    background: white;
    display: flex;
    align-items: center;
    justify-content : space-between ;
    gap: 8px;
    border-radius: 42px;
    padding: 4px;
    width : ${({ cwidth }) => cwidth ? (cwidth === -1 ? '100%' : cwidth + 'px') : '100%'};
    height : ${({ cheight }) => cheight ? (cheight) : '50'}px;
    max-width : 500px;
`
const InputContainer = styled.input`
  outline : none ;
  border : none;
  width : 100%;
`

const SearchButton = styled.button`
  background: #FD6B22;
  border-radius: 35px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.0688889px;
  color: #FFFFFF;
  mix-blend-mode: normal;
  border: none;
  display : flex ;
  align-items : center ;
  text-align: center ;
  justify-content : center ;
  &:hover {
    background : #cc4c0c;
  }
`
export default Search;