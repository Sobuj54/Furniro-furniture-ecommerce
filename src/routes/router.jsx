import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import SingleProduct from "../pages/Shop/singleProduct/SingleProduct";
import Spinner from "../components/spinner/Spinner";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
const Shop = lazy(() => import("../pages/Shop/Shop"));
const ShopLayout = lazy(() => import("../layout/ShopLayout"));

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
        // implemented nested route
        element: (
          <Suspense fallback={<Spinner />}>
            <ShopLayout />
          </Suspense>
        ),
        children: [
          {
            path: "shop",
            element: (
              <Suspense fallback={<Spinner />}>
                <Shop />
              </Suspense>
            ),
          },
          {
            path: "shop/:id",
            element: <SingleProduct />,
          },
        ],
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
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
