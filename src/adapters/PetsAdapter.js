import { loadingPets, getPets } from '../actions/petfinder';
import { loadingPet, setCurrentPet } from '../actions/currentPet';

export const fetchPets = (page=1) => {
  return dispatch => {
    dispatch(loadingPets());
    fetch("http://localhost:3001/api/v1/pets", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        page
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

export const fetchType = (type, page=1) => {
  return dispatch => {
    dispatch(loadingPets());
    fetch("http://localhost:3001/api/v1/get_type", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        type,
        page
      }
    })
    .then(response => response.json())
    .then(pets => dispatch(getPets(pets.animals)))
    .catch(console.log)
  }
}
