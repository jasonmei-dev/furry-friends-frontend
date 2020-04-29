import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import Logout from './Logout'


const NavBar = ({ loggedIn, currentUser }) => {
  let types = ['Dogs', 'Cats', 'Rabbits', 'Small & Furry', 'Horses', 'Birds', 'Scales, Fins & Other', 'Barnyard']

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
          <NavDropdown title="Pet Types" id="basic-nav-dropdown">
            {types.map(type => {
              let typeFixed = type.replace(/\s/gi, '').replace(/\W/gi, '-')
              return <NavDropdown.Item href={`/${typeFixed.toLowerCase()}`} key={type}>{type}</NavDropdown.Item>
            })}
          </NavDropdown>
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
