import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../../utils/auth";
import {
  AiOutlineShop,
  AiOutlineTeam,
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import logo from "../../assets/logo.webp";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [firstName, setFirstName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedFirstName = localStorage.getItem("fN");
    if (storedFirstName) {
      setFirstName(storedFirstName);
    }
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    Auth.logout();
    setFirstName("");
    navigate("/login");
  };

  return (
    <div className="p-6 relative bg-[#f2f2f2]">
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute right-4 top-4 z-[99] md:hidden"
      />
      {firstName && <div className="text-center">Welcome, {firstName}!</div>}
      {nav && (
        <div className="fixed top-0 left-0 right-0 w-screen h-screen bg-[#DAD7cd]/90 flex flex-col justify-center items-center z-20">
          <Link
            onClick={handleNav}
            to="/"
            className="w-[75%] flex justify-center items-center rounded-t-[90px] shadow-lg bg-[#A3b18A] shadow-[#588157] p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </Link>
          <Link
            onClick={handleNav}
            to="/shop"
            className="w-[75%] flex justify-center items-center shadow-lg bg-[#A3b18A] shadow-[#588157] p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineShop size={20} />
            <span className="pl-4">Shop</span>
          </Link>
          <Link
            onClick={handleNav}
            to="/about"
            className="w-[75%] flex justify-center items-center shadow-lg bg-[#A3b18A] shadow-[#588157] p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineTeam size={20} />
            <span className="pl-4">About</span>
          </Link>
          <Link
            onClick={handleNav}
            to="/cart"
            className="w-[75%] flex justify-center items-center shadow-lg bg-[#A3b18A] shadow-[#588157] p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineShoppingCart size={20} />
            <span className="pl-4">Cart</span>
          </Link>
          {firstName ? (
            <button
              onClick={handleLogout}
              className="w-[75%] flex justify-center items-center rounded-b-[90px] shadow-lg bg-[#A3b18A] shadow-[#588157] p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <AiOutlineLogout size={20} />
              <span className="pl-4">Logout</span>
            </button>
          ) : (
            <Link
              onClick={handleNav}
              to="/login"
              className="w-[75%] flex justify-center items-center rounded-b-[90px] shadow-md bg-[#A3b18A] shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <AiOutlineLogin size={20} />
              <span className="pl-4">Login</span>
            </Link>
          )}
        </div>
      )}
      <div className="md:block hidden">
        <div className="flex justify-between items-center">
          <div className="flex">
            <Link
              to="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-16" alt="Carno-Flora Logo" />
            </Link>
          </div>
          <ul className="flex space-x-4 justify-end">
            <li className="text-2xl text-[#3a5a40] relative group">
              <Link to="/">Home</Link>
              <span className="absolute left-0 right-0 h-0.5 bg-black transform scale-x-0 transition-transform duration-250 ease-in-out group-hover:scale-x-100"></span>
            </li>
            <li className="text-2xl text-[#3a5a40] relative group">
              <Link to="/shop">Shop</Link>
              <span className="absolute left-0 right-0 h-0.5 bg-black transform scale-x-0 transition-transform duration-250 ease-in-out group-hover:scale-x-100"></span>
            </li>
            <li className="text-2xl text-[#3a5a40] relative group">
              <Link to="/about">About Us</Link>
              <span className="absolute left-0 right-0 h-0.5 bg-black transform scale-x-0 transition-transform duration-250 ease-in-out group-hover:scale-x-100"></span>
            </li>
            <li className="text-2xl text-[#3a5a40] relative group">
              <Link to="/cart">Cart</Link>
              <span className="absolute left-0 right-0 h-0.5 bg-black transform scale-x-0 transition-transform duration-250 ease-in-out group-hover:scale-x-100"></span>
            </li>
            {/* Conditionally render the Login/Logout link based on whether firstName is present */}
            {firstName ? (
              <li
                className="text-2xl text-[#3a5a40] relative cursor-pointer group"
                onClick={handleLogout}
              >
                Logout
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-black transform scale-x-0 transition-transform duration-250 ease-in-out group-hover:scale-x-100"></span>
              </li>
            ) : (
              <li className="text-2xl text-[#3a5a40] relative group">
                <Link to="/login">Login</Link>
                <span className="absolute left-0 right-0 h-0.5 bg-black transform scale-x-0 transition-transform duration-250 ease-in-out group-hover:scale-x-100"></span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
