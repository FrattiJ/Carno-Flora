import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul className="flex space-x-4">
        <li className="hover:underline"><Link to="/">Home</Link></li>
        <li className="hover:underline"><Link to="/shop">Shop</Link></li>
        <li className="hover:underline"><Link to="/about">About Us</Link></li>
        <li className="hover:underline"><Link to="/cart">Cart</Link></li>
        <li className="hover:underline"><Link to="/login">Login</Link></li>
      </ul>
    </div>
  )
}

export default Navbar