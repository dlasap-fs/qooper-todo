import styled from "styled-components";
import { StyledSpan } from "./StyledComponents/StyledSpan";

const CloseButtonContainer = styled.div`
  background-color: var(--gray-close-btn);
  width: 24px;
  height: 24px;
  border-radius: 50px;
  margin-left: 16px;

  &:hover {
    cursor: pointer;
  }
`;

export default function CloseTaskButton({ onClick }) {
  return (
    <CloseButtonContainer onClick={onClick}>
      <StyledSpan fontcolor="white">X</StyledSpan>
    </CloseButtonContainer>
  );
}
