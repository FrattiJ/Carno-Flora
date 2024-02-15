import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.webp";

const Footer = () => {
  return (
    <div className="flex relative shadow bg-[#3A5A40]">
      <div className="w-full max-w-screen-xl mx-auto pt-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-16" alt="Carno-Flora Logo" />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-neutral-400">
            <li>
              <Link to="/shop" className="hover:underline me-4 md:me-6">
                Shop
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/FrattiJ/Carno-Flora"
                target="_blank"
                className="hover:underline me-4 md:me-6"
              >
                GitHub
              </a>
            </li>
            <li>
              <Link to="/about" className="hover:underline me-4 md:me-6">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-neutral-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Carno-Flora™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
