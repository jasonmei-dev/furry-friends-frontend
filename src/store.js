import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import currentUser from './reducers/currentUser';
import loginForm from './reducers/loginForm';
import signupForm from './reducers/signupForm';
import petfinder from './reducers/petfinder';


const rootReducer = combineReducers({
  currentUser,
  loginForm,
  signupForm,
  petfinder
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store
