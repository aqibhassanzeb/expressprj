import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Onlinebtn from './components/onlinebtn/Onlinebtn'

const RoutesClass = () => {
  return (
    <div>
 <Routes>
      <Route path="/" exact element={<Home />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/online' element={<Onlinebtn />} />
 </Routes>

    </div>
  )
}

export default RoutesClass