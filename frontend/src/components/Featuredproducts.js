import React from 'react'
import Card from './Card.js';
function Featuredproducts({products}) {
    console.log("oo=========", products.length);
  return (
    <section className="featured-products">
        <h3>Featured products of different category</h3>
        <div className="row justify-center">
            {
                products.map( (product) => <Card key={product.key} product={product}/>)
            }
                {/* <div className="card mr-2">
                    <img src={products?.data[0]?.images[0]} alt={products?.data[0]?.title} className="fp-img"></img>
                    <p className="card-title">{products?.data[0]?.title}</p>
                    <div className="card-body">
                        <p>Price: {products?.data[0]?.price} Rs</p>
                        <button className="btn-primary">Add to cart</button>
                    </div>
                </div> */}

        </div>
    </section>
  )
}

export default Featuredproducts