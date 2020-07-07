import React from 'react'
import styled from 'styled-components'
import { ItemDescription } from './ItemDescription';
import { ItemCategories } from './ItemCategories';

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 150px;
  max-width: 1100px;
  width: 100%;
  background: #ffffff;
  border-radius: 8px;
  margin-bottom: 25px;
  box-shadow: 0px 7px 20px -5px rgba(0, 0, 0, .25);
  padding: 25px 40px;
`

export const ItemWrapper = () => {
  return (
    <StyledItem>
      <ItemDescription />
      <ItemCategories />
    </StyledItem>
  )
}
