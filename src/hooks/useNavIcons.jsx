import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../context/Context";
import { FaUserTag } from "react-icons/fa6";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";

const useNavIcons = () => {
  const { user, logOut } = useContext(AuthProvider);

  const iconsHoverEffect =
    "hover:scale-125 cursor-pointer transition-all duration-150 hover:text-blue-500";

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
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
    </>
  );
};

export default useNavIcons;
