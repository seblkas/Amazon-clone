import React from 'react';
import { categoryInfo } from './CategoryFullinfos';
import CategoryCard from './CategoryCard';
import classes from './Category.module.css'


function Category() {
    return (
        <section className={classes.category__container}>
            {categoryInfo.map((info) => (
                <CategoryCard key={info.id} data={info} />
            ))}
        </section>
    );
}

export default Category;
