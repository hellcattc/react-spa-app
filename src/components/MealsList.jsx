import { useAsyncValue } from "react-router-dom";
import Meal from "./Meal";
import useLoadSetter from "../hooks/useLoadSetter";

function MealsList() {
  const { meals } = useAsyncValue();
  useLoadSetter(false);

  return (
    <div
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
      className="mx-10 my-5 grid gap-4"
    >
      {meals.map((elem) => {
        return <Meal key={elem.idMeal} {...elem} />;
      })}
    </div>
  );
}

export default MealsList;
