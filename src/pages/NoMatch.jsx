import React from "react";
import { Text } from "../components";

const NoMatch = () => {
  return (
    <div className="column flex h-5/6 flex-col items-center justify-center">
      <Text textSize="text-4xl">Упс! Ошибка 404!</Text>
      <Text textSize="text-2xl">Такой страницы не существует</Text>
    </div>
  );
};

export default NoMatch;
