import { Box } from "@mui/material"
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoTitle>
        {`JustEat`}
      </LogoTitle>
      <Container>

      </Container>
    </NavbarContainer>
  )
}

const NavbarContainer = styled(Box)`
  max-width : 300px;
  width : 250px;
  background : black;
  height : 100vh ;
`

const LogoTitle = styled(Box)`
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 800;
  font-size: 34.2759px;
  line-height: 49px;
  letter-spacing: 0.168659px;
  color: #fff;
  mix-blend-mode: normal;
  margin-left : 20px ;
  margin-top : 20px;
`

const Container = styled(Box)`
  color : #fff ;
`

export default Navbar;
