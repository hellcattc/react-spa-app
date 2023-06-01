import {
  Await,
  useAsyncValue,
  useLoaderData,
  useParams,
} from "react-router-dom";
import React from "react";
import useBackNavigate from "../hooks/useBackNavigate";
import useLoadSetter from "../hooks/useLoadSetter";

const RecipePage = () => {
  const { meals } = useAsyncValue();
  const meal = meals[0];
  const goBack = useBackNavigate();
  const id = useParams();
  useLoadSetter(false);

  return (
    <>
      <div className="relative m-20 my-6 flex flex-col items-center rounded-xl">
        <button onClick={goBack} className="absolute left-0 top-5 border p-4">
          Go back{" "}
        </button>
        <img
          className="my-6 aspect-auto w-1/3"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
        <p className="my-2 text-2xl font-bold">{meal.strMeal}</p>
        <p className="pt-3">
          <span className="font-bold">Category:</span> {meal.strCategory}
        </p>
        {meal.strArea ? (
          <p>
            <span className="font-bold">Area:</span> {meal.strArea}
          </p>
        ) : null}
        <p>{meal.strInstruction}</p>
        <table className="my-8">
          <thead>
            <tr>
              <th className="px-5 text-left">Ingredient</th>
              <th className="px-5 text-left">Measure</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(meal).map((key) => {
              if (key.includes("Ingredient") && meal[key]) {
                return (
                  <tr key={key}>
                    <td className="px-5 py-2">{meal[key]}</td>
                    <td className="px-5 py-2">
                      {meal[`strMeasure${key.slice(13)}`]}
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
        {meal.strYoutube ? (
          <div className="flex w-full flex-col items-center rounded-xl border py-8">
            <p className="mb-6 text-4xl">Video Recipe</p>
            <iframe
              title={id}
              src={`https://www.youtube.com/embed/${meal.strYoutube.slice(
                -11
              )}`}
              allowFullScreen
              className="aspect-video h-auto w-3/6"
            ></iframe>
          </div>
        ) : null}
      </div>
    </>
  );
};

function Recipe() {
  const data = useLoaderData();
  useLoadSetter(true);

  return (
    <>
      <React.Suspense>
        <Await resolve={data.recipe}>
          <RecipePage />
        </Await>
      </React.Suspense>
    </>
  );
}

export default Recipe;
