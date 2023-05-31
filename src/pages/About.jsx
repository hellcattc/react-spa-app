import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="m-10">
      <p className="mb-2 text-3xl">На данном сайте вы можете:</p>
      <ul className="m-6">
        <NavLink to={"/"}>
          <li className="text-xl text-blue-600">
            Посмотреть категории рецептов
          </li>
        </NavLink>
        <NavLink to={"/category/beef"}>
          <li className="my-2 text-xl text-blue-600">
            Посмотреть, какие блюда находятся в категории
          </li>
        </NavLink>
        <NavLink to={"/meal/53071"}>
          <li className="text-xl text-blue-600">
            И даже научиться готовить их!
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default About;
