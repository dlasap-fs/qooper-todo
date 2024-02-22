import { getLocalStorageItem } from "../utils/localStorageHelper";
import styled from "styled-components";
import { StyledButton } from "./StyledComponents/StyledButton";
import { StyledSpan } from "./StyledComponents/StyledSpan";

/**
 * A styled Container for Header.
 * @component
 */
const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 77px;
  border: solid 1px var(--gray-border);
  padding: 16px;
`;

/**
 * Component for Header of the app with Logout and user details
 *
 * @props.onSignOut  - Triggers function when LOGOUT button is clicked
 * @component
 * @example
 * const handleSignOut =()=> = sampleFunction()
 * return (
 *   <Header onSignOut={handleSignOut} />
 * )
 */

export default function Header({ onSignOut }) {
  const { firstName = "" } = JSON.parse(getLocalStorageItem("user"));

  return (
    <HeaderContainer>
      <StyledSpan color="var(--black-txt)" margin="0px 32px">
        Welcome, {firstName}
      </StyledSpan>
      <StyledButton height="45px" width="118px" backgroundcolor="var(--blue-btn)" fontcolor="white" onClick={() => onSignOut()}>
        LOGOUT
      </StyledButton>
    </HeaderContainer>
  );
}
