import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("Yan");

  return (
    <>
      <h2>short circuit overview</h2>
      <h4>Falsy OR : {text || "Hello world"} </h4>
      <h4>Truthy OR : {name || "Hello world"} </h4>

      <h4>Falsy AND : {text && "Hello world"} </h4>
      <h4>Truthy AND : {name && "Hello world"} </h4>

      {name && <div> This works! </div>}
      {!text && <div> This also works! </div>}
    </>
  );
};
export default ShortCircuitOverview;
