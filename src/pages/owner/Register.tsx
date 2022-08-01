import { Box } from "@mui/system";
import FAQ from "components/owner/register/FAQ";
import Home from "components/owner/register/Home";
import PartnerWith from "components/owner/register/PartnerWith";
import SignUpStep from "components/owner/register/SignUpStep";
import StepsToGet from "components/owner/register/StepsToGet";
import styled from "styled-components";



const Register = () => {
  return (
    <StyledContainer>
      <Home />
      <PartnerWith />
      <StepsToGet />
       <SignUpStep />
     <FAQ />
    </StyledContainer>   
  )
}

const StyledContainer = styled(Box)`
    display : flex ;
    flex-direction : column ;
`


export default Register;