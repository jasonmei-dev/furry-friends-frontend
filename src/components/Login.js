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
      <input type='text' name='email' placeholder='Email' value={loginForm.email} onChange={handleInputChange}/><br/>
      <input type='text' name='password' placeholder="Pasword" value={loginForm.password} onChange={handleInputChange}/><br/>
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
