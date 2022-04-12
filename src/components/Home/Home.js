import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import { login } from "./../../Utils/Login";

export const Home = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <p>This is Home Page</p>
      <p>{JSON.stringify(user, null, 2)}</p>
      {user ? (
        <button onClick={() => {
            setUser(null)
            console.log(user)
        }}>LogOut</button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          Change value
        </button>
      )}
    </div>
  );
};
