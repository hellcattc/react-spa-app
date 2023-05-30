import React, { useCallback, useState } from "react";
import { Preloader, CategoryList, Search } from "../components";
import { Await, useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  const [filtered, setFiltered] = useState([]);
  const getCategories = useCallback(
    (categories) => {
      setFiltered(categories);
    },
    [setFiltered]
  );

  return (
    <>
      <Search cb={handleSearch}></Search>
      <React.Suspense fallback={<Preloader />}>
        <Await resolve={data.categories}>
          <CategoryList categoriesCallback={getCategories} />
        </Await>
      </React.Suspense>
    </>
  );
};

export default Home;
