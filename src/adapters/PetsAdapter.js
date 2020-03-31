import { loadingPets, getPets } from '../actions/petfinder';
import { loadingPet, setCurrentPet } from '../actions/currentPet';

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

export const getCurrentPet = petId => {
  return dispatch => {
    dispatch(loadingPet());
    fetch(`http://localhost:3001/api/v1/pets/${petId}`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(resp => dispatch(setCurrentPet(resp.animal)))
    .catch(console.log)
  }
}
