import React, { useCallback, useRef } from "react";
import { Preloader, CategoryList, Search } from "../components";
import { Await, useLoaderData } from "react-router-dom";
import useLoadSetter from "../hooks/useLoadSetter";

const Home = () => {
  const data = useLoaderData();
  const categories = useRef([]);
  const setter = useRef(() => {});
  const loadSetter = useLoadSetter(true);
  // const loadSetter = useOutletContext();

  // useEffect(() => {
  //   loadSetter(true);
  // }, [loadSetter]);

  const getCategoriesAndSetter = useCallback(
    (cats, set) => {
      categories.current = cats;
      setter.current = set;
    },
    [categories, setter]
  );

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
          <CategoryList
            categoriesAndSetterCb={getCategoriesAndSetter}
            loadSetter={loadSetter}
          />
        </Await>
      </React.Suspense>
    </>
  );
};

export default Home;
