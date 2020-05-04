// const initialState = {
//   id: 0,
//   type: "",
//   attributes: {
//     first_name: "",
//     last_name: "",
//     email: "",
//     city: "",
//     state: "",
//     country: "",
//     postcode: ""
//   }
// }

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      if (action.user) {
        return action.user
      } else {
        return initialState
      }
    case "CLEAR_CURRENT_USER":
      return initialState
    default:
      return state
  }
}
