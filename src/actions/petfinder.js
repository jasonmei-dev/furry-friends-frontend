export const loadingPets = () => {
  return {
    type: 'LOADING_PETS'
  }
}

export const getPets = pets => {
  return {
    type: "GET_PETS",
    pets
  }
}
