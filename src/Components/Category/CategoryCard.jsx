import React from 'react'
// import { Link } from 'react-router-dom';
 import classes from './Category.module.css'

function CategoryCard({ data }) {
     console.log(data)
    return (
        <div className={classes.category}>
            <a href={`/category/${data.name}`}>
                <span>
                    <h2>{data.title}</h2>
                    <img src={data.imgLink} alt="" />
                    <p>shop now</p>
                </span>
            </a>
        </div>
    );
}

export default CategoryCard