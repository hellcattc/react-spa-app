import React, { useState } from "react";
import { Navbar, Footer } from "../components";
import { Outlet } from "react-router-dom";
import useLocationMatch from "../hooks/useLocationMatch";

const Layout = () => {
  const shouldRenderNavbar = !useLocationMatch("/meal");

  //No one should ever do it in any case
  const bottomFooterWorkaround = useLocationMatch(["/contacts", "/about"]);

  const [loading, setLoading] = useState(false);

  return (
    <>
      {shouldRenderNavbar && <Navbar />}
      <Outlet context={setLoading} />
      {loading == false && <Footer stickToBottom={bottomFooterWorkaround} />}
    </>
  );
};

export default Layout;
