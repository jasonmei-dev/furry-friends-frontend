import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { logout } from '../adapters/SessionsAdapter';


const NavBar = ({ loggedIn, currentUser, logout }) => {
  let types = ['Dogs', 'Cats', 'Rabbits', 'Small & Furry', 'Horses', 'Birds', 'Scales, Fins & Other', 'Barnyard']

  if (!loggedIn) {
    return null
  }

  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <LinkContainer to="/">
        <Navbar.Brand>Furry Friends</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown title="Find By Type" id="basic-nav-dropdown">
            {types.map(type => {
              let typeFixed = type.replace(/\s/gi, "").replace(/\W/gi, "-")
              return (
                <LinkContainer to={`/types/${typeFixed.toLowerCase()}`} key={typeFixed}>
                  <NavDropdown.Item>{type}</NavDropdown.Item>
                </LinkContainer>
              )
            })}
          </NavDropdown>
          <LinkContainer to="/profile">
            <Nav.Link>{currentUser.attributes.first_name}</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/" onClick={logout}>
            <Nav.Link>Log Out</Nav.Link>
          </LinkContainer>
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
