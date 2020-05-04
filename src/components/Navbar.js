import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logout } from '../adapters/SessionsAdapter';


const NavBar = ({ loggedIn, currentUser, logout }) => {
  let types = ['Dogs', 'Cats', 'Rabbits', 'Small & Furry', 'Horses', 'Birds', 'Scales, Fins & Other', 'Barnyard']

  if (!loggedIn) {
    return ""
  }

  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Navbar.Brand href="/">Furry Friends</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#">About</Nav.Link>
          <NavDropdown title="Pets" id="basic-nav-dropdown">
            {types.map(type => {
              let typeFixed = type.replace(/\s/gi, "").replace(/\W/gi, "-")
              return <NavDropdown.Item href={`/${typeFixed.toLowerCase()}`} key={type}>{type}</NavDropdown.Item>
            })}
          </NavDropdown>

          <NavDropdown title={currentUser.attributes.first_name} id="basic-nav-dropdown">
            <NavDropdown.Item href={"/account"}>Account Info</NavDropdown.Item>
            <NavDropdown.Item href={"/favorites"}>Favorites</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="/" onClick={logout}>Log Out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return ({
    loggedIn: currentUser.id,
    currentUser
  })
}

export default connect(mapStateToProps, { logout })(NavBar)
