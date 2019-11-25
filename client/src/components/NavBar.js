import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <NavLink style={{ marginRight: '10px' }}  to="/">Home</NavLink><br />
        <NavLink style={{ marginRight: '10px' }}  to="/search">Search</NavLink><br />
        <NavLink style={{ marginRight: '10px' }}  to="/new-releases">New Releases</NavLink><br />
        <NavLink style={{ marginRight: '10px' }} to="/wishlist" >Wishlist </NavLink><br />
        <NavLink style={{ marginRight: '10px' }} to="/create-book" >Create book </NavLink>
    </div>
  );
};

export default NavBar;