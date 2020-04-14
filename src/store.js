import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import currentUser from './reducers/currentUser';
import loginForm from './reducers/loginForm';
import signupForm from './reducers/signupForm';
import petfinder from './reducers/petfinder';
import currentPet from './reducers/currentPet';
import myPets from './reducers/myPets';


const rootReducer = combineReducers({
  currentUser,
  currentPet,
  loginForm,
  signupForm,
  petfinder,
  myPets
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store
