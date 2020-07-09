import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import { logout } from "../adapters/SessionsAdapter";
import { Link } from "react-router-dom";

const NavBar = ({ loggedIn, currentUser, logout }) => {
  let types = [
    "Dogs",
    "Cats",
    "Rabbits",
    "Small & Furry",
    "Horses",
    "Birds",
    "Scales, Fins & Other",
    "Barnyard",
  ];

  if (!loggedIn) {
    return (
      <nav id="navbar">
        <h1 className="logo">
          <Link to="/">
            <i className="fas fa-paw"></i> Furry Friends
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/login">Log In</Link>
          </li>

          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>

      // <Navbar id="navbar" variant="dark" expand="md" sticky="top">
      //   <LinkContainer to="/">
      //     <Navbar.Brand className="logo">
      //       <i className="fas fa-paw"></i> Furry Friends
      //     </Navbar.Brand>
      //   </LinkContainer>
      //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //   <Navbar.Collapse id="basic-navbar-nav">
      //     <Nav className="ml-auto">
      //       <LinkContainer className="nav-link" to="/login">
      //         <Nav.Link>Log In</Nav.Link>
      //       </LinkContainer>
      //       <LinkContainer className="nav-link" to="/signup">
      //         <Nav.Link>Sign Up</Nav.Link>
      //       </LinkContainer>
      //     </Nav>
      //   </Navbar.Collapse>
      // </Navbar>
    );
  }

  return (
    <nav id="navbar">
      <h1 className="logo">
        <Link to="/">
          <i className="fas fa-paw"></i> Furry Friends
        </Link>
      </h1>
      <ul>
        <li>
          Find By Type <i className="fas fa-angle-down"></i>
          <ul>
            {types.map((type) => {
              let typeFixed = type.replace(/\s/gi, "").replace(/\W/gi, "-");
              return (
                <li>
                  <Link
                    to={`/types/${typeFixed.toLowerCase()}`}
                    key={typeFixed}
                  >
                    {type}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
        <li>
          <Link to="/profile">{currentUser.attributes.first_name}</Link>
        </li>
        <li>
          <Link to="/" onClick={logout}>
            Log Out
          </Link>
        </li>
      </ul>
    </nav>

    // <Navbar
    //   className="Navbar"
    //   bg="dark"
    //   variant="dark"
    //   expand="md"
    //   sticky="top"
    // >
    //   <LinkContainer to="/">
    //     <Navbar.Brand>
    //       <i className="fas fa-paw"></i> Furry Friends
    //     </Navbar.Brand>
    //   </LinkContainer>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="ml-auto">
    //       <NavDropdown title="Find By Type" id="basic-nav-dropdown">
    //         {types.map((type) => {
    //           let typeFixed = type.replace(/\s/gi, "").replace(/\W/gi, "-");
    //           return (
    //             <LinkContainer
    //               to={`/types/${typeFixed.toLowerCase()}`}
    //               key={typeFixed}
    //             >
    //               <NavDropdown.Item>{type}</NavDropdown.Item>
    //             </LinkContainer>
    //           );
    //         })}
    //       </NavDropdown>
    //       <LinkContainer to="/profile">
    //         <Nav.Link>{currentUser.attributes.first_name}</Nav.Link>
    //       </LinkContainer>
    //       <LinkContainer to="/" onClick={logout}>
    //         <Nav.Link>Log Out</Nav.Link>
    //       </LinkContainer>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    loggedIn: currentUser.id,
    currentUser,
  };
};

export default connect(mapStateToProps, { logout })(NavBar);
