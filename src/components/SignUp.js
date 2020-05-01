import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateSignUpForm } from '../actions/signupForm';
import { signup } from '../adapters/SessionsAdapter';

const SignUp = ({ signupForm, updateSignUpForm, signup }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupForm,
      [name]: value
    }
    updateSignUpForm(updatedFormInfo);
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupForm)
  }

  return (
    <div>
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' name='first_name' placeholder='First Name' value={signupForm.first_name} onChange={handleInputChange}/><br/>
        <input type='text' name='last_name' placeholder='Last Name' value={signupForm.last_name} onChange={handleInputChange}/><br/>
        <input type='text' name='email' placeholder='Email' value={signupForm.email} onChange={handleInputChange}/><br/>
        <input type='text' name='password' placeholder="Password" value={signupForm.password} onChange={handleInputChange}/><br/>
        <input type='text' name='city' placeholder='City' value={signupForm.city} onChange={handleInputChange}/><br/>
        <input type='text' name='state' placeholder='State' value={signupForm.state} onChange={handleInputChange}/><br/>
        <input type='text' name='country' placeholder='Country' value={signupForm.country} onChange={handleInputChange}/><br/>
        <input type='text' name='postcode' placeholder='Post Code' value={signupForm.postcode} onChange={handleInputChange}/><br/>
        <input type='submit' value='Sign Up' />
      </form>
      
      <button>
        <Link to={"/"}>Cancel</Link>
      </button>
    </div>
  )
};

const mapStateToProps = ({ signupForm }) => {
  return {
    signupForm
  }
};

export default connect(mapStateToProps, { updateSignUpForm, signup })(SignUp);
