import { useState } from "react";
import { Link } from "react-router-dom";
import { companyLogo } from "../assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-tertiary py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={companyLogo}
            alt="Logo"
            className="h-8 w-auto mr-4 object-contain"
          />
        </div>
        <div className={`md:flex space-x-12 ${isOpen ? "block" : "hidden"}`}>
          <Link
            to="/"
            className="text-darkest font-medium hover:text-grey-light"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-darkest font-medium hover:text-grey-light"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-darkest font-medium hover:text-grey-light"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-darkest font-medium hover:text-grey-light"
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden cursor-pointer" onClick={toggleNavbar}>
          <div
            className={`w-6 h-1 bg-darkest mb-1 ${
              isOpen ? "transform rotate-45" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-darkest mb-1 ${isOpen ? "opacity-0" : ""}`}
          ></div>
          <div
            className={`w-6 h-1 bg-darkest ${
              isOpen ? "transform -rotate-45" : ""
            }`}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
