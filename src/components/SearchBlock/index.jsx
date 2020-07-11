import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/vacancies/actions'

const StyledSearchBlock = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  max-width: 1100px;
  width: 100%;
  height: 60px;
  top: -30px;
  background: #ffffff;
  box-shadow: 0px 7px 20px -5px rgba(0, 0, 0, .25);
  border-radius: 5px;
  padding: 25px 40px;
`

const SearchingCategory = styled.div`
  position: relative;
  padding: 7px 25px 7px 5px;
  background: #eef7f6;
  color: #639b9a;
  font-size: 12px;
  border-radius: 5px;
  font-weight: 600;
  margin-right: 20px;
`

const DeleteCategoryButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: #5da5a1;
  width: 20px;
  height: 100%;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: background .1s ease-in-out;

  &:hover {
    background: #293c3a;
  }

  &:after {
    position: absolute;
    top: 14px;
    right: 6px;
    height: 2px;
    width: 11px;
    transform: rotate(45deg);
    content: '';
    background: #ffffff;
  }

  &:before {
    position: absolute;
    top: 14px;
    right: 6px;
    height: 2px;
    width: 11px;
    transform: rotate(-45deg);
    content: '';
    background: #ffffff;
  }
`

export const SearchBlock = () => {
  const searchingCategories = useSelector(state => state.vacanciesReducer.searchingCategories)
  const dispatch = useDispatch()

  const onDeleteCategoryClick = (category) => {
    dispatch(actions.removeSearchingCategory(category))
    dispatch(actions.filterVacancies())
  }

  return (
    <StyledSearchBlock>
      {
        searchingCategories.map(category => 
          <SearchingCategory
            key={category + Math.random()}
          >
            {category}
            <DeleteCategoryButton 
              onClick={() => onDeleteCategoryClick(category)}
            />
          </SearchingCategory>
        )
      }
    </StyledSearchBlock>
  )
}
