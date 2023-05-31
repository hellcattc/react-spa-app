import React from "react";
import { NavLink } from "react-router-dom";

const StyledNavLink = ({ children, to }) => {
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) => {
          return isActive ? "text-indigo-600" : " text-black";
        }}
      >
        {children}
      </NavLink>
    </>
  );
};

const Navbar = () => {
  return (
    <div className="relative flex h-16 w-screen items-center px-10">
      <StyledNavLink to={"/"}>
        <p className="text-3xl">Home</p>
      </StyledNavLink>
      <StyledNavLink to={"/contacts"}>
        <p className="mx-10 text-3xl">Contacts</p>
      </StyledNavLink>
      <StyledNavLink to={"/about"}>
        <p className="text-3xl">About</p>
      </StyledNavLink>
    </div>
  );
};

export default Navbar;
