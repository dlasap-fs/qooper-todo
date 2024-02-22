import { Navigate } from "react-router-dom";
import { getLocalStorageItem } from "../utils/localStorageHelper";
import { useState } from "react";
import styled from "styled-components";

const SignInPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function SignIn({ onSignIn }) {
  const user = JSON.parse(getLocalStorageItem("user"));

  const [userDetails, setUserDetails] = useState({
    userName: "",
    firstName: "",
    lastName: "",
  });
  const [errors, setErrors] = useState({
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

  const handleSignIn = (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = { ...errors };

    if (userDetails.userName.trim() === "") {
      newErrors.userName = "User name is required";
      isValid = false;
    }

    if (userDetails.firstName.trim() === "") {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      onSignIn(userDetails);
    }
  };

  return (
    <SignInPageContainer>
      <h1>Login in your account</h1>
      <form onSubmit={handleSignIn}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
          }}
        >
          <input placeholder="Username" id="userName" value={userDetails.userName} onChange={handleChangeInput} />
          <span style={{ color: "red" }}>{errors.userName}</span>

          <input placeholder="First Name" id="firstName" value={userDetails.firstName} onChange={handleChangeInput} />
          <span style={{ color: "red" }}>{errors.firstName}</span>

          <input placeholder="Last Name" id="lastName" value={userDetails.lastName} onChange={handleChangeInput} />
          <button button="submit">LOGIN</button>
        </div>
      </form>
    </SignInPageContainer>
  );
}
