import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/routes/layouts/RootLayout.jsx";
import HomePage from "./components/HomePage.jsx";
import Demo from "./components/Demo.jsx";
import About from "./components/About.jsx";
import Products from "./components/Products.jsx";
import ProductDetailsPage from "./components/ProductDetailsPage.jsx";
import PersonalDetails from "./components/PersonalDetails.jsx";
import CommonDetails from "./components/CommonDetails.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "demo",
        element: <Demo />,
      },
      {
        path: "about",
        element: <About />,
        children:[
          {
            path:"personal",
            element:<PersonalDetails/>
          },
          {
            path:"common",
            element:<CommonDetails/>
          }
        ]
      },
      {
        path: "product",
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: ":x",
            element: <ProductDetailsPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={routes} />
  </>
);
