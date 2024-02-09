import React, { useContext }  from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './Product.module.css'

// import {Link} from 'react-router-dom'


function ProductCard({product}) {
    const { image, title, id, rating, price } = product;
    console.log(product)

return (
    <div  className={`${classes.card__container}`}>
        <a href={`/products/${id}`}>
            <img src={image} alt="" className={classes.img_container}/>
        </a>
        <div>
            <h3>{title}</h3>

            <div className={classes.rating}>
                <Rating value={rating?.rate} precision={0.1}/> 
                {/* count */}
                <small>{rating?.count}</small>
            </div>
            <div>
                {/* price */}
                <CurrencyFormat amount={price} /> 
            </div>

            {
                <button>
                add to cart
            </button>
            }

        </div>




    </div>
    )
}

export default ProductCard