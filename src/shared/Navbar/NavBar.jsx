import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import useNavIcons from "../../hooks/useNavIcons";
import useNavLinks from "../../hooks/useNavLinks";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navIcons = useNavIcons();
  const links = useNavLinks();

  return (
    <nav className="h-20 flex items-center justify-between px-10 z-[100]">
      {/* logo and name */}
      <Link to="/" className="flex gap-1">
        <img className="w-9" src="/favicon.svg" alt="icon" />
        <h3 className="text-2xl font-bold font-montserrat">Furniro</h3>
      </Link>

      {/* nav links for desktop */}
      <div className="hidden md:block">
        <ul className="flex gap-12 font-semibold font-montserrat">{links}</ul>
      </div>
      {/* hamburger menu */}
      <div
        className="block text-2xl transition-all duration-200 cursor-pointer md:hidden linear hover:scale-110"
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
      </div>

      {/* nav links for mobile */}
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
          {navIcons}
        </div>
      </div>

      {/* icons for desktop */}
      <div className="hidden gap-5 text-xl md:flex items-center">
        {navIcons}
      </div>
    </nav>
  );
};

export default NavBar;
