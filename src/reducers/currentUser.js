const initialState = null

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.user
    case "CLEAR_CURRENT_USER":
      return initialState
    default:
      return state
  }
}
