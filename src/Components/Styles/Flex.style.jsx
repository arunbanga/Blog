import styled from 'styled-components';

export const Flex=styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 padding-top:10px;

 @media (max-width:${({theme})=>theme.mobile}){
    margin:10px;
    

`
