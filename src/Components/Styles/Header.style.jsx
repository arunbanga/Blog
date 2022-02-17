import styled from 'styled-components';

export const StyleHeader= styled.header`
 justify-content:center;

 @media (max-width: ${({theme})=>theme.mobile}){
    justify-content:center;
}

 
`
export const Nav =styled.nav`
display:flex;
align-items:center;
justify-content:flex-end;
@media (max-width: ${({theme})=>theme.mobile}){
  
    justify-content:flex-end;
    padding:0px;
    margin:0px;
  
}

`
export const Images=styled.img`
width:50%;
margin-left:350px;
margin-bottom:20px;


@media (max-width: ${({theme})=>theme.mobile}){
    width:100%;
    margin: 0px;
    

        
      
`
