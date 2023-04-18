import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Yan",
    age: 21,
    hobby: "To sleep :(",
  });

  const displayPerson = () => {
    setPerson({ name: "Gui", age: 25, hobby: "Programming on free time" });

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
