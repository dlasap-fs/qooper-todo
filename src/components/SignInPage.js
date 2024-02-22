import { Navigate } from "react-router-dom";
import { getLocalStorageItem } from "../utils/localStorageHelper";
import { useState } from "react";

export default function SignIn({ onSignIn }) {
  const user = JSON.parse(getLocalStorageItem("user"));

  const [userDetails, setUserDetails] = useState({
    userName: "",
    firstName: "",
    lastName: "",
  });

  const isSignedIn = !!user?.userName;

  if (isSignedIn) return <Navigate to="/" />;

  const handleChangeInput = (e) => {
    setUserDetails((user) => {
      return {
        ...user,
        [e.target.id]: e.target.value,
      };
    });
  };

  return (
    <>
      <h1>Login in your account</h1>
      <form>
        <input placeholder="Username" id="userName" value={userDetails.userName} onChange={handleChangeInput} />
        <input placeholder="First Name" id="firstName" value={userDetails.firstName} onChange={handleChangeInput} />
        <input placeholder="Last Name" id="lastName" value={userDetails.lastName} onChange={handleChangeInput} />
        <button onClick={() => onSignIn(userDetails)}>LOGIN</button>
      </form>
    </>
  );
}
