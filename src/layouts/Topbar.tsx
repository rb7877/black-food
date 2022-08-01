import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Box, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation } from 'react-router-dom';
const menus = [
    {
        title: 'For your',
        link: '',
    },
    {
        title: 'Deliver with Just Eat',
        link: '',
    },
    {
        title: 'Help',
        link: '',
    },
    {
        title: 'Loging',
        link: '',
    }
]

declare let window : any;

const Topbar: React.FC = () => {

    const [mobileHeight, setMobileHeight] = useState(0);
    const [currentTopBarType, setCurrentTopBarType] = useState(-1)
    const [isRestaurantSignUp, setIsRestaurantSignUp] = useState(-1)
    const location = useLocation();
    const handleClose = () => {
        setMobileHeight(0);
    }

    const handleOpen = () => {
        setMobileHeight(window.innerHeight);
    }

    useEffect(() => {
        setCurrentTopBarType(-1)
        setIsRestaurantSignUp(-1)
        if (location.pathname.indexOf('/restaurant') !== -1) {
            setCurrentTopBarType(1);
            if(location.pathname.indexOf('/restaurant/register') === -1){
                setIsRestaurantSignUp(1)
            }
        }
        // if (location.pathname.indexOf('/restaurant/signup') !== -1 || location.pathname.indexOf('/restaurant/signin') !== -1) {
        //     setIsRestaurantSignUp(1)
        // }
    }, [location.pathname])


    return (
        <Box>
            <StyledContainer style={{ display: currentTopBarType !== -1 ? 'none' : 'block' }}>
                <HeaderMenu>
                    <LogoTitle>
                        <img src="/assets/images/utils/just Eat.svg" alt="" />
                    </LogoTitle>
                    <Box display={`flex`} mr={`60px`} alignItems={`center`}>
                        <Box display={`flex`} gap={`50px`}>
                            {
                                menus.map((row: any, index) => {
                                    return (
                                        <Box key={index} fontSize={`16px`} fontWeight={`400`} style={{ cursor: 'pointer' }}>{row.title}</Box>
                                    )
                                })
                            }
                        </Box>
                        <Box display={`flex`} gap={`16px`} ml={`104px`}>
                            <Button variant="contained" sx={{ '&:hover': { background: 'white' }, padding: '6px', minWidth: '50px', width: '55px', height: '55px', background: 'white', borderRadius: '50px', color: '#1C1C1C' }}><img src="/assets/images/utils/basket.svg" alt="" /></Button>
                            <Button sx={{ '&:hover': { background: '#FD6B22' }, background: '#FD6B22', borderRadius: '35px', color: 'white', padding: '15px 27px', fontSize: '14px' }}>Download App</Button>
                        </Box>
                    </Box>
                </HeaderMenu>
                <Box>
                    <MobileMenu>
                        <Box onClick={handleOpen}>
                            <MenuIcon />
                        </Box>
                        <Box display={`flex`} gap={`20px`}>
                            <Button variant="contained" sx={{ '&:hover': { background: 'white' }, padding: '6px', minWidth: '35px', width: '35px', height: '35px', background: 'white', borderRadius: '50px', color: '#1C1C1C' }}><img src="/assets/images/utils/basket.svg" alt="" /></Button>
                            <Button sx={{ '&:hover': { background: '#FD6B22' }, background: '#FD6B22', borderRadius: '50px', color: 'white', padding: '6px', minWidth: '35px', width: '35px', height: '35px' }}><FileDownloadIcon /></Button>
                        </Box>

                    </MobileMenu>
                </Box>
                <MobileMenuContainer height={`${mobileHeight}px`} padding={`${mobileHeight === 0 ? '0px' : '50px'}`}>
                    <Box position={`fixed`} top={`50px`} right={`100px`} color={`#FFF`} style={{ display: mobileHeight === 0 ? 'none' : 'block' }} onClick={handleClose}>
                        <CloseIcon />
                    </Box>
                    <Box display={`flex`} gap={`50px`} flexDirection={`column`}>
                        {
                            menus.map((row: any, index) => {
                                return (
                                    <Box key={index} fontSize={`16px`} fontWeight={`400`} style={{ cursor: 'pointer' }}>{row.title}</Box>
                                )
                            })
                        }
                    </Box>
                </MobileMenuContainer>
            </StyledContainer>
            <StyledContainer style={{ display: (currentTopBarType !== -1 && isRestaurantSignUp === -1) ? 'block' : 'none' }}>
                <Box display={`flex`} justifyContent={`space-between`}>
                    <LogoTitle style={{color : 'white'}}>
                        {`JustEat`}
                    </LogoTitle>
                    <Box display={{ md : `flex`, xs : `none`}} mr={`60px`} alignItems={`center`}>
                        <Box display={`flex`} gap={`16px`} ml={`104px`}>
                            <Link to="/restaurant/signin"> <Button variant="outlined" sx={{'&:focus': { border : '1px solid #BEC3CA' }, borderRadius: '25px', border : '1px solid #BEC3CA', color: 'white', width: '100px', height: '50px',padding: '15px 27px', fontSize: '14px' , textTransform : 'none'}}>Login</Button></Link>
                            <Button sx={{ '&:hover': { background: '#FD6B22' }, background: '#FD6B22', borderRadius: '25px', color: 'white', width: '160px', height: '50px',padding: '15px 27px', fontSize: '14px' , textTransform : 'none'}}>Register</Button>
                        </Box>
                    </Box>
                </Box>
            </StyledContainer>
        </Box>
    );
}

const StyledContainer = styled(Box)`
    position : absolute ;
    top : 25px;
    left : 0px ;
    color : black;
    z-index : 9999999;
    width : 100%;
`

const LogoTitle = styled(Box)`
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 800;
    font-size: 34.2759px;
    line-height: 49px;
    letter-spacing: 0.168659px;
    color: #000000;
    mix-blend-mode: normal;
    margin-left : 50px ;
`

const MobileMenu = styled(Box)`
    color : #FD6B22;
    display : flex ;
    justify-content : space-between ;
    align-items : center ;
    padding : 50px;
    padding-top : 0px ;
    @media screen and (min-width : 1200px) {
        display : none ;
    }

`

const MobileMenuContainer = styled(Box)`
    display : flex ;
    flex-direction : column;
    align-items : center ;
    transition : 0.5s;
    overflow: hidden;
    justify-content: start;
    text-align: center;
    width: 100%;
    margin-right : 60px;
    position : fixed ;
    top : 0px ;
    background: #FD6B22;
    color : #FFFFFF;
`

const HeaderMenu = styled(Box)`
    display : none ;
    @media screen and (min-width : 1200px ){
        align-items : center ;
        justify-content : space-between ;
        display : flex;
    }
`

export default Topbar;