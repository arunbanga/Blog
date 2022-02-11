import React from "react";
import styled from "styled-components";
import { deviceMax } from "../../../utils/device";
import Letter from "../letter";

const Blog = ({ blog }) => {
  return (
    <BlogContainer key={blog.id}>
      {/* <CustomLink target="_blank" href={blog.link} rel="noopener noreferrer"> */}
        <Letter size="26px" fontWeight="bold" lineHeight="38px">
          {blog.title}
        </Letter>
        <Tags>
          <Letter size="18px" fontWeight="normal" lineHeight="26px">
            {blog.date}
          </Letter>
          <Letter size="18px" fontWeight="normal" lineHeight="26px">
            |
          </Letter>
          <Letter size="18px" fontWeight="normal" lineHeight="26px">
            {blog.read}
          </Letter>
          <Letter size="18px" fontWeight="normal" lineHeight="26px">
            |
          </Letter>
          <Letter size="18px" fontWeight="normal" lineHeight="26px">
            {blog.tag}
          </Letter>
        </Tags>
        <BlogDescription>
          <Letter>{blog.description}</Letter>
        </BlogDescription>
      {/* </CustomLink> */}
    </BlogContainer>
  );
};

const BlogContainer = styled.div`
  background: white;
  width: 700px;
  padding: 11px;
  margin: 0 10px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${deviceMax.tablet} {
    width: 90%;
    margin: 10px 10px;
  }
`;

const Tags = styled.div`
  display: flex;
  justify-content: start;
  width: 300px;
  @media ${deviceMax.mobileL} {
    width: 100%;
  }
  > p {
    margin-left: 10px;
  }
  > :first-child {
  }
  > :last-child {
  }
`;

const BlogDescription = styled.div`
  overflow: hidden;
  height: 100px;
`;

const CustomLink = styled.a`
  & :hover {
    color: black;
  }
`;

export default Blog;
