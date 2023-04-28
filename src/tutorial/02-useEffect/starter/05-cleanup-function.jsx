import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [tog, setTog] = useState(false);

  return (
    <>
      <h2>cleanup function</h2>
      <button
        onClick={() => {
          setTog(!tog);
        }}
        className="btn"
      >
        Toggle
      </button>
      {tog && <Comp />}
    </>
  );
};

const Comp = () => {
  useEffect(() => {
    console.log("This should load only once :(");
    const intId = setInterval(() => {
      console.log("This keeps on loading!");
    }, 1000);

    return () => {
      clearInterval(intId);
      console.log("Cleanup function");
    };
  }, []);
  return <h3>Test</h3>;
};

export default CleanupFunction;
