import React from "react";
import styled from "styled-components";
import { deviceMax ,device} from "../utils/device";
const Card = () => {
  return (
    <>
      <MainContainer>
        <h2>Making a design system from scratch</h2>
        <p>
          12 Feb 2020 12 Feb 2022 Design, Pattern
          <br />
          Amet minim mollit non deserunt ullamco est sit
          <br />
          aliqua dolor do amet sint. Velit officia consequat
          <br />
          duis enim velit mollit. Exercitation veniam
          <br />
          consequat sunt nostrud amet.
        </p>
      </MainContainer>
    </>
  );
};
const MainContainer = styled.div`
  width: 400px;
  border: 2px solid gray;
  padding: 10px;
  margin: 10px;
  background: white;

  @media ${deviceMax.mobileL} {
    width: 95%;
    padding: 5px;
    margin-bottom: 2px;
  }
  
 
`;
export default Card;
