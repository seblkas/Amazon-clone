import React from 'react'
import LayOut from '../../Components/LayOut/LayOut'
// import { Carousel } from 'react-responsive-carousel'
import Category from '../../Components/Category/Category'
import Product from '../../Components/Product/Product'
import Carousel from '../../Components/Carousel/Carousel'
import Footer from '../../Components/Footer/Footer'
function Landing() {
  return (
    <div>
    <LayOut>
      <Carousel/>
      <Category/>
      <Product/>
      <Footer /> 
    </LayOut>
    </div>
  )
}

export default Landing