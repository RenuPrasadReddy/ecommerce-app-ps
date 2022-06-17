import React from 'react'
import Featuredproducts from './Featuredproducts';
import data from '../data.json';
import MainProducts from './MainProducts';

function Products() {
  return (
    <section className="products container">
            {data && <Featuredproducts products={data.data.slice(0,2)}/>}
            <MainProducts />
    </section>
  )
}

export default Products