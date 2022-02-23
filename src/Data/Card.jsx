import React from 'react'
import {Container} from '../Components/Styles/Container.style'
const Card=()=>{
    return(
        <>
       
          <Container width='100%' display='flex' flexDirection='row' justifyContent='center' background='skyblue' margin='10px 0px 0px 0px '>
        <Container width='400px'style={{border:'2px solid gray', padding:'10px',margin:'10px'}}>
        <h2>Making a design system from<br/>scratch</h2>
        <p>12 Feb 2020 12 Feb 2022 Design, Pattern<br/>
        Amet minim mollit non deserunt ullamco est sit<br/>
      aliqua dolor do amet sint. Velit officia consequat<br/>
      duis enim velit mollit. Exercitation veniam<br/>
      consequat sunt nostrud amet.</p>  
        </Container>
        <Container width='400px' style={{border:'2px solid gray' , padding:'10px',margin:'10px'}}>
        <h2>Making a design system from<br/>scratch</h2>
        <p>12 Feb 2020 12 Feb 2022 Design, Pattern<br/>
        Amet minim mollit non deserunt ullamco est sit<br/>
      aliqua dolor do amet sint. Velit officia consequat<br/>
      duis enim velit mollit. Exercitation veniam<br/>
      consequat sunt nostrud amet.</p>  
        </Container>
      </Container>

        </>
    )
}
export default Card ;