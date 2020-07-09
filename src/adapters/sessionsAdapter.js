import { setCurrentUser, clearCurrentUser } from "../actions/currentUser";
import { clearLikes } from "../actions/myLikes";
import { fetchLikes } from "../adapters/LikesAdapter";
import { clearPets } from "../actions/petfinder";
import Swal from "sweetalert2";

export const login = (credentials, history) => {
  return (dispatch) => {
    fetch("http://localhost:3001/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((resp) => {
        if (resp.error) {
          Swal.fire({
            icon: "error",
            title: "Unable to Log In",
            text: `${resp.error}`,
          });
        } else {
          dispatch(setCurrentUser(resp.data));
          dispatch(fetchLikes());
          history.push("/");
        }
      })
      .catch(console.log);
  };
};

export const getCurrentUser = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/api/v1/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((resp) => dispatch(setCurrentUser(resp.data)))
      .catch(console.log);
  };
};

export const logout = (event) => {
  return (dispatch) => {
    dispatch(clearCurrentUser());
    dispatch(clearPets());
    dispatch(clearLikes());
    fetch("http://localhost:3001/api/v1/logout", {
      credentials: "include",
      method: "DELETE",
    });
  };
};

export const signup = (formData, history) => {
  return (dispatch) => {
    const userInfo = {
      user: formData,
    };
    fetch("http://localhost:3001/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((response) => response.json())
      .then((resp) => {
        if (resp.error) {
          Swal.fire({
            icon: "error",
            title: "Failed to Sign Up",
            text: `${resp.error}`,
          });
        } else {
          dispatch(setCurrentUser(resp.data));
          history.push("/");
        }
      })
      .catch(console.log);
  };
};
