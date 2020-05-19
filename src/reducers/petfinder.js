const initialState = {
  pets: [],
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_PETS':
      return { ...state, pets: [...state.pets], loading: true };
    case "GET_PETS":
      return {...state, pets: action.pets, loading: false };
    case "CLEAR_PETS":
      return initialState;
    default:
      return state
  }
}
