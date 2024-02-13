import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineShop, AiOutlineTeam, AiOutlineHome, AiOutlineLogin, AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    console.log('Navbar state update')
  };

  return (
    <div className='p-6 relative'>
      <AiOutlineMenu onClick={handleNav} className='absolute right-4 top-4 z-[99] md:hidden' />
      {
        nav ? (
          <div className='fixed top-0 left-0 right-0 w-screen h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
            <Link onClick={handleNav} to='/' className='w-[75%] flex justify-center items-center rounded-t-[90px] shadow-lg bg-gray-100 shadow-gray-400 p-4 cursor-poiter hover:scale-110 ease-in duration-200'>
              <AiOutlineHome size={20} />
              <span className='pl-4'>Home</span>
            </Link>
            <Link onClick={handleNav} to='/shop' className='w-[75%] flex justify-center items-center shadow-lg bg-gray-100 shadow-gray-400  p-4 cursor-poiter hover:scale-110 ease-in duration-200'>
              <AiOutlineShop size={20} />
              <span className='pl-4'>Shop</span>
            </Link>
            <Link onClick={handleNav} to='/about' className='w-[75%] flex justify-center items-center shadow-lg bg-gray-100 shadow-gray-400  p-4 cursor-poiter hover:scale-110 ease-in duration-200'>
              <AiOutlineTeam size={20} />
              <span className='pl-4'>About</span>
            </Link>
            <Link onClick={handleNav} to='/cart' className='w-[75%] flex justify-center items-center shadow-lg bg-gray-100 shadow-gray-400  p-4 cursor-poiter hover:scale-110 ease-in duration-200'>
              <AiOutlineShoppingCart size={20} />
              <span className='pl-4'>Cart</span>
            </Link>
            <Link onClick={handleNav} to='/login' className='w-[75%] flex justify-center items-center rounded-b-[90px]  shadow-lg bg-gray-100 shadow-gray-400  p-4 cursor-poiter hover:scale-110 ease-in duration-200'>
              <AiOutlineLogin size={20} />
              <span className='pl-4'>Login</span>
            </Link>
          </div>
        ) : (
          ''
        )}
      <div className='md:block hidden'>
        <div className="flex justify-between">
          <div className='flex'>
          <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="{/* NEED SITE LOGO */}" className="h-8" alt="Carno-Flora Logo" />
          </Link>
          <h1 id="navbar">Carno Flora</h1>
          </div>
          <ul className="flex space-x-4 justify-end">
            <li className="hover:underline" id="navbar"><Link to="/">Home</Link></li>
            <li className="hover:underline" id="navbar"><Link to="/shop">Shop</Link></li>
            <li className="hover:underline" id="navbar"><Link to="/about">About Us</Link></li>
            <li className="hover:underline" id="navbar"><Link to="/cart">Cart</Link></li>
            <li className="hover:underline" id="navbar"><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar