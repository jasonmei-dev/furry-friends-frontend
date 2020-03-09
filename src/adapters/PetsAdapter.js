import { loadingPets, getPets } from '../actions/petfinder';

export const fetchPets = () => {
  return dispatch => {
    dispatch(loadingPets());
    fetch("http://localhost:3001/api/v1/pets", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(pets => dispatch(getPets(pets.animals)))
    .catch(console.log)
  }
}
