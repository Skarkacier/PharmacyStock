import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div className='nav-logo' >
        <h4 >Pharmacy Stock</h4>
      </div>
      <div className='nav-medicine'>
        <NavLink to="/">Medicine</NavLink>
      </div>
      <div>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar
