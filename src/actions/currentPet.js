export const loadingPet = () => {
  return {
    type: "LOADING_PET"
  }
}

export const setCurrentPet = pet => {
  return {
    type: "SET_CURRENT_PET",
    pet
  }
}

export const clearCurrentPet = () => {
  return {
    type: "CLEAR_CURRENT_PET"
  }
}
