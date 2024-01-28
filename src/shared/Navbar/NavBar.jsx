import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hoverEffect =
    "hover:underline hover:underline-offset-4 decoration-2 transition-all duration-150";
  const iconsHoverEffect =
    "hover:scale-125 cursor-pointer transition-all duration-150 hover:text-blue-500";

  const links = (
    <>
      <li className={hoverEffect}>
        <Link to="/">Home</Link>
      </li>
      <li className={hoverEffect}>
        <Link to="/shop">Shop</Link>
      </li>
      <li className={hoverEffect}>
        <Link to="/about">About</Link>
      </li>
      <li className={hoverEffect}>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <nav className="h-20 flex items-center justify-between px-10 z-[100]">
      {/* logo and name */}
      <Link to="/" className="flex gap-1">
        <img className="w-9" src="/favicon.svg" alt="icon" />
        <h3 className="font-montserrat font-bold text-2xl">Furniro</h3>
      </Link>

      {/* navlinks for desktop */}
      <div className="hidden md:block">
        <ul className="flex gap-12 font-montserrat font-semibold">{links}</ul>
      </div>
      {/* hamburger menu */}
      <div
        className="cursor-pointer text-2xl block md:hidden transition-all duration-200 linear hover:scale-110"
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
        <ul className="flex text-center flex-col gap-8 md:gap-12 font-montserrat font-semibold">
          {links}
        </ul>

        {/* icons */}
        <div className="flex md:hidden gap-5 text-xl mt-10">
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
        </div>
      </div>

      {/* icons */}
      <div className="hidden md:flex gap-5  text-xl">
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
      </div>
    </nav>
  );
};

export default NavBar;
