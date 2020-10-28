import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import currentUser from "./reducers/currentUser";
import petfinder from "./reducers/petfinder";
import currentPet from "./reducers/currentPet";
import myLikes from "./reducers/myLikes";

const rootReducer = combineReducers({
  currentUser,
  currentPet,
  petfinder,
  myLikes,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
