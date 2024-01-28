import { Outlet } from "react-router-dom";
import NavBar from "../shared/Navbar/NavBar";

const Main = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Main;
