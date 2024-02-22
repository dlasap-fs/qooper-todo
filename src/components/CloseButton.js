import styled from "styled-components";
import { StyledSpan } from "./StyledComponents/StyledSpan";

/**
 * A styled Close X Button component.
 * @component
 */
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

/**
 * Component for Close Button X.
 *
 * @props.onClick  - Triggers function when Button is clicked
 * @component
 * @example
 * const onClick =()=> = sampleFunction()
 * return (
 *   <CloseButtonContainer onClick={sampleFunction} />
 * )
 */
export default function CloseTaskButton({ onClick }) {
  return (
    <CloseButtonContainer onClick={onClick}>
      <StyledSpan fontcolor="white">X</StyledSpan>
    </CloseButtonContainer>
  );
}
