import React from 'react'
import CardHome from '../cardhome/CardHome'
import Homebtn from '../homebtn/Homebtn'
import Sliderclass from '../sliderclass/Sliderclass'

const Home = () => {
  return (
    <div style={{background:'lightgray',marginBottom:'80px',marginTop:'40px'}}>
        <Sliderclass/>
        <Homebtn/>
        <CardHome/>
    </div>
  )
}

export default Home