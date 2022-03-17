import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { BsBorderWidth } from 'react-icons/bs';
import { FaHandSpock } from 'react-icons/fa';
import { HiStatusOnline } from 'react-icons/hi';
import { MdPersonPin } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Footer.css'

const footer = () => {
  return (
    <div className='container-fluid fixed-bottom fulldivoffooter' >
        <div className='row footerfulldiv' style={{justifyContent:'center'}}>
        <div className='col-2'>
       <div className='iconfooter'  >
         <Link to='/'>
        <AiFillHome style={{height:'30px',width:'30px'}} />
         
         </Link>
       </div>
       <div className='iconfooter'>
        <p>Home</p>
        </div>
        </div>
        <div className='col-2'>
       <div className='iconfooter' >
       <Link to='/login'>
        <BsBorderWidth style={{height:'30px',width:'30px'}} />
        </Link>
       </div>
       <div className='iconfooter'>
        <p>Order</p>
        </div>
        </div>
        <div className='col-2 handiconandtextfooter'>
          
       <div className='iconfooter fahandspockfooterdiv' >
       <Link to='/login'>
        <FaHandSpock className='fahandspockfooter' />
        </Link>
       </div>
       <div className='iconfooter'>
        <p>Grab</p>
        </div>
        </div>
        <div className='col-2'>
       <div className='iconfooter' >
       <Link to='/online'>
        <HiStatusOnline style={{height:'30px',width:'30px'}} />
       </Link>
       </div>
       <div className='iconfooter'>
        <p>Online</p>
        </div>
        </div>
        <div className='col-2'>
       <div className='iconfooter' >
       <Link to='/login'>
        <MdPersonPin style={{height:'30px',width:'30px'}} />
      </Link>
       </div>
       <div className='iconfooter'>
        <p>My</p>
        </div>
        </div>
        </div>
 </div>
  )
}

export default footer