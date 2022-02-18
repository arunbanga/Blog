import styled from 'styled-components';

export const StyleAbout= styled.header`
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
    width:95%;
    padding:0px;
    margin-left:8px;
    
    
    
    
   
      
`
