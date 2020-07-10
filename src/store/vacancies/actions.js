import * as types from './types'

export const fetchVacancies = () => ({
  type: types.FETCH_VACANCIES
})

export const addSearchingCategory = (category) => ({
  type: types.ADD_SEARCHING_CATEGORY,
  payload: category
})

export const removeSearchingCategory = (category) => ({
  type: types.REMOVE_SEARCHING_CATEGORY,
  payload: category
})

export const filterVacancies = (property) => ({
  type: types.FILTER_VACANCIES,
  payload: property
})