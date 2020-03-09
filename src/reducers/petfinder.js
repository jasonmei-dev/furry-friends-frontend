export default (state = { pets: [], loading: false }, action) => {
  switch (action.type) {
    case 'LOADING_PETS':
      return { ...state, pets: [...state.pets], loading: true };
    case "GET_PETS":
      return {...state, pets: action.pets, loading: false };
    default:
      return state
  }
}
