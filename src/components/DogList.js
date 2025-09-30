import React, { } from "react";

function DogList({ dogs, onClickDog }) {
const spans = dogs.map((dog) => (
    <span key={dog.id} onClick={() => onClickDog(dog.id)}>
      {dog.name}
    </span>
  ));

  return <div id="dog-bar">{spans}</div>;
}
export default DogList;