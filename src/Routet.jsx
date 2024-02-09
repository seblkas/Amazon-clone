import React from 'react'
import {BrowserRouter as Router,Routes ,Route}from "react-router-dom";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/ element={<Landing/>"/>
        <Route path="/ element={<SignIn/>"/>
        <Route path="/ element={<Payment/>"/>
        <Route path="/ element={<Orders/>"/>
        <Route path="/ element={<Cart/>"/>

      </Routes>
    </Router>
  )
    
  
}

export default Routing