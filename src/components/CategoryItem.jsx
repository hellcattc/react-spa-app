import React from "react";
import { Link } from "react-router-dom";
import { Text } from "./UI";

const CategoryItem = (props) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = props;

  console.log(props);

  return (
    <div className="flex w-5/6 items-center p-10">
      <div>
        <img src={strCategoryThumb} alt={strCategory}></img>
      </div>
      <div className="mx-5">
        <Text textSize="text-3xl">{strCategory}</Text>
        <Text>{strCategoryDescription.slice(0, 60)}...</Text>
      </div>
      <Link to={`/category/${strCategory}`}>
        <Text>Watch Category</Text>
      </Link>
    </div>
  );
};

export default CategoryItem;
