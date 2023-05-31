import React, { useMemo } from "react";
import { Navbar, Footer } from "../components";
import { Outlet, useLocation } from "react-router-dom";

const useLocationMatch = (match) => {
  const location = useLocation();
  return useMemo(() => {
    return Array.isArray(match)
      ? match.some((url) => location.pathname.includes(url))
      : location.pathname.includes(match);
  }, [location, match]);
};

const Layout = () => {
  const shouldRenderNavbar = !useLocationMatch("/meal");

  //No one should ever do it in any case
  const bottomFooterWorkaround = useLocationMatch(["/contacts", "/about"]);

  return (
    <>
      {shouldRenderNavbar && <Navbar />}
      <Outlet />
      <Footer stickToBottom={bottomFooterWorkaround} />
    </>
  );
};

export default Layout;
