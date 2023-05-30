import React, { useState } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { Preloader, MealsList } from "../components";
import useBackNavigate from "../hooks/useBackNavigate";

function Category() {
  const data = useLoaderData();
  const goBack = useBackNavigate();
  const [filtered, setFiltered] = useState[data];

  return (
    <>
      <button onClick={goBack}>Go back</button>
      <React.Suspense fallback={<Preloader />}>
        <Await resolve={data.meals}>
          <MealsList />
        </Await>
      </React.Suspense>
    </>
  );
}

export default Category;
