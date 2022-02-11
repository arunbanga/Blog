import React from "react";
import Blog from "../components/common/blog";
import Container from "../components/common/container";
import recentBlogs from "../data/recentBlogs";
import styled from "styled-components";
import { deviceMax } from "../utils/device";

const Blogs = () => {
  return (
      <MainContainer>
        {recentBlogs.reverse().map((blog) => (
          <Blog blog={blog} />
        ))}
      </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  padding: 0px;
  width: 100%;
  margin: 50px 0px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media ${deviceMax.mobileL} {
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export default Blogs;
