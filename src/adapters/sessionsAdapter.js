import { setCurrentUser, clearCurrentUser } from '../actions/currentUser';
import { resetLoginForm } from '../actions/loginForm';
import { resetSignUpForm } from '../actions/signupForm';
import { clearMyPets } from '../actions/myPets';
import { fetchMyPets } from '../adapters/PetsAdapter';

export const login = credentials => {
  return dispatch => {
    fetch("http://localhost:3001/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(setCurrentUser(resp.data))
        dispatch(fetchMyPets())
        dispatch(resetLoginForm())
      }
    })
    .catch(console.log)
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    fetch("http://localhost:3001/api/v1/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(resp => dispatch(setCurrentUser(resp.data)))
    .catch(console.log)
  }
}

export const logout = event => {
  return dispatch => {
    dispatch(clearCurrentUser())
    dispatch(clearMyPets())
    fetch("http://localhost:3001/api/v1/logout", {
      credentials: "include",
      method: "DELETE"
    })
  }
}

export const signup = formData => {
  return dispatch => {
    const userInfo = {
      user: formData
    }
    fetch("http://localhost:3001/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(response => response.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(setCurrentUser(resp.data))
        dispatch(resetSignUpForm())
      }
    })
    .catch(console.log)
  }
}
