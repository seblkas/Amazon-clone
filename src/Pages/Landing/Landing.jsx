import React from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { Carousel } from 'react-responsive-carousel'
import Category from '../../Components/Category/Category'
import Product from '../../Components/Product/Product'

function Landing() {
  return (
    <div>
    <LayOut>
      <Carousel/>
      <Category/>
      <Product/> 
    </LayOut>
    </div>
  )
}

export default Landing