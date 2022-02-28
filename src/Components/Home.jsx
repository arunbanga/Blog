import React from "react";
import styled from "styled-components";
import { Container } from "./Styles/Container.style";
import { Images, } from "../Components/Styles/Home.style";
import { deviceMax, device } from "../utils/device";
import Card from "../Data/Card";
import Workdata from "../Data/Workdata";
import Socialicons from '../Components/Socialicons'
const Home = () => {
  return (
    <>
      <Container
        display="flex"
        flexDirection="row"
        justifyContent="center"
        margin="0px 0px 0px 0px "
      >
        <MainContainer>
          <CenterContainer>
            <LeftContainer>
              {/* <Styledhed width='500px'> */}
              <h1>
                Hi, I am John,
                <br />
                Creative Technologist
              </h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet
                <br />
                sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam
                <br />
                consequat sunt nostrud amet.
              </p>
              <br />
              <button
                className="btn"
                style={{
                  background: "orange",
                  Color: "black",
                  padding: "10px",
                  border: "none"
                }}
              >
                Download Resume
              </button>
              {/* </Styledhed> */}
            </LeftContainer>

            <RightContainer>
              <Images
                src="https://crowdfavorite.com/wp-content/uploads/2020/04/web-design-integration-twitter.jpg"
                alt="sd"
              />
            </RightContainer>
          </CenterContainer>

           <Container background="skyblue" padding="0px">
            <Container
              width="100%"
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              background="skyblue"
            >
              <h2>Recent Posts</h2>
              <h3>View All</h3>
            </Container> 
            <Blogs>
              <Card />
              <Card />
            </Blogs>
          </Container>
           <Container>
            <p style={{ textAlign: "center" }}>Featured Works</p>

            <Workdata/>
            <Workdata/>
            <Workdata/>
          </Container> 
          <FooterContainer  width="100%"
              display="flex"
              flexDirection="row"
              justifyContent="center">
           <Socialicons/>
            </FooterContainer>
        </MainContainer>
      </Container>
    </>
  );
};
const MainContainer = styled.div`
  margin: 0 5px 100px;
  width: 900px;

  @media ${device.mobileL} and ${deviceMax.tablet}{
    width:92%;
    padding:0px;
  }
`;
const CenterContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  @media ${deviceMax.mobileL} {
    width: 100%;
    display: flex;
    font-size: 20px;
    flex-direction: column-reverse;
    align-items: center;
    justifycontent: center;
  }
  
`;

const LeftContainer = styled.div`
  width: 100%;
  padding: 0px;
  @media ${deviceMax.mobileL} {
    width: 100%;
    text-align: center;
  }

  
`;

const RightContainer = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${deviceMax.mobileL} {
    width: 100%;
    justify-content: center;
  }
  
`;
const FooterContainer=styled.div`
  width:100%;
  margin-top:50px;
  display:flex;
  flex-direction:row;
  justify-Content:center;
  `
const Blogs = styled.div`
  display: flex;
  background: skyblue;
  height: 300px;
  padding: 0px;
  width: 100%;
  justify-content: center;

  @media ${deviceMax.mobileL} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    font-size: 20px;
  }
  @media ${device.mobileL} and ${deviceMax.tablet}{
    height:337px;
  }
  
  
`;

export default Home;
