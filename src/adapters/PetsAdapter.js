import { loadingPets, getPets } from '../actions/petfinder';
import { loadingPet, setCurrentPet } from '../actions/currentPet';
import { setMyPets, addMyPet } from '../actions/myPets';

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

export const fetchMyPets = () => {
  return dispatch => {
    fetch("http://localhost:3001/api/v1/likes", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(myPets => dispatch(setMyPets(myPets)))
    .catch(console.log)
  }
}

export const addPet = petData => {
  return dispatch => {
    const petInfo = {
      pet: petData
    }
    fetch("http://localhost:3001/api/v1/likes", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(petInfo)
    })
    .then(response => response.json())
    .then(pet => {
      if (pet.error) {
        alert(pet.error)
      } else {
        dispatch(addMyPet(pet))
      }
    })
    .catch(console.log)
  }
}
