import { data } from "../../../data";
import { useState } from "react";

const Person = (props) => {
  const { id, name, removeItem } = props;
  return (
    <div>
      <h2> {name}</h2>
      <button onClick={() => removeItem(id)}>Remove</button>
    </div>
  );
};

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const clearAll = () => {
    setPeople([]);
  };
  return (
    <div>
      {people.map((person) => {
        console.log(person);
        return <Person {...person} key={person.id} removeItem={removeItem} />;
      })}

      <button className="btn" style={{ marginTop: "2rem" }} onClick={clearAll}>
        Clear
      </button>
    </div>
  );
};

export default UseStateArray;
