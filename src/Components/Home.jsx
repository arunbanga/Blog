import React from "react";
import styled from 'styled-components'
import { Container,} from "./Styles/Container.style";
import {  Images,Image } from "../Components/Styles/Home.style";
import {deviceMax} from '../utils/device'
import Card from '../Data/Card';

const Home = () => {
  return (
    <>
     <Container display='flex' flexDirection='row' justifyContent='center' margin='50px 0px 0px 0px '>
     <MainContainer>
       
        <CenterContainer  >
         <LeftContainer>
          {/* <Styledhed width='500px'> */}
          <h1>
            Hi, I am John,
            <br />
            Creative Technologist
          </h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            <br />
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam
            <br />
            consequat sunt nostrud amet.
          </p>
          <br />
          <button
            className="btn"
            style={{
              background: "orange",
              Color: "black",
              padding: "10px",
              border: "none",
            }}
          >
            Download Resume
          </button>
          {/* </Styledhed> */}
        </LeftContainer>

        <RightContainer>
          <Images
            src="https://crowdfavorite.com/wp-content/uploads/2020/04/web-design-integration-twitter.jpg"
            alt="sd"
          />
        </RightContainer>
        
        </CenterContainer>
        
      <Container width='100%' padding='10px' margin='10px 0px '>
      <Container width='900px' display='flex' flexDirection='row' justifyContent='space-between' background='skyblue'>
      
      </Container>
      <Blogs>

       <Card/>
       </Blogs>
       
       </Container>
      <Container>
      <p style={{textAlign:'center'}}>Featured Works</p>
      </Container>
      <Container width='100%' display='flex' flexDirection='row' justifyContent='center' >
      
      <Container width='300px'>
      <Image src='https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://www.visor.ai/wp-content/uploads/User_experience-1-1-770x510.png' alt='dsf'/>
      </Container>
      <Container width='500px' style={{paddingLeft:'20px'}}>
      <h1>Designing Dashboards</h1>
      <h2>Dashboard</h2>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit<br/>
       officia consequat duis enim velit mollit. Exercitation veniam consequat sunt<br/>
      nostrud amet.</p>
     <br/>
      <hr/>
      </Container>
      </Container>
      
      <Container width='100%' display='flex' flexDirection='row' justifyContent='center' >
      <Container width='300px' >
      <Image src='https://image.shutterstock.com/image-vector/toolkituiux-scene-creator-mobile-application-260nw-1794142201.jpg' alt='dsf'/>
      </Container>
      <Container width='500px' style={{paddingLeft:'20px'}}>
      <h1>Vibrant Portraits of 2020</h1>
      <h2>Illustration</h2>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
      officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
      nostrud amet..</p>
      <br/>
      <hr/>
      </Container>
      </Container>
      
      <Container width='100%' display='flex' flexDirection='row' justifyContent='center'>
      <Container width='300px'>
      <Image src='https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct/What-is-UI-UX-Design.jpg' alt='dsf'/>
      </Container>
      <Container width='500px' style={{paddingLeft:'20px'}}>
      <h1>36 Days of Malayalam type</h1>
      <h2>Typography</h2>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit<br/>
       officia consequat duis enim velit mollit. Exercitation veniam consequat sunt<br/>
      nostrud amet.</p>
      <br/>
      <hr/>
      </Container>
      </Container>
      </MainContainer>
      </Container>
      
    
    </>
     
  );
   
  
  
 
};
const MainContainer=styled.div`
margin: 0 5px 100px  ;
width:900px;



`
const CenterContainer=styled.div`
 width:100%;
 display:flex;
 @media ${deviceMax.mobileM}{
   width:100%;
   display:flex;
   font-size:20px;
   flex-direction:column-reverse;
   align-items:center;
   justifyContent:center;
   

 }


 
 

`
const LeftContainer= styled.div`
width:100%;
padding:10px;

@media ${deviceMax.mobileM}{
  width:100%;
  margin-left:300px;
}   
@media ${deviceMax.laptop}{
  padding:10px;
  text-align:center;
}

`
const Blogs=styled.div`
display:flex;
background:skyblue;
height:300px;
padding:0px;
width:100%;
margin:10px 0px ;
justifyContent:center;


@media ${deviceMax.mobileM}{
  display:flex;
  flexDirection:column;
  height:100%;
  width:100%;
  align-items:center;
  justifyContent:center;
}
`
const RightContainer=styled.div`
width:200px;
display:flex;
align-items:center;
justifyContent:center;

@media ${deviceMax.mobileM}{
  width:100%;
  justifyContent:center;
  margin-left:270px;
}   

@media ${deviceMax.laptop}{
  width:200px;
  
}



    
    

`
export default Home;
