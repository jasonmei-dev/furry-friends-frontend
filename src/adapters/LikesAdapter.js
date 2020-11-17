import { setLikes, addLike, deleteLike } from '../actions/myLikes';
import Swal from 'sweetalert2'

export const fetchLikes = () => {
  return dispatch => {
    fetch("http://localhost:3001/api/v1/likes", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(likes => dispatch(setLikes(likes)))
    .catch(console.log)
  }
}

export const addNewLike = pet => {
  return dispatch => {
    const petData = {
      pet
    }
    fetch("https://furry-friends-api.herokuapp.com/api/v1/likes", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(petData)
    })
    .then(response => response.json())
    .then(resp => {
      if (resp.error) {
        Swal.fire({
          icon: 'error',
          title: 'Unable to Add',
          text: `${resp.error}`
        })
      } else {
        dispatch(addLike(resp))
        Swal.fire({
          icon: 'success',
          title: 'Added',
          text: 'Pet has been added!'
        })
      }
    })
    .catch(console.log)
  }
}

export const deleteMyLike = likeId => {
  return dispatch => {
    fetch(`https://furry-friends-api.herokuapp.com/api/v1/likes/${likeId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(resp => dispatch(deleteLike(resp)))
    .catch(console.log)
  }
}
