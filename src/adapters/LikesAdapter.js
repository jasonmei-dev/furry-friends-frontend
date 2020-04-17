import { setLikes, addLike } from '../actions/myLikes';

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

export const addNewLike = petData => {
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
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(addLike(resp))
      }
    })
    .catch(console.log)
  }
}

export const deleteLike = like => {
  return dispatch => {
    const likeInfo = {
      like: like.data
    }
    fetch(`http://localhost:3001/api/v1/likes${like.data.id}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(console.log)
    .catch(console.log)
  }
}
