import React from "react";
import { Text } from "../components/UI";

const NoMatch = () => {
  return (
    <div>
      <Text size="4xl">Упс! Ошибка 404!</Text>
      <Text size="2xl">Такой страницы не существует</Text>
    </div>
  );
};

export default NoMatch;
