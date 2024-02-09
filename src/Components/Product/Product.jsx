import React, { useEffect, useState } from 'react'
import axios from "axios";
import ProductCard from './ProductCard'
import classes from './Product.module.css'

function Product() {
  const [products, setProducts] = useState()
  // const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
      .then((res)=>{
        console.log(res.data)
        setProducts(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    }, [])

   return (
    <>
  {
    <section className={classes.products_container}>
      {
          products?.map((singleProduct)=>{
            return  <ProductCard renderAdd={true} product={singleProduct} key={singleProduct.id}/>
                })
      }
    </section>
  }
  </>

  )
}
  





export default Product