import styled from "styled-components";
import { deviceMax, device } from "../../utils/device";
export const Images = styled.img`
  width: 100%;
  opacity: 0.6;
`;
export const StyleWork = styled.div`
  @media ${deviceMax.mobileL} {
    width: 95%;
  }
  @media ${device.mobileL} and ${deviceMax.tablet}{
    width: 99%;
  }
`;
export const StyleInfo = styled.div`
  position: absolute;
  bottom: 50px;
  right: 100px;

  @media ${deviceMax.mobileL} {
    position: absolute;
    top: 170px;
    font-size: 7px;
    right: 60px;
  }
  
  @media ${device.mobileL} and ${deviceMax.tablet}{
    position: absolute;
    top: 170px;
    font-size: 15px;
    right: 10px;
  }
  @media ${deviceMax.laptop} {
    position: absolute;
    top: 170px;
  }
`;
export const StyleNav = styled.div`
  position: absolute;
  top: 150px;
  left: 100px;

  
  
  @media ${deviceMax.mobileL} {
    position: absolute;
    top: 80px;
    font-size: 7px;
    left: 60px;
  }
  
  @media ${device.mobileL} and ${deviceMax.tablet}{
    position: absolute;
    top: 100px;
    font-size: 12px;
    left: 50px;
  }
`;
