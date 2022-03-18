import { Carousel } from 'react-bootstrap'
import React from 'react'
import './Sliderclass.css'
import pic from '../../assets/slider1.jpg'
import pic2 from '../../assets/slider2.jpg'
const Sliderclass = () => {
  return (
    <div>
        <Carousel>
  <Carousel.Item>
    <div className='imagesliderclassdiv'>

    <img
      className="d-block w-100 imagesliderclass"
      src={pic}
      alt="First slide"
      style={{height:'50vh'}} />
      </div>
    
  </Carousel.Item>
  <Carousel.Item>
  <div className='imagesliderclassdiv'>
    <img
      className="d-block w-100  imagesliderclass"
      src={pic2}
      alt="Second slide"
      style={{height:'50vh'}}
   />
  </div>
    
  </Carousel.Item>
  </Carousel>
    </div>
  )
}

export default Sliderclass