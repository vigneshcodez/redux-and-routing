import React from "react";
import Header from "../../HeaderAndFooter/Header/Header";
import Footer from "../../HeaderAndFooter/Footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../../HeaderAndFooter/Header/Navbar";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productreducer from "../../../slices/productslice";

const store = configureStore(
  {
    reducer: {
      product: productreducer,
    },
  },
);

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Provider store={store}>
        <Outlet />
      </Provider>
    </>
  );
};

export default RootLayout;
