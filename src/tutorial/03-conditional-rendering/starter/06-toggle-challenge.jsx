import { useState } from "react";

const ToggleChallenge = () => {
  const [susto, setSusto] = useState(false);
  return (
    <>
      <h2>toggle challenge</h2>
      <button className="btn" onClick={() => setSusto(!susto)}>
        Surpresa
      </button>
      {susto ? <Susto /> : <Nada />}
    </>
  );
};

const Susto = () => {
  return <h3 style={{ fontSize: "30rem" }}> BUU </h3>;
};

const Nada = () => {
  return <p> Nada aqui... </p>;
};

export default ToggleChallenge;
