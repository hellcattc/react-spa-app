import React from "react";
import { Preloader, CategoryList } from "../components";
import { Await, useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();

  return (
    <>
      <React.Suspense fallback={<Preloader />}>
        <Await resolve={data.categories}>
          <CategoryList />
        </Await>
      </React.Suspense>
    </>
  );
};

export default Home;
