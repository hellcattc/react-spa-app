import axios from "axios";

const mealsClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL + import.meta.env.VITE_API_KEY,
});

const getMealById = async (mealId) => {
  const response = await mealsClient.get("/lookup.php?i=" + mealId);
  return response.data;
};

const getAllCategories = async () => {
  const response = await mealsClient.get("/categories.php");
  console.log(response);
  return response.data;
};

const getFilteredCategory = async (catName) => {
  const response = await mealsClient.get("/filter.php?c=" + catName);
  return response.data;
};

export { getMealById, getAllCategories, getFilteredCategory };
