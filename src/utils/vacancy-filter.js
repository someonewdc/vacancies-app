export const vacancyFilter = (vacancy, payload) => {
  const vacancyValues = Object.values(vacancy)
  console.log(vacancyValues)
  console.log(payload)
  return payload.every(value => vacancyValues.flat().includes(value))
}