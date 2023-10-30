import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/component/Body";
import Header from "./src/component/Header";
import Footer from "./src/component/Footer";
import About from "./src/component/About";
import Contact from "./src/component/Contact";
import Error from "./src/component/Error";
import RestaurantMenu from "./src/component/RestaurantMenu";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Loader from "./src/component/Loader";
// import Grocery from "./src/component/Grocery";

const Grocery = lazy(() => import("./src/component/Grocery"));

const App = () => {
  return (
    <div class="w-full p-0 m-0">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Loader />}>
            {" "}
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
