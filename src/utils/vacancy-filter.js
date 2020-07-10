export const vacancyFilter = (vacancy, payload) => {
  const vacancyFields = Object.values(vacancy)
  let hasTheSameField
  for (const field of vacancyFields) {

    if (field === payload) {
      return true
    }

    if (Array.isArray(field)) {
      hasTheSameField = field.filter(property => property === payload)
      console.log(hasTheSameField)
      return !!hasTheSameField.length
    }
    
  }
}