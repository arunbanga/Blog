import styled from 'styled-components';
import {deviceMax,} from '../../utils/device'
export const Images=styled.img`
 width:100%;
 opacity:0.6;
 `
export const StyleWork = styled.div`
  


width: ${({ width }) => (width ? width : "100%")};





@media ${deviceMax.mobileL} {
    width: 300px;
  }
  @media ${deviceMax.tablet} {
    width: 400px;
  }
  @media ${deviceMax.mobileS} {
    width: 200px;
  }
  @media ${deviceMax.mobileM} {
    width: 300px;
  }


`
export const StyleInfo=styled.div`
position:absolute;
bottom:50px;
right:100px;

@media ${deviceMax.mobileM} {
  position:absolute;
   top:150px;
   font-Size:7px;
   right:80px;
}
@media ${deviceMax.tablet} {
  position:absolute;
   top:180px;
   font-Size:10px;
   right:120px;

   
  }
  @media ${deviceMax.mobileL} {
  position:absolute;
   top:170px;
   font-Size:7px;
   right:60px;

   
  }
  @media ${deviceMax.mobileS} {
  position:absolute;
   top:170px;
   font-Size:7px;
   right:30px;

   
  }


`
export const StyleNav=styled.div`
position:absolute;
top:150px;
left:100px;

@media ${deviceMax.mobileM} {
  position:absolute;
   top:80px;
   font-Size:7px;
   left:60px;

   
  }
  @media ${deviceMax.tablet} {
  position:absolute;
   top:70px;
   font-Size:10px;
   left:120px;

   
  }
  @media ${deviceMax.mobileL} {
  position:absolute;
   top:80px;
   font-Size:7px;
   left:60px;

   
  }
  @media ${deviceMax.mobileS} {
  position:absolute;
   top:80px;
   font-Size:7px;
   left:30px;

   
  }
  
 
`
