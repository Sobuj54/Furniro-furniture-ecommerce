import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useContext, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserTag } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import "./Navbar.css";
import { AuthProvider } from "../../context/Context";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthProvider);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const hoverEffect =
    "hover:underline hover:underline-offset-4 decoration-2 transition-all duration-150";
  const iconsHoverEffect =
    "hover:scale-125 cursor-pointer transition-all duration-150 hover:text-blue-500";

  const links = (
    <>
      <li className={hoverEffect}>
        <NavLink
          to="/"
          className={`${({ isActive }) => {
            isActive ? "active" : "";
          }}`}>
          Home
        </NavLink>
      </li>
      <li className={hoverEffect}>
        <NavLink
          to="/shop"
          className={`${({ isActive }) => {
            isActive ? "active" : "";
          }}`}>
          Shop
        </NavLink>
      </li>
      <li className={hoverEffect}>
        <NavLink
          to="/about"
          className={`${({ isActive }) => {
            isActive ? "active" : "";
          }}`}>
          About
        </NavLink>
      </li>
      <li className={hoverEffect}>
        <NavLink
          to="/contact"
          className={`${({ isActive }) => {
            isActive ? "active" : "";
          }}`}>
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="h-20 flex items-center justify-between px-10 z-[100]">
      {/* logo and name */}
      <Link to="/" className="flex gap-1">
        <img className="w-9" src="/favicon.svg" alt="icon" />
        <h3 className="text-2xl font-bold font-montserrat">Furniro</h3>
      </Link>

      {/* navlinks for desktop */}
      <div className="hidden md:block">
        <ul className="flex gap-12 font-semibold font-montserrat">{links}</ul>
      </div>
      {/* hamburger menu */}
      <div
        className="block text-2xl transition-all duration-200 cursor-pointer md:hidden linear hover:scale-110"
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
      </div>

      {/*     navlinks for mobile */}
      <div
        className={
          isOpen
            ? `flex flex-col md:hidden absolute z-50 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-gray-500 text-white p-10 sm:p-20 px-20 sm:px-32 rounded-lg transition-all ease-in-out duration-500`
            : `flex flex-col md:hidden absolute top-[-100%]  left-[50%] translate-x-[-50%] bg-gray-500/40 p-10 sm:p-20 px-20 sm:px-32 rounded-lg transition-all ease-in-out duration-500`
        }>
        <ul className="flex flex-col gap-8 font-semibold text-center md:gap-12 font-montserrat">
          {links}
        </ul>

        {/* icons  for mobile*/}
        <div className="flex gap-5 mt-10 text-xl md:hidden items-center">
          <div className={iconsHoverEffect}>
            <BsPerson />
          </div>
          <div className={iconsHoverEffect}>
            <CiSearch />
          </div>
          <div className={iconsHoverEffect}>
            <CiHeart />
          </div>
          <div className={iconsHoverEffect}>
            <IoCartOutline />
          </div>
          <div className={iconsHoverEffect}>
            <FiLogOut />
          </div>
        </div>
      </div>

      {/* icons */}
      <div className="hidden gap-5 text-xl md:flex items-center">
        <div className={iconsHoverEffect}>
          <Link to={`${user ? "/user" : "/login"}`}>
            {user ? <FaUserTag className="text-green-500" /> : <BsPerson />}
          </Link>
        </div>
        <div className={iconsHoverEffect}>
          <CiSearch />
        </div>
        <div className={iconsHoverEffect}>
          <CiHeart />
        </div>
        <div className={iconsHoverEffect}>
          <IoCartOutline />
        </div>
        {user && (
          <div
            onClick={handleLogOut}
            className={`${iconsHoverEffect} text-red-400 text-lg`}>
            <FiLogOut />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
