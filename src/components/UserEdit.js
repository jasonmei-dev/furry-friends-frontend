import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class UserEdit extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      first_name: props.currentUser.attributes.first_name,
      last_name: props.currentUser.attributes.last_name,
      email: props.currentUser.attributes.email,
      city: props.currentUser.attributes.city,
      state: props.currentUser.attributes.state,
      country: props.currentUser.attributes.country,
      postcode: props.currentUser.attributes.postcode
    }
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { currentUser, history } = this.props
    return (
      <>
        {currentUser.id &&
        <form onSubmit={this.handleSubmit}>
          <label>First Name: <input type='text' name='first_name' placeholder='First Name' value={this.state.first_name} onChange={this.handleInputChange}/></label><br/>
          <label>Last Name: <input type='text' name='last_name' placeholder='Last Name' value={this.state.last_name} onChange={this.handleInputChange}/></label><br/>
          <label>Email: <input type='text' name='email' placeholder='Email' value={this.state.email} onChange={this.handleInputChange}/></label><br/>
          <label>City: <input type='text' name='city' placeholder='City' value={this.state.city} onChange={this.handleInputChange}/></label><br/>
          <label>State: <input type='text' name='state' placeholder='State' value={this.state.state} onChange={this.handleInputChange}/></label><br/>
          <label>Country: <input type='text' name='country' placeholder='Country' value={this.state.country} onChange={this.handleInputChange}/></label><br/>
          <label>Post Code: <input type='text' name='postcode' placeholder='Post Code' value={this.state.postcode} onChange={this.handleInputChange}/></label><br/>
          <input type='submit' value='Update' />
          <button onClick={() => history.goBack()}>Cancel</button>
        </form>}
      </>
    )
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(UserEdit);
