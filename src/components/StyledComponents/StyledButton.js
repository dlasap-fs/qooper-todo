import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  width: 118px;
  height: 45px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;
