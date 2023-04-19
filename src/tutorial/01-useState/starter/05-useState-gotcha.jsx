import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  // const handleClick = () => {
  //   setValue(value + 1);
  //   console.log(value); //? Logs previous value (async)
  // };

  // const handleClick = () => {
  //   setValue((currentState) => {
  //     const newState = currentState + 1;
  //     return newState; //? Latest value
  //   });
  // };

  // const handleClick = () => {
  //   setTimeout(() => {
  //     setValue(value + 1); //? Only changes once in 3 seconds (if you click 5 times, only increases 1 (async))
  //   }, 3000);
  // };

  const handleClick = () => {
    setTimeout(() => {
      setValue((currentState) => {
        return currentState + 1; //? correct behaviour
      });
    }, 3000);
  };
  return (
    <div>
      <h1>{value}</h1>
      <button className="btn" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default UseStateGotcha;
