import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = props;

  console.log(props);

  return (
    <div className="flex flex-col items-center rounded-xl border p-6">
      <div>
        <img
          src={strCategoryThumb}
          alt={strCategory}
          className="mt-3 rounded-xl"
        ></img>
      </div>
      <div className="my-3 mt-4 flex-grow pt-2">
        <p className="text-3xl">{strCategory}</p>
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <Link to={`/category/${strCategory}`} className="my-3 w-full">
        <p className="self-start justify-self-start rounded-sm border py-3 text-center">
          Watch Category
        </p>
      </Link>
    </div>
  );
};

export default CategoryItem;
