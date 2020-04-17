export default (state = [], action) => {
  switch (action.type) {
    case "SET_LIKES":
      return action.likes;
    case "CLEAR_LIKES":
      return state
    case "ADD_LIKE":
      return [...state, action.like]
    default:
      return state
  }
}
