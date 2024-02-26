import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'

const RoutingPage = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to={"/home"}/>}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/cart' element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RoutingPage
