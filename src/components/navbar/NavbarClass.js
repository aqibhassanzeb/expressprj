import React from 'react'
import { AiFillBell } from 'react-icons/ai';
import { Container, Navbar } from 'react-bootstrap'
import pic from '../../assets/joomcat.png'
import './NavbarClass.css'
import { Link } from 'react-router-dom';
const NavbarClass = () => {
  return (
    <div className='contianer-fluid fixed-top'>
           
        <Navbar  style={{justifyContent:'center',backgroundColor:'#78ebf7'}}>
  <Container className='row fulldivoficonnavbarclass' >
    
  

     <div className='col-4'  >
       <Link to='/login' style={{textDecoration:'none'}}>
          <AiFillBell style={{height:'22px',width:'22px',color:'black'}} />
       </Link>
       </div>
       <div className='col-4' >
         <Link to='/'>
           <img src={pic} style={{height:"40px",width:'100px',borderRadius:'10px'}}/>
         </Link>
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