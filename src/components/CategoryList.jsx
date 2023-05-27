import React from "react";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ catalog = [] }) => {
  return (
    <div className="flex flex-col items-center py-20">
      {catalog.map((item) => {
        return <CategoryItem key={item.idCategory} {...item} />;
      })}
    </div>
  );
};

export default CategoryList;
