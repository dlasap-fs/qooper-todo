import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;

  &:hover {
    cursor: pointer;
  }
`;
