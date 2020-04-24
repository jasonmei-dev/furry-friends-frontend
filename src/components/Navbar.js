import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import Logout from './Logout'


const NavBar = ({ loggedIn, currentUser }) => {
  if (!loggedIn) {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Furry Friends</Navbar.Brand>
      </Navbar>
    )
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Furry Friends</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/pets">Pets</Nav.Link>
          <Nav.Link href="/profile">{currentUser.attributes.first_name}</Nav.Link>
          <Logout />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return ({
    loggedIn: currentUser.id !== 0,
    currentUser
  })
}

export default connect(mapStateToProps)(NavBar)
