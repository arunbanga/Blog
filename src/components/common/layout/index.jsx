import React from "react";
import styled from "styled-components";
import { device, deviceMax } from "../../../utils/device";
import { Link } from "react-router-dom";

function Layout({ children }) {
  const color = {
    color: "inherit",
    'text-decoration': "none"
  };
  return (
    <>
      <NavBar>
        <Link to="/" style={color}>
          <NavItem key="1">Home</NavItem>
        </Link>
        <Link to="/work" style={color}>
          <NavItem key="2">Work</NavItem>
        </Link>
        <Link to="/blogs" style={color}>
          <NavItem key="3">Blog</NavItem>
        </Link>
        <Link to="/contact" style={color}>
          <NavItem key="4">Contact</NavItem>
        </Link>
      </NavBar>
      <Main>{children}</Main>
    </>
  );
}

const Main = styled.div`
  width: 100%;
`;

const NavBar = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: end;
  position: fixed;
  background: white;
  z-index: 10;
  margin: 0 0 0 0;
  & div {
  }

  @media ${deviceMax.mobileL} {
    justify-content: space-evenly;
    bottom: 0;
  }

  @media ${device.mobileL} {
    top: 0;
  }
`;

const NavItem = styled.div`
  list-style: none;
  padding: 10px;
  cursor: pointer;
  margin: 0px;
  text-align: center;
  :hover {
    background: black;
    color: white;
  }

  @media ${deviceMax.mobileL} {
    width: 100%;
  }
`;

export default Layout;
