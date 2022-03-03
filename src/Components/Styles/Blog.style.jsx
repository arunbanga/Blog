import styled from "styled-components";
import { deviceMax } from "../../utils/device";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  h3:hover {
    background: gray;
  }

  @media ${deviceMax.mobileL} {
    position: fixed;
    width: 100%;
    justify-content: space-around;
    bottom: 0px;
    height: 40px;
    border: 2px solid white;
    background: white;
    text-align: center;
    cursor: pointer;
    padding: 0px;
  }
`;
export const Images = styled.img`
  width: 100%;
  margin-bottom: 20px;
  margin: auto;
`;
