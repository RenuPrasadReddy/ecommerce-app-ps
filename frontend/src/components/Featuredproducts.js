import React from 'react'
// import Card from './Card.js';
const Card = React.lazy(() => import('./Card'))

function Featuredproducts({products, isFeaturedProducts, handleAddToCart}) {
    console.log("oo=========", products.length);
  return (
    <section className="featured-products">
        <h3>Featured products of different category</h3>

        <div className="row justify-space-around mb-2">
            {
                products.map( (product, index) => <Card handleAddToCart={handleAddToCart} isFeaturedProducts={isFeaturedProducts} key={product.id} product={product}/>)
            }
        </div>
    </section>
  )
}

export default Featuredproducts