export default (state = { pet: null, loading: false }, action) => {
  switch (action.type) {
    case "LOADING_PET":
      return {...state, pet: state.pet, loading: true };
    case "SET_CURRENT_PET":
      return {...state, pet: action.pet, loading: false };
    case "CLEAR_CURRENT_PET":
      return state
    default:
      return state
  }
}
