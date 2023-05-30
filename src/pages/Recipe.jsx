import { Await, useLoaderData, useParams } from "react-router-dom";
import React from "react";
import useBackNavigate from "../hooks/useBackNavigate";

function Recipe() {
  const data = useLoaderData();
  const goBack = useBackNavigate();
  const { id } = useParams();

  return (
    <>
      <React.Suspense>
        <Await resolve={data.recipe}>
          {(recipe) => {
            const { meals } = recipe;
            const meal = meals[0];
            console.log(meal);
            return (
              <div>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <p>{meal.strMeal}</p>
                <p>Category: {meal.strCategory}</p>
                {meal.strArea ? <p>Area: {meal.strArea}</p> : null}
                <p>{meal.strInstruction}</p>
                <table>
                  <thead>
                    <tr>
                      <th>Ingredient</th>
                      <th>Measure</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(meal).map((key) => {
                      if (key.includes("Ingredient") && meal[key]) {
                        return (
                          <tr key={key}>
                            <td>{meal[key]}</td>
                            <td>{meal[`strMeasure${key.slice(13)}`]}</td>
                          </tr>
                        );
                      }
                      return null;
                    })}
                  </tbody>
                </table>
                {meal.strYoutube ? (
                  <div>
                    <p>Video Recipe</p>
                    <iframe
                      title={id}
                      src={`https://www.youtube.com/embed/${meal.strYoutube.slice(
                        -11
                      )}`}
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : null}
              </div>
            );
          }}
        </Await>
      </React.Suspense>
      <button onClick={goBack}>Go back</button>
    </>
  );
}

export default Recipe;
