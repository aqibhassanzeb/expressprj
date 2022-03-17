import { Carousel } from 'react-bootstrap'
import React from 'react'
import pic from '../../assets/slider1.jpg'
import pic2 from '../../assets/slider2.jpg'
const Sliderclass = () => {
  return (
    <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic2}
      alt="Second slide"
    />

    
  </Carousel.Item>
  </Carousel>
    </div>
  )
}

export default Sliderclass