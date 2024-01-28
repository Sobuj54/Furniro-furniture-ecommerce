import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const NavBar = () => {
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <nav className="h-20 flex items-center justify-between px-10">
      {/* logo and name */}
      <div className="flex gap-1">
        <img className="w-9" src="/favicon.svg" alt="icon" />
        <h3 className="font-montserrat font-bold text-2xl">Furniro</h3>
      </div>

      {/* navlinks */}
      <div>
        <ul className="flex gap-12 font-montserrat font-semibold">{links}</ul>
      </div>

      {/* icons */}
      <div className="flex gap-5  text-xl">
        <div>
          <BsPerson />
        </div>
        <div>
          <CiSearch />
        </div>
        <div>
          <CiHeart />
        </div>
        <div>
          <IoCartOutline />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
