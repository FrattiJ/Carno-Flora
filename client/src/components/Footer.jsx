import React from 'react';
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
  return (
<div className="rounded-lg shadow bg-[#344E41]">
    <div className="w-full max-w-screen-xl mx-auto pt-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="{/* ADD SITE HOME HERE */}" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">

                <img src="{/* NEED SITE LOGO */}" class="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-neutral-200">Carno-Flora</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-neutral-400">
                <li>
                  <Link to="/shop" className="hover:underline me-4 md:me-6">Shop</Link>
                </li>
                <li>
                <Link to="{/* ADD GITHUB REPO */}" className="hover:underline me-4 md:me-6">GitHub</Link>
                </li>
                <li>
                <Link to="/about" className="hover:underline me-4 md:me-6">About Us</Link>
                </li>
            </ul>
        </div>
        <hr clasName="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-neutral-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Carno-Flora™</a>. All Rights Reserved.</span>
    </div>
</div>
  );
};

export default Footer;
