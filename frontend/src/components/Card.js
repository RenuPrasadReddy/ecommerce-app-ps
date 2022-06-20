import React from 'react'

function Card({product, isFeaturedProducts,handleAddToCart}) {
    // console.log("in card=", product.title, isFeaturedProducts);
    return (
        <div className={isFeaturedProducts ? "card mb-2" : "card"}>
            <img src={product.images[0]} alt={product.title} className={isFeaturedProducts ? "fp-img" : "main-prod-img"}></img>
            <p className="card-title">{product.title}</p>
            <div className="card-body">
                <p>Price: {product.price} Rs</p>
                <button className="btn-primary" onClick={() =>handleAddToCart(product, "add")}>Add to cart</button>
            </div>
        </div>
    )
}

export default Card