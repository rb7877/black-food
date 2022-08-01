import { Box } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

import Advertise from 'components/customer/landing/Advertise'
import DeliveryService from 'components/customer/landing/DeliveryService'
import Home from 'components/customer/landing/home'
import DownloadApp from 'components/customer/landing/DownloadApp'

const Landing: React.FC = () => {
    return (
        <StyledContainer>
            <Home />
            <Advertise />
            <DeliveryService />
            <DownloadApp />
        </StyledContainer>
    )
}

const StyledContainer = styled(Box)`
    display : flex ;
    flex-direction : column ;
`

export default Landing