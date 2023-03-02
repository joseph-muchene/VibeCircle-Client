import React from "react";
import Card from "./Card";
import Suggestion from "./Suggestion";
function Cards() {
  return (
    <div className="relative">
      <Suggestion />
      <div className="mx-10 flex justify-center flex-col items-center">
        <Card  />
        <Card />
        <Card /> <Card /> <Card />
      </div>
    </div>
  );
}

export default Cards;
