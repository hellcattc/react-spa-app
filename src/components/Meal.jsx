import { Link } from "react-router-dom";

function Meal({ strMeal, idMeal, strMealThumb }) {
  return (
    <div className="flex flex-col items-center rounded-xl border p-6">
      <div>
        <img src={strMealThumb} alt={strMeal} className="mt-3 rounded-xl"></img>
      </div>
      <div className="my-3 mt-4 flex-grow pt-2">
        <p className="text-3xl">{strMeal}</p>
      </div>
      <Link to={`/meal/${idMeal}`} className="my-3 w-full">
        <p className="self-start justify-self-start rounded-sm border py-3 text-center">
          Watch Recipe
        </p>
      </Link>
    </div>
  );
}

export default Meal;
