export const setLikes = likes => {
  return {
    type: "SET_LIKES",
    likes
  }
}

export const clearLikes = () => {
  return {
    type: "CLEAR_LIKES"
  }
}

export const addLike = like => {
  return {
    type: "ADD_LIKE",
    like
  }
}

export const deleteLike = like => {
  return {
    type: "DELETE_LIKE",
    like
  }
}
