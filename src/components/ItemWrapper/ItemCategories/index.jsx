import React from 'react'
import styled from 'styled-components'

const CategoriesWrapper = styled.div`
  display: flex;
`

const Category = styled.div`
  padding: 7px 5px;
  border-radius: 5px;
  background: #eef7f6;
  color: #639b9a;
  font-size: 12px;
  cursor: pointer;
  font-weight: 600;

  &:not(:last-child) {
    margin-right: 15px;
  }
`

export const ItemCategories = () => {
  return (
    <CategoriesWrapper>
      <Category>Frontend</Category>
      <Category>Backend</Category>
    </CategoriesWrapper>
  )
}
