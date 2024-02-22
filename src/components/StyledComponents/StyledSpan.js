import styled from "styled-components";

export const StyledSpan = styled.span`
  color: ${(props) => props.fontColor};
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  margin: ${(props) => props.margin};
`;
