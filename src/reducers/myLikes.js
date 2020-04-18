const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_LIKES":
      return action.likes;
    case "CLEAR_LIKES":
      return initialState
    case "ADD_LIKE":
      return [...state, action.like]
    case "DELETE_LIKE":
      const likes = state.filter(like => like.data.id !== action.like.data.id)
      return likes
    default:
      return state
  }
}
