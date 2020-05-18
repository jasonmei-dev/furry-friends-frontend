import { updateCurrentUser } from '../actions/currentUser';

export const editUser = (currentUser, formData) => {
  return dispatch => {
    fetch(`http://localhost:3001/api/v1/users/${currentUser.id}`, {
      credentials: "include",
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(resp => dispatch(updateCurrentUser(resp.data)))
    .catch(console.log)
  }
}
