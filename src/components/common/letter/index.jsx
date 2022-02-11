import styled from "styled-components";

const Letter = styled.p`
  font-size: ${({ size }) => `${size ? `${size}` : "16px"}`} !important;
  font-family: ${({ family }) => (family ? family : "")};
  font-style: normal;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "lighter")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "20px")};
`;

export default Letter;
