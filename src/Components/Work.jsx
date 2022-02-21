import React from 'react';
import {Container} from '../Components/Styles/Container.style'
import {StyleWork,Images,StyleInfo,StyleNav} from '../Components/Styles/Work.style'
const Work=()=>{
    return(
        <>
        
        <Container  width='100%' >
        <Container width="100%" display="flex" flexDirection="column" alignItems="center">
        <StyleWork width='100%'>
        <Images src='https://bs-uploads.toptal.io/blackfish-uploads/uploaded_file/file/186608/image-1581632156292-24dce5abf74f92d5ced2b7671b9f14c8.png' alt='gd'/>
         <StyleInfo >
          <h3>I Can help you.</h3>
          <h1>Convert visitors <br/> into customers.</h1>
         </StyleInfo>
         <StyleNav>
         <h1>Mark Eter </h1>
         <br/>
         <h2><a style={{textDecoration:'none'}} href='/'>About</a></h2>
         <h2> <a style={{textDecoration:'none'}} href='/work'>Work</a></h2>
         <h2> <a style={{textDecoration:'none'}} href='/work'>Reviews</a></h2>
         <h2> <a style={{textDecoration:'none'}} href='/work'>Question</a></h2>
         <h2> <a style={{textDecoration:'none'}} href='/work'>Contacts</a></h2>
         </StyleNav>
        </StyleWork>
        </Container>
        </Container>
       
        </>
    )
}

export default Work;