import { useEffect, useState } from "react";
const url = "https://api.github.com/users/yantavares";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        const user = await resp.json();
        setUser(user);
        console.log(user);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error!</h2>;
  }

  return (
    <>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={user.avatar_url}
        alt={user.name}
      />

      <h2>{user.name}</h2>
      <h4>Works at @{user.company} </h4>

      <p>{user.bio}</p>
    </>
  );
};
export default MultipleReturnsFetchData;
