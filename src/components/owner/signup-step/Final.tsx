import { Box } from "@mui/material";
import SignCard from "components/utils/SignCard";
import styled from "styled-components";

const Final = () => {

  return (
    <Box>
      <SignCard
        title={`Sign UP`}
        subtitle={`Request Submitted`}
        description="we’ve got your registration request, will contact you soon!"
        final={true}
      >
        <FinalContainer>
          <Box>
            <img src="/assets/images/utils/check.svg" alt="" />
          </Box>
          <Box>
            {`Congratulations`}
          </Box>
          <Box>
            Hello@email.com
          </Box>
        </FinalContainer>
      </SignCard>
    </Box>
  )
}

const FinalContainer = styled(Box)`
  display : flex ;
  flex-direction : column ;
  justify-content : center ;
  align-items : center ;
  margin-top : 71px;
  >div:nth-of-type(2) {
    margin-top : 71px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: -0.06624px;
    color: #17C364;
  }
  >div:nth-of-type(3) {
    margin-top : 16px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    color: #78828A;
  }
`

export default Final;