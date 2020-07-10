import React, { useEffect } from 'react'
import styled from 'styled-components'
import { ItemWrapper } from '../ItemWrapper';
import * as actions from '../../store/vacancies/actions'
import { useDispatch, useSelector } from 'react-redux';
import { SearchBlock } from '../SearchBlock';

const StyledWrapper = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 100px);
  background: #f0fafb;
  padding: 70px 20px;
`

export const ContentWrapper = () => {

  const dispatch = useDispatch()
  const vacancies = useSelector(state => state.vacanciesReducer.filteredVacancies)
  const searchingCategories = useSelector(state => state.vacanciesReducer.searchingCategories)

  useEffect(() => {
    dispatch(actions.fetchVacancies())
  }, [])

  return (
    <StyledWrapper>
      {
        !!searchingCategories.length && <SearchBlock />
      }
      {
        !!vacancies.length && vacancies.map(v => <ItemWrapper 
          key={v.id}
          company={v.company}
          position={v.position}
          postedAt={v.postedAt}
          contract={v.contract}
          location={v.location}
          role={v.role}
          level={v.level}
          languages={v.languages}
          tools={v.tools}
          isNew={v.new}
          featured={v.featured}
        />)
      }
    </StyledWrapper>
  )
}
