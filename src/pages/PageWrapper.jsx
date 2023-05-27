import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const PageWrapper = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default PageWrapper;
