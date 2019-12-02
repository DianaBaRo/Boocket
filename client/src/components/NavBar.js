import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <div className="fixed-top">
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto" >
            <Nav.Link> <NavLink className="link-color" to="/">Home</NavLink><br /> </Nav.Link>
            <Nav.Link> <NavLink className="link-color" to="/search">Search</NavLink>  </Nav.Link>
            <Nav.Link> <NavLink className="link-color" to="/create-book" >Create book </NavLink> </Nav.Link>
            <Nav.Link> <NavLink className="link-color" to="/wishlist" >Wishlist </NavLink> </Nav.Link>
            </Nav>
        </Navbar>
    </div>
  );
};

export default NavBar;


