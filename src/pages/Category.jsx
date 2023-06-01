import React from "react";
import { Await, useLoaderData } from "react-router-dom";
import { Preloader, MealsList } from "../components";
import useBackNavigate from "../hooks/useBackNavigate";
import useLoadSetter from "../hooks/useLoadSetter";

function Category() {
  const data = useLoaderData();
  const goBack = useBackNavigate();
  useLoadSetter(true);

  return (
    <>
      <button onClick={goBack} className="mx-10 my-4 border p-3">
        Go back
      </button>
      <React.Suspense fallback={<Preloader />}>
        <Await resolve={data.meals}>
          <MealsList />
        </Await>
      </React.Suspense>
    </>
  );
}

export default Category;
