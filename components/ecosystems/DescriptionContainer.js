import React from 'react'
import styled from 'styled-components'
import Profile from '../organisms/Profile'

const ContentWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const DescriptionContainer = () => {
    
    return(
      <ContentWrapper>
        <Profile />
      </ContentWrapper>
    )
}

export default DescriptionContainer