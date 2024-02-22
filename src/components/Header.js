import { getLocalStorageItem } from "../utils/localStorageHelper";
import styled from "styled-components";
import { StyledButton } from "./StyledComponents/StyledButton";
import { StyledSpan } from "./StyledComponents/StyledSpan";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 77px;
  border: solid 1px var(--gray-border);
  padding: 16px;
`;

export default function Header({ onSignOut }) {
  const { firstName = "" } = JSON.parse(getLocalStorageItem("user"));

  return (
    <HeaderContainer>
      <StyledSpan color="var(--black-txt)" margin="0px 32px">
        Welcome, {firstName}
      </StyledSpan>
      <StyledButton backgroundColor="var(--blue-btn)" fontColor="white" onClick={() => onSignOut()}>
        LOGOUT
      </StyledButton>
    </HeaderContainer>
  );
}
