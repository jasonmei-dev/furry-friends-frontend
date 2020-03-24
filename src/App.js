import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './adapters/SessionsAdapter';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import PetsContainer from './containers/PetsContainer'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/pets" component={PetsContainer}/>
        <Route exact path="/pets/:id" />
        <Route eaact path="/profile" />
        <Route exact path="/signup" component={SignUp} />
      </div>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
