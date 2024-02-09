import React from 'react'
import classes from './Results.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { producturl } from '../../Api/endPoints'

function Results() {
  const {categoryName} =useParams()
  axios.get(`${producturl}/products/category categoryName`)
  .then((res)=>{
    SetResults(res.data)
  }).catch((err) =>{
    console.log(res)
  })

  return (
    <LayOut>
    <div>Results</div>
    </LayOut>
  )
}

export default Results