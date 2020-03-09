export const loadingPets = () => {
  return {
    type: 'LOADING_PETS'
  }
}

export const getPets = pets => {
  // debugger;
  return {
    type: "GET_PETS",
    pets
  }
}
