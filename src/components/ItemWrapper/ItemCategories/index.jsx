import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/vacancies/actions'

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
  transition: background .1s ease-in-out, color .1s ease-in-out;

  &:hover {
    background: #293c3a;
    color: #ffffff;
  }

  &:not(:last-child) {
    margin-right: 15px;
  }
`

export const ItemCategories = ({
  categories
}) => {

  const dispatch = useDispatch()

  const onCategoryClick = (category) => {
    dispatch(actions.addSearchingCategory(category))
    dispatch(actions.filterVacancies(category))
  }

  return (
    <CategoriesWrapper>
      {
        categories.map(c => typeof c === 'string'
          ? <Category 
              key={c + Math.random()}
              onClick={() => onCategoryClick(c)}
            >{c}</Category> 
          : c.map(item => 
            <Category 
              key={c.length * Math.random()}
              onClick={() => onCategoryClick(item)}
            >{item}</Category>))
      }
    </CategoriesWrapper>
  )
}
