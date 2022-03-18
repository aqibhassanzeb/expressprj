import React from 'react'
import './Homebtn.css'
import { GiSpeaker } from 'react-icons/gi'
import pic from '../../assets/index-icon1.png'
import pic2 from '../../assets/index-icon2.png'
import pic3 from '../../assets/index-icon3.png'
import pic4 from '../../assets/index-icon4.png'
import pic5 from '../../assets/index-icon5.png'
import pic6 from '../../assets/index-icon6.png'

const Homebtn = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
        <div className='gispeakerdiv'>
        <GiSpeaker style={{color:'gold',height:'30px',width:'30px'}} />

        </div>
        </div>
        <div className='row btnhomebtnfirstdiv ' >
        <div className='col-lg-4 col-md-6 col-sm-6 col-6 btnhomebtnfirst mt-3'>
            <div className='btnhomebtnfirstbtn'>
                <p className='btntextbtnhome'>
                    Company Profile
                    </p>
                    <img src={pic}   className='pichomebtn'style={{marginRight:"5px"}}/>
            
            </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-6 col-6 btnhomebtnfirst mt-3'>
            <div className='btnhomebtnfirstbtn'>
            <p className='btntextbtnhome'>
                   Promotion Reward
                    </p>
                    <img src={pic2}  className='pichomebtn'style={{marginRight:"5px"}}/>
            
            </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-6 col-6 btnhomebtnfirst mt-3'>
            <div className='btnhomebtnfirstbtn'>
            <p className='btntextbtnhome'>
                    Beginer Tutorial
                    </p>
                    <img src={pic3}  className='pichomebtn' style={{marginRight:"5px"}}/>
            
            </div>
        </div>
        
       
        <div className='col-lg-4 col-md-6 col-sm-6 col-6 btnhomebtnfirst mt-3'>
            <div className='btnhomebtnfirstbtn'>
                <p className='btntextbtnhome'>
                    Invitation
                    </p>
                    <img src={pic4}  className='pichomebtn' style={{marginRight:"5px"}}/>
            
            </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-6 col-6 btnhomebtnfirst mt-3'>
            <div className='btnhomebtnfirstbtn'>
            <p className='btntextbtnhome'>
                  Vip Events
                    </p>
                    <img src={pic5}  className='pichomebtn'style={{marginRight:"5px"}}/>
            
            </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-6 col-6 btnhomebtnfirst mt-3'>
            <div className='btnhomebtnfirstbtn'>
            <p className='btntextbtnhome'>
                    Financial
                    </p>
                    <img src={pic6}  className='pichomebtn' style={{marginRight:"5px"}}/>
            
            </div>
        </div>
       
        </div>
        <div className='row mt-3'>
            <div className='col-6 secondbtnrechargediv'>
                <button className='secondbtnrecharge'>Recharge</button>
            </div>
            <div className='col-6 secondbtnrechargediv'>
                <button className='secondbtnrecharge'>Withdraw</button>
            </div>

        </div>
    </div>
  )
}

export default Homebtn