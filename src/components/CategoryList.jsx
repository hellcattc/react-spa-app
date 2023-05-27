import React from "react";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ catalog = [] }) => {
  return (
    <div
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
      className="my-10 grid gap-4"
    >
      {catalog.map((item) => {
        return <CategoryItem key={item.idCategory} {...item} />;
      })}
    </div>
  );
};

export default CategoryList;
