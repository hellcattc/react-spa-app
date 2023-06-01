import React, { useState } from "react";
import CategoryItem from "./CategoryItem";
import { useAsyncValue } from "react-router-dom";
import useLoadSetter from "../hooks/useLoadSetter";

const CategoryList = ({ categoriesAndSetterCb }) => {
  const { categories } = useAsyncValue();
  const [filtered, setFiltered] = useState(categories);

  categoriesAndSetterCb(categories, setFiltered);

  useLoadSetter(false);

  return (
    <div
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
      className="m-10 grid gap-4"
    >
      {filtered.map((item) => {
        return <CategoryItem key={item.idCategory} {...item} />;
      })}
    </div>
  );
};

export default CategoryList;
