import React from "react";
import styled from "styled-components";
import { deviceMax } from "../../../utils/device";
import Letter from "../letter";
import Container from "../container";

const Work = ({ work }) => {
  console.log({ work });
  return (
    <WorkContainer>
      <WorkImage>
        <img src={work.imageUrl} width={200} height={150} />
      </WorkImage>
      <WorkDetails>
        <Letter size="24px" fontWeight="bold">
          {work.title}
        </Letter>
        <Container display="flex" width="130px" justifyContent="space-between">
          <Letter>{work.year}</Letter>
          <Letter>{work.tag}</Letter>
        </Container>
        <Letter>{work.description}</Letter>
      </WorkDetails>
    </WorkContainer>
  );
};

const WorkContainer = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  margin: 50px 0px;

  @media ${deviceMax.mobileL} {
    display: block;
    width: 100%;
    height: 400px;
  }
`;

const WorkImage = styled.div`
  width: 200px;
  height: 225px;
  & img {
    border-radius: 10px;
  }

  @media ${deviceMax.mobileL} {
    width: 100%;
    > img {
      width: 100%;
      height: 225px;
    }
  }
`;

const WorkDetails = styled.div`
  margin-left: 15px;

  @media ${deviceMax.mobileL} {
    margin: 10px 0 0 0;
  }
`;

export default Work;
