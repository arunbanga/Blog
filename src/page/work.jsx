import React from "react";
import Container from "../components/common/container";
import works from "../data/works";
import styled from "styled-components";
import { deviceMax } from "../utils/device";
import { default as Project } from "../components/common/work";

const Work = () => {
  return (
    <Container
      display="flex"
      flexDirection="row"
      justifyContent="center"
      margin="50px 0 0 0"
      padding="10px"
    >
      <WorkContainer>
        {works.map((work) => (
          <Project work={work} key={work.id} />
        ))}
      </WorkContainer>
    </Container>
  );
};

const WorkContainer = styled.div`
  & div:first-child {
    margin: 0;
  }

  @media ${deviceMax.mobileL} {
  }
`;

export default Work;
