import styled from 'styled-components'
import { deviceMax, device } from '../../utils/device'
export const Images=styled.img`

width:300px;
display:flex;
clip-path:circle();


`
export const Image=styled.img`
width:300px;
height:100%;
margin-right:10px;

@media ${device.mobileL} and ${deviceMax.tablet}{
    width:300px;
    padding:0px;
    margin:30px 5px;
  }

`


