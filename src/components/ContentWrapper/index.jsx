import React from 'react'
import styled from 'styled-components'
import { ItemWrapper } from '../ItemWrapper';

const StyledWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 100px);
  background: #f0fafb;
  padding: 70px 20px;
`

export const ContentWrapper = () => {
  return (
    <StyledWrapper>
      <ItemWrapper />
      <ItemWrapper />
    </StyledWrapper>
  )
}
