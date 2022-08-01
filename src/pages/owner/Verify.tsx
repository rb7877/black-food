import Box from "@mui/material/Box";
import Navbar from "components/owner/navbar";
import styled from "styled-components";


const Verify = () => {
  return (
    <RestaurantOwnerContainer>
      <Navbar />
      
    </RestaurantOwnerContainer>
  )
}

const RestaurantOwnerContainer = styled(Box)`
  display : flex ;
`

export default Verify;