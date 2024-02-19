import React from 'react'
import {BrowserRouter as Router,Routes ,Route}from "react-router-dom";
import Landing from './Pages/Landing/Landing'
import Auth from './Pages/Auth/Auth'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from './Components/ProtectedRoute/ProtecteRoute';



const stripePromise = loadStripe(
  "pk_test_51OkRrRLzl3zhh3Wefgh7ww5SMB0va0d5ZPX7rWJyYf04yinAgaIVH1HLStqzqwF2KUznrEbrQW5vFn94VmqCDry500JxkPnMQ9"
)

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/payments" 
        element={
          <ProtectedRoute 
          msg={"you must login to pay"} 
          redirect={"/payments"}          
          >
          <Elements stripe ={stripePromise}>
            <Payment/>

          </Elements>
          </ProtectedRoute>
        } />


        <Route path="/orders" element={
          <ProtectedRoute 
          msg={"you must login to access your orders"}
          redirect={"/orders"}
          >
        <Orders/>
        </ProtectedRoute>
        } />
        <Route path="/category/:categoryName" element ={<Results />}/>
        <Route path="/products/:productId" element ={<ProductDetail/>}/>
        <Route path="/cart" element={<Cart/>}/>

      </Routes>
    </Router>
  )
    
  
}

export default Routing
