import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../adapters/SessionsAdapter';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { login } = this.props
    login(this.state)
    // this.setState({
    //   email: "",
    //   password: ""
    // }, login(this.state))
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
        <label>Email: <input type='text' name='email' placeholder='Email' value={this.state.email} onChange={this.handleInputChange}/></label><br/>
        <label>Password: <input type='text' name='password' placeholder="Password" value={this.state.password} onChange={this.handleInputChange}/></label><br/>
        <input type='submit' value='Log In' />
        </form>
      </>
    )
  }
};

export default connect(null, { login })(Login);
