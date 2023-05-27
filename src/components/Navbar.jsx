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
    <div className="relative flex h-16 w-screen items-center">
      <StyledNavLink to={"/"}>
        <Text textSize="text-3xl">Home</Text>
      </StyledNavLink>
      <StyledNavLink to={"/contacts"}>
        <Text textSize="text-3xl">Contacts</Text>
      </StyledNavLink>
      <StyledNavLink to={"/about"}>
        <Text textSize="text-3xl">About</Text>
      </StyledNavLink>
    </div>
  );
};

export default Navbar;
