import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Shop from "../pages/Shop/Shop";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import SingleProduct from "../pages/Shop/singleProduct/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "product/:id",
        element: <SingleProduct />,
      },
    ],
  },
]);

export default router;
