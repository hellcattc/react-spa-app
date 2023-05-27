import React from "react";
import { Preloader, CategoryList } from "../components";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const catalog = useLoaderData();

  return (
    <>{!catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />}</>
  );
};

export default Home;
