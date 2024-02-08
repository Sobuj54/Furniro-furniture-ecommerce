import { NavLink } from "react-router-dom";
import "../shared/Navbar/NavBar.css";

const useNavLinks = () => {
  const hoverEffect =
    "hover:underline hover:underline-offset-4 decoration-2 transition-all duration-150";
  return (
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
};

export default useNavLinks;
