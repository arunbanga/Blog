import React from "react";
import { Container } from "./Styles/Container.style";
import {  Images,Image } from "../Components/Styles/Home.style";
import Card from '../Data/Card';

const Home = () => {
  return (
    <>
      <Container width="100%" display="flex" flexDirection="row" justifyContent='center'>
        <Container width="600px">
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
        </Container>

        <Container width="200px">
          <Images
            src="https://crowdfavorite.com/wp-content/uploads/2020/04/web-design-integration-twitter.jpg"
            alt="sd"
          />
        </Container>
        
        
      </Container>
      
       <Card/>
      <p>Featured Works</p>
      <Container width='100%' display='flex' flexDirection='row'  >
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
      
      <Container width='100%' display='flex' flexDirection='row'  >
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
      
      <Container width='100%' display='flex' flexDirection='row' >
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
      
     
    </>
  );
};
export default Home;
