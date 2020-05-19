const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      if (action.user) {
        return action.user
      } else {
        return initialState
      }
    case "UPDATE_CURRENT_USER":
      return action.user
    case "CLEAR_CURRENT_USER":
      return initialState
    default:
      return state
  }
}
