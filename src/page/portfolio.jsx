import React from "react";
import styled from "styled-components/macro";
import Work from "../components/common/work";
import Letter from "../components/common/letter";
import recentBlogs from "../data/recentBlogs";
import works from "../data/works";
import Blog from "../components/common/blog";
import Container from "../components/common/container";
import { deviceMax, device } from "../utils/device";

const Portfolio = () => {
  return (
    <Container
      display="flex"
      flexDirection="row"
      justifyContent="center"
      margin="50px 0 0 0"
    >
      <MainContainer>
        <Carasoule>
          <div>
            <LeftCarasoule>
              <Letter size="44px" lineHeight="44px">
                Hi, I am John, Creative Technologist
              </Letter>
              <Letter size="16">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Letter>
              <Button>Download Resume</Button>
            </LeftCarasoule>
            <RightCarasoule>
              <img
                src="/ProfilePic.png"
                alt="profilepic"
                width="243"
                height="243"
              />
            </RightCarasoule>
          </div>
        </Carasoule>
        <Container background="#f0f0f0" padding="10px" margin="10px 0px">
          <Container
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            background="#f0f0f0"
          >
            <Letter>Recent</Letter>
            <Letter>View all</Letter>
          </Container>
          <RecentBlogsContainer>
            {recentBlogs.slice(0, 2).map((blog) => (
              <Blog blog={blog} />
            ))}
          </RecentBlogsContainer>
        </Container>
        <Container margin="10px auto" padding="0 10px">
          <Letter>Featured Works</Letter>
          <WorkContainer>
            {works.map((work) => (
              <Work work={work} />
            ))}
          </WorkContainer>
        </Container>
      </MainContainer>
    </Container>
  );
};

const MainContainer = styled.div`
  margin: 0 0 100px 0;
  width: 900px;
  @media ${deviceMax.laptop} {
    width: 100%;
  }
`;

const Carasoule = styled.div`
  width: 100%;

  @media ${device.mobileS} {
    & > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      div :nth-child(1) {
        order: 2;
      }

      div :nth-child(2) {
        order: 1;
      }
    }
  }

  @media ${device.tablet} {
    display: flex;
    justify-content: center;

    & > div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      div :nth-child(1) {
        order: 1;
      }

      div :nth-child(2) {
        order: 2;
      }
    }
  }
`;

const LeftCarasoule = styled.div`
  width: 100%;

  @media ${deviceMax.laptop} {
    padding: 10px;
    text-align: center;
  }

  @media ${device.laptop} {
    width: 600px;
  }
`;

const RightCarasoule = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.laptop} {
    width: 200px;
    margin-left: 30px;
  }
`;

const Button = styled.button`
  width: 208px;
  height: 47px;
  background: #ff6464;
  border-radius: 2px;
  border: none;
`;

const PostContainer = styled.div`
  display: flex;
  width: 300px;

  @media ${device.laptop} {
    width: 900px;
  }
`;

const RecentBlogsContainer = styled.div`
  display: flex;
  background: #f0f0f0;
  height: 300px;
  padding: 0px;
  width: 100%;
  margin: 10px 0px;
  justify-content: center;

  @media ${deviceMax.mobileL} {
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;

const WorkContainer = styled.div`
  & div:first-child {
    margin: 0;
  }

  @media ${deviceMax.mobileL} {
  }
`;

export default Portfolio;
