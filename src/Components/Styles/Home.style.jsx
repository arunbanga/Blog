import styled from 'styled-components'
import {deviceMax} from '../../utils/device'
export const Styledhed= styled.div`


 width: ${({ width }) => (width ? width : "100%")};

position:absolute;
left:100px;


@media ${deviceMax.mobileM} {
  position:absolute;
   top:200px;
   font-size:10px;
   left:30px;
   h1{
     position:absolute;
     top:10px;
     left:100px;
   }
   p{
    position:absolute;
     top:70px;
     font-size:10px
   }
   .btn{
    position:absolute;
     top:150px;
     left:100px;
   }
   
   
}


`

export const Images=styled.img`
width:300px;
position:absolute;
top:100px;
right:200px;
clip-path:circle();

@media ${deviceMax.mobileM} {
  position:absolute;
   top:100px;
   width:200px;
   left:100px;
   
   


  
  





`
