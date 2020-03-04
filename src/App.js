import React from 'react';
import './App.css';
import Login from './components/Login';
import { connect } from 'react-redux';
import { getCurrentUser } from './adapters/sessionsAdapter';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
      return (
      <div className="App">
        Hello World!
        <Login />
      </div>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
