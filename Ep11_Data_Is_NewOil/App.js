import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/component/Body";
import Header from "./src/component/Header";
import Footer from "./src/component/Footer";
import About from "./src/component/About";
import Contact from "./src/component/Contact";
import Error from "./src/component/Error";
import RestaurantMenu from "./src/component/RestaurantMenu";
import Loader from "./src/component/Loader";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import UserContext from "./src/utils/UserContext";
// import Grocery from "./src/component/Grocery";

const Grocery = lazy(() => import("./src/component/Grocery"));

const App = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // make an api call and send username and password
    const data = {
      name: " Gaurav Trivedi",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedUser: userName, setUserName }}>
      <div className="w-full p-0 m-0">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
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
