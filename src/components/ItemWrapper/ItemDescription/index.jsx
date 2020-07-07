import React from 'react'
import styled from 'styled-components'

const StyledDescription = styled.div`
  display: flex;
`

const ItemImg = styled.img`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  background: red;
  margin-right: 25px;
`

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const CompanyTitle = styled.h4`
  font-size: 12px;
  color: #679b99;
`

const CompanyPosition = styled.h5`
  font-size: 18px;
  color: #2c3230;
`

const VacancyInformation = styled.div`
  font-size: 14px;
  color: #9fa1a0;

  & span {
    margin-right: 30px;
    position: relative;

    &:not(:last-child):after {
      content: '';
      position: absolute;
      top: 50%;
      right: -15px;
      height: 4px;
      width: 4px;
      border-radius: 50%;
      background: #9fa1a0;
    }
  }
`

export const ItemDescription = () => {
  return (
    <StyledDescription>
      <ItemImg />
      <DescriptionWrapper>
        <CompanyTitle> 
          { 'Photosnap' }
        </CompanyTitle>
        <CompanyPosition> 
          { 'Senior Frontend Developer' }
        </CompanyPosition>
        <VacancyInformation> 
          <span>{ '1d ago' }</span>
          <span>{ 'Full Time' }</span>
          <span>{ 'USA only' }</span>
        </VacancyInformation>
      </DescriptionWrapper>
    </StyledDescription>
  )
}
