import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentUser } from './adapters/SessionsAdapter';
import { fetchLikes } from './adapters/LikesAdapter';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import Home from './components/Home';
import About from './components/About';
// import MyLikes from './components/MyLikes';
import PetsContainer from './containers/PetsContainer';
import Profile from './containers/Profile';
import PetPage from './containers/PetPage';
// import UserEdit from './components/UserEdit';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser();
    this.props.fetchLikes();
  }

  render() {
    console.log(this.props)
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/pets" component={PetsContainer} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/signup" component={SignUp} />
            <Route path="/pets/:id" component={PetPage} />
            <Route path="/:type" component={PetsContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(null, { getCurrentUser, fetchLikes })(App);
