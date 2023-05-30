import { useAsyncValue } from "react-router-dom";
import Meal from "./Meal";

function MealsList() {
  const { meals } = useAsyncValue();

  return (
    <div
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
      className="m-10 grid gap-4"
    >
      {meals.map((elem) => {
        return <Meal key={elem.idMeal} {...elem} />;
      })}
    </div>
  );
}

export default MealsList;
