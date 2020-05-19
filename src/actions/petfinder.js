export const loadingPets = () => {
  return {
    type: "LOADING_PETS"
  }
}

export const getPets = pets => {
  return {
    type: "GET_PETS",
    pets
  }
}

export const clearPets = () => {
  return {
    type: "CLEAR_PETS"
  }
}
