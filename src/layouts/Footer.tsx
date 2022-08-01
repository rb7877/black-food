import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Box, Button } from '@mui/material'
import Search from 'components/utils/Search';
import { useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
    const [isRestaurantSignUp, setIsRestaurantSignUp] = useState(-1)
    const [currentTopBarType, setCurrentTopBarType] = useState(-1)

    const location = useLocation();
    useEffect(() => {
        setCurrentTopBarType(-1)
        setIsRestaurantSignUp(-1)
        if (location.pathname.indexOf('/restaurant') !== -1) {
            setCurrentTopBarType(1);
            if(location.pathname.indexOf('/restaurant/register') === -1){
                setIsRestaurantSignUp(1)
            }
        }
    }, [location.pathname])
    return (
        <>
            <StyledContainer style={{ display: (isRestaurantSignUp === -1) ? 'block' : 'none' }}>
                <FooterContainer>
                    <LogoContainer>
                        <Box display={`flex`} gap={`10px`}>
                            <img src="/assets/images/utils/pok.svg" alt="" />
                            <img src="/assets/images/utils/just Eat.svg" alt="" />
                        </Box>
                        <Box display={`flex`} alignItems={`center`} gap={`16px`} mt={`15px`}>
                            <img src="/assets/images/utils/facebook.svg" alt="face book link" />
                            <img src="/assets/images/utils/Twitter logo.svg" alt="twitter" />
                            <img src="/assets/images/utils/linkedin.svg" alt="linkedin" />
                            <img src="/assets/images/utils/instagram logo.svg" alt="instagram" />
                        </Box>
                        <Box mt={`32px`} fontSize={`14px`}>
                            {`Download the app by clicking the link below :`}
                        </Box>
                        <Box display={`flex`} gap={`17px`} mt={`20px`}>
                            <Button sx={{ padding: 0, width: '130px', height: '40px', borderRadius: 2 }}><img src="/assets/images/utils/googleplay-dark.png" style={{ width: '100%', height: '100%', borderRadius: '8px' }} alt="" /></Button>
                            <Button sx={{ padding: 0, width: '130px', height: '40px', borderRadius: 2 }}><img src="/assets/images/utils/app-store-dark.png" style={{ width: '100%', height: '100%', borderRadius: '8px' }} alt="" /></Button>
                        </Box>
                    </LogoContainer>
                    <InfoContainer>
                        <Box>
                            <Box fontSize={`14px`} fontWeight={`700`} >{`Customer Service`}</Box>
                            <Box mt={`16px`} display={`flex`} gap={`10px`} flexDirection={`column`}>
                                <Box>{`Contact Us`}</Box>
                                <Box>{`Log in`}</Box>
                                <Box>{`Sign Up`}</Box>
                                <Box>{`My Account`}</Box>
                                <Box>{`Mobile Apps`}</Box>
                                <Box>{`Redeem a Giftcard`}</Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box fontSize={`14px`} fontWeight={`700`} >{`Top Cuisines`}</Box>
                            <Box mt={`16px`} display={`flex`} gap={`10px`} flexDirection={`column`}>
                                <Box>{`Chinese`}</Box>
                                <Box>{`Fish & Chips`}</Box>
                                <Box>{`Indian`}</Box>
                                <Box>{`Pizza`}</Box>
                                <Box>{`Italian`}</Box>
                                <Box>{`Kebabs`}</Box>
                                <Box>{`Sushi`}</Box>
                                <Box>{`View All Cuisines`}</Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box fontSize={`14px`} fontWeight={`700`} >{`Top Brands`}</Box>
                            <Box mt={`16px`} display={`flex`} gap={`10px`} flexDirection={`column`}>
                                <Box>{`McDonald’s`}</Box>
                                <Box>{`KFC`}</Box>
                                <Box>{`Burger King`}</Box>
                                <Box>{`Papa John’s`}</Box>
                                <Box>{`Greggs`}</Box>
                                <Box>{`Subway`}</Box>
                                <Box>{`Dominos`}</Box>
                                <Box>{`View All Brands`}</Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box fontSize={`14px`} fontWeight={`700`} >{`About us`}</Box>
                            <Box mt={`16px`} display={`flex`} gap={`10px`} flexDirection={`column`}>
                                <Box>{`You can contact Us to send email to us`}</Box>
                                <Search
                                    height={40}
                                    placeholder="Your Email"
                                    buttonwidth={32}
                                    button={(<img src="/assets/images/utils/triangle.svg" alt="" />)}
                                />
                            </Box>
                        </Box>
                    </InfoContainer>
                </FooterContainer>
            </StyledContainer>
            <CopyContainer style={{ display: (currentTopBarType !== -1 && isRestaurantSignUp === -1) ? 'block' : 'none' }}>
                <CopyMain>
                    <Box>{`© Copyright 2022 JustEat™`}</Box>
                    <Box display={`flex`} alignItems={`center`} gap={`16px`}>
                        <img src="/assets/images/utils/facebook.svg" alt="" />
                        <img src="/assets/images/utils/Twitter logo.svg" alt="" />
                        <img src="/assets/images/utils/linkedin.svg" alt="" />
                        <img src="/assets/images/utils/instagram logo.svg" alt="" />
                    </Box>
                </CopyMain>
            </CopyContainer>
        </>
    );
}

const StyledContainer = styled(Box)`
    width : 100% ;
    background: rgb(207 217 228 / 40%);
`

const FooterContainer = styled(Box)`
    width : ${window.innerWidth >= 1440 ? '1440px' : '100%'};
    padding-left : ${window.innerWidth >= 1440 ? '150px' : '50px'};
    padding-right : ${window.innerWidth >= 1440 ? '140px' : '50px'};
    padding-top : 34.5px;
    padding-bottom : 60px;
    margin : auto ;
    display : flex ;
    flex-direction : column;
    @media screen and (min-width : 1200px) {
        flex-direction : row;
        justify-content: space-between ;
    }
`

const CopyContainer = styled(Box)`
    width : 100% ;
    background: #F8FAFB;
`

const CopyMain = styled(Box)`
    width : ${window.innerWidth >= 1440 ? '1440px' : '100%'};
    padding-left : ${window.innerWidth >= 1440 ? '140px' : '50px'};
    padding-right : ${window.innerWidth >= 1440 ? '140px' : '50px'};
    display : flex ;
    justify-content: space-between ;
    height : 74px;
    align-items : center ;
    margin : auto ;
`

const LogoContainer = styled(Box)`
    display: flex ;
    flex-direction : column ;
`

const InfoContainer = styled(Box)`
    display : flex ;
    flex-wrap: wrap;
    margin-top : 30px;
    gap : 20px;
    @media screen and (min-width : 1200px){
        margin-top : 0px ;
        gap : 60px;
    }
`

export default Footer;