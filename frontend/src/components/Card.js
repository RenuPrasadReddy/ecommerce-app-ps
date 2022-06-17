import React from 'react'

function Card({product}) {
    console.log("in card=", product.title);
    return (
        <div className="card mr-2">
            <img src={product.images[0]} alt={product.title} className="fp-img"></img>
            <p className="card-title">{product.title}</p>
            <div className="card-body">
                <p>Price: {product.price} Rs</p>
                <button className="btn-primary">Add to cart</button>
            </div>
        </div>
    )
}

export default Card