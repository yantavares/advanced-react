import { useState, useEffect } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const Logged = (props) => {
    const { name } = props;
    return (
      <>
        <h1>Hello there {name}!</h1>
        <button
          className="btn"
          onClick={() => {
            setUser(null);
          }}
        >
          Log out
        </button>
      </>
    );
  };

  const NotLogged = () => {
    return (
      <>
        <h1>Please log in</h1>
        <button
          className="btn"
          onClick={() => {
            setUser({ name: "Yan" });
          }}
        >
          Log in
        </button>
      </>
    );
  };

  return (
    <>
      <h2>user challenge</h2>
      {user ? <Logged {...user} /> : <NotLogged />}
    </>
  );
};

export default UserChallenge;
