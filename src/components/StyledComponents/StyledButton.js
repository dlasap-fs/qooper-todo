import styled from "styled-components";

/**
 * A reusable button component.
 * @component
 * @params [width, height, backgroundcolor, fontcolor] - for corresponding CSS customization
 */
export const StyledButton = styled.button`
  border: none;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.fontcolor};
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;

  &:hover {
    cursor: pointer;
    background-color: var(--purple-txt);
  }
`;
