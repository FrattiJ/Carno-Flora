import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";

const Footer = () => {
  return (
    <div className="shadow bg-[#3A5A40]">
      <div className="w-full max-w-screen-xl mx-auto pt-4 md:py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-16" alt="Carno-Flora Logo" />
          </Link>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-neutral-400">
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
                rel="noopener noreferrer" // for security reasons
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
        <div className="text-sm text-neutral-500 text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Carno-Flora™
          </a>
          . All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
