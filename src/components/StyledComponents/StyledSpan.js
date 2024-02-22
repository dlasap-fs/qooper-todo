import styled from "styled-components";

export const StyledSpan = styled.span`
  color: ${(props) => props.fontColor};
  font-size: ${(props) => props.fontSize ?? "14px"};
  line-height: ${(props) => props.lineHeight ?? "20px"};
  font-weight: 400;
  margin: ${(props) => props.margin};
  letter-spacing: 0.1px;
  align-self: ${(props) => props.alignSelf};
  padding: ${(props) => props.padding};
  font-family: ${(props) => props.fontFamily};
`;