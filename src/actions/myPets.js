export const setMyPets = pets => {
  return {
    type: "SET_MY_PETS",
    pets
  }
}

export const clearMyPets = () => {
  return {
    type: "CLEAR_MY_PETS"
  }
}

export const addMyPet = pet => {
  return {
    type: "ADD_MY_PET",
    pet
  }
}
