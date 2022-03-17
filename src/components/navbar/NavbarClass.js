import React from 'react'
import { AiFillBell } from 'react-icons/ai';
import { Container, Navbar } from 'react-bootstrap'
import pic from '../../assets/navbarlogo.png'
import './NavbarClass.css'
const NavbarClass = () => {
  return (
    <div className='contianer-fluid fixed-top'>
           
        <Navbar  style={{justifyContent:'center',backgroundColor:'#78ebf7'}}>
  <Container className='row fulldivoficonnavbarclass' >
    
  

     <div className='col-4'  >
          <AiFillBell/>
       </div>
       <div className='col-4' >
           <img src={pic} style={{height:"30px",}}/>
       </div>
       <div className='col-4 ' >
        
          <p className='gmttextnavbarclass'>GMT+1</p>

       
       </div>
  
    
  </Container>
  </Navbar>

    </div>
  )
}

export default NavbarClass