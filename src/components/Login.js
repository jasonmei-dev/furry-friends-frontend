import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm';
import { login } from '../adapters/SessionsAdapter';

const Login = ({ loginForm, updateLoginForm, login }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginForm,
      [name]: value
    }
    updateLoginForm(updatedFormInfo);
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginForm)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Email: <input type='text' name='email' placeholder='Email' value={loginForm.email} onChange={handleInputChange}/></label><br/>
      <label>Password: <input type='text' name='password' placeholder="Password" value={loginForm.password} onChange={handleInputChange}/></label><br/>
      <input type='submit' value='Log In' />
    </form>
  )
};

const mapStateToProps = ({ loginForm }) => {
  return {
    loginForm
  }
};

export default connect(mapStateToProps, { updateLoginForm, login })(Login);
