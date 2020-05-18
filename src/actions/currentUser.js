export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

export const updateCurrentUser = user => {
  return {
    type: "UPDATE_CURRENT_USER",
    user
  }
}
