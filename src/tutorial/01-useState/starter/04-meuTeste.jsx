import { useState } from "react";

const people = [
  { name: "Yan", age: 21, hobby: "To sleep :(" },
  { name: "Gui", age: 25, hobby: "Programming on free time" },
  { name: "Biel", age: 20, hobby: "Playing Genshin" },
];

const UseStateObject = () => {
  const [person, setPerson] = useState(people[0]);
  const [count, setCount] = useState(1);

  const displayPerson = () => {
    setPerson(people[count]);
    setCount(count === 2 ? 0 : count + 1);

    //? setPerson({ ...person, name:"gui" }); ---> Copia os atributos passados de person e da um overwrite na propriedade nome
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>Age: {person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        Change
      </button>
    </>
  );
};

export default UseStateObject;
