import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex justify-between p-4">
      <h1 id="navbar">Carno Flora</h1>
      <ul className="flex space-x-4 justify-end">
        <li className="hover:underline" id="navbar"><Link to="/">Home</Link></li>
        <li className="hover:underline" id="navbar"><Link to="/shop">Shop</Link></li>
        <li className="hover:underline" id="navbar"><Link to="/about">About Us</Link></li>
        <li className="hover:underline" id="navbar"><Link to="/cart">Cart</Link></li>
        <li className="hover:underline" id="navbar"><Link to="/login">Login</Link></li>
      </ul>
    </div>
  )
}

export default Navbar