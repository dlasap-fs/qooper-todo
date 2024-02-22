import { Navigate } from "react-router-dom";
import { getLocalStorageItem } from "../utils/localStorageHelper";
import { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "./StyledComponents/StyledButton";
import { StyledSpan } from "./StyledComponents/StyledSpan";

const SignInPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const SignInPageHeader = styled.h2`
  color: var(--black-txt);
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 24px;
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 312px;
`;

const SignInInput = styled.input`
  margin: 0;
  width: 280px;
  max-height: 40px;
  font-size: 14px;
  letter-spacing: 0.1px;
  line-height: 16px;
  font-weight: 400;
  padding: 12px 16px;
  margin: ${(props) => props.margin};
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
      <SignInPageHeader>Login in your account</SignInPageHeader>
      <SignInForm onSubmit={handleSignIn}>
        <SignInInput type="text" placeholder="Username" id="userName" value={userDetails.userName} onChange={handleChangeInput} />
        {userDetails.userName.trim() === "" && (
          <StyledSpan
            padding="0px 0px 0px 16px"
            fontFamily="Roboto"
            alignSelf="flex-start"
            fontColor="var(--red-txt)"
            lineHeight="11.72px"
            fontSize="10px"
          >
            {errors.userName}
          </StyledSpan>
        )}

        <SignInInput
          margin="16px 0px 0px 0px"
          type="text"
          placeholder="First Name"
          id="firstName"
          value={userDetails.firstName}
          onChange={handleChangeInput}
        />
        {userDetails.firstName.trim() === "" && (
          <StyledSpan
            padding="0px 0px 0px 16px"
            fontFamily="Roboto"
            alignSelf="flex-start"
            fontColor="var(--red-txt)"
            lineHeight="11.72px"
            fontSize="10px"
          >
            {errors.firstName}
          </StyledSpan>
        )}

        <SignInInput
          margin="16px 0px 24px 0px"
          type="text"
          placeholder="Last Name"
          id="lastName"
          value={userDetails.lastName}
          onChange={handleChangeInput}
        />
        <StyledButton width="312px" height="45px" backgroundColor="var(--blue-btn)" fontColor="white" button="submit">
          LOGIN
        </StyledButton>
      </SignInForm>
    </SignInPageContainer>
  );
}
