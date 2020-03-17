import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './adapters/SessionsAdapter';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Home from './components/Home';
import { Route } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path= "/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
      </div>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
