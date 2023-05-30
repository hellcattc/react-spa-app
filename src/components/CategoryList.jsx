import React from "react";
import CategoryItem from "./CategoryItem";
import { useAsyncValue } from "react-router-dom";

const CategoryList = () => {
  const { categories } = useAsyncValue();

  return (
    <div
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
      className="m-10 grid gap-4"
    >
      {categories.map((item) => {
        return <CategoryItem key={item.idCategory} {...item} />;
      })}
    </div>
  );
};

export default CategoryList;
