import * as types from './types'
import { data } from '../../data/data';
import { vacancyFilter } from '../../utils/vacancy-filter';

const initialState = {
  initialVacancies: [],
  filteredVacancies: [],
  searchingCategories: [],
}

export const reducer = (state = initialState, action) => {
  const { payload } = action

  switch (action.type) {
    case types.FETCH_VACANCIES:
      return {
        ...state,
        initialVacancies: data,
        filteredVacancies: data,
      }
    case types.FILTER_VACANCIES: 
      return {
        ...state,
        filteredVacancies: state.filteredVacancies
          .filter(vacancy => vacancyFilter(vacancy, payload))
      }
    case types.ADD_SEARCHING_CATEGORY:
      return {
        ...state,
        searchingCategories: state.searchingCategories.includes(payload) 
          ? state.searchingCategories
          : [...state.searchingCategories, payload]
      }
    case types.REMOVE_SEARCHING_CATEGORY:
      return {
        ...state,
        searchingCategories: state.searchingCategories
          .filter(category => category !== payload)
      }
    default:
      return state
  }
}