import React from "react";

const NoMatch = () => {
  return (
    <div className="column flex h-5/6 flex-col items-center justify-center">
      <p className="py-6 text-4xl">Упс! Ошибка 404!</p>
      <p className="py-6 text-2xl">Такой страницы не существует</p>
    </div>
  );
};

export default NoMatch;
