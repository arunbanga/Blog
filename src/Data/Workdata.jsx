import React from "react";
import { Image } from "../Components/Styles/Home.style";
import styled from "styled-components";
import { deviceMax, device } from "../utils/device";
const Workdata = () => {
  return (
    <>
      <MainWork>
        <Image
          src="data:image/jpeg;base64,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"
          alt="fd"
        />
        <div>
          <h1>Designing Dashboards</h1>
          <h2> Dashboard</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
            <br /> Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt
            <br /> nostrud amet.
          </p>
        </div>
      </MainWork>
    </>
  );
};
const MainWork = styled.div`
  width: 900px;
  height: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  @media ${deviceMax.mobileL} {
    width: 100%;
    height: 100%;
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  @media ${device.mobileL} and ${deviceMax.tablet}{
    width:100%;
    padding:0px;
  }
`;
export default Workdata;
