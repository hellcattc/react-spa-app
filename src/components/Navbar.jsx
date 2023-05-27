import React from "react";
import { Text } from "./UI";
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
    <div className="relative flex h-10 w-screen items-center">
      <StyledNavLink to={"/"}>
        <Text>Home</Text>
      </StyledNavLink>
      <StyledNavLink to={"/contacts"}>
        <Text>Contacts</Text>
      </StyledNavLink>
      <StyledNavLink to={"/about"}>
        <Text>About</Text>
      </StyledNavLink>
    </div>
  );
};

export default Navbar;
