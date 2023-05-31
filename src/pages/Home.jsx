import React, { useRef } from "react";
import { Preloader, CategoryList, Search } from "../components";
import { Await, useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  const categories = useRef([]);
  const setter = useRef(() => {});

  const getCategoriesAndSetter = (cats, set) => {
    categories.current = cats;
    setter.current = set;
  };

  const handleSearch = (str) => {
    setter.current(
      categories.current.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
  };

  return (
    <>
      <Search cb={handleSearch}></Search>
      <React.Suspense fallback={<Preloader />}>
        <Await resolve={data.categories}>
          <CategoryList categoriesAndSetterCb={getCategoriesAndSetter} />
        </Await>
      </React.Suspense>
    </>
  );
};

export default Home;
