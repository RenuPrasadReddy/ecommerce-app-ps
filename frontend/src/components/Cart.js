import React, { useEffect, useState } from 'react'

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const cartItemsfromLS = JSON.parse(localStorage.getItem('cart'));
        // console.log("cartItemsfromLS =",cartItemsfromLS);
        setCartItems(cartItemsfromLS)
    }, [])

    useEffect(() => {
        let totalCartPrice = 0;
        cartItems?.forEach((item) => {
            totalCartPrice = item.price + totalCartPrice
        });
        setTotalPrice(totalCartPrice);
    }, [cartItems])


    function handleRemoveFromCart(product) {
        // console.log("in handleRemoveFromCart=", product);

        let cartItems = JSON.parse(localStorage.getItem('cart'));
        // console.log("cart=", cartItems);

        if (cartItems && cartItems.length > 0) {
            let cartArr = cartItems.filter((item) => item.id !== product.id)
            localStorage.setItem('cart', JSON.stringify(cartArr));
            setCartItems(cartArr);
        }
        
    }
   
    return (
        <section className="cart container">
            <h2>You are one click away from ordering...</h2>
            <div className="row justify-center">
                <div className="col-6-xxl col-6-xl col-12-md">
                    {cartItems?.length > 0 ?
                        cartItems.map( (item, index)=>{
                            return(
                                <div key={index} className='card cart-card mb-1'>
                                    <div className="img-title">
                                        <img className="product_img mr-1" src={item.images[0]} alt={item.title}/>
                                        <div className="title-price">
                                            <p>{item.title}</p>
                                            <span>Price: {item.price} Rs</span>
                                        </div>
                                    </div>
                                    <button className="btn-primary" onClick={() => handleRemoveFromCart(item)}>Remove</button>
                                </div>
                            )
                            
                        }) :
                        <h3>No items in cart</h3>
                    }
                    
                </div>
                <div className="col-4-xxl col-4-xl col-8-md ml-1">
                    <div className='card bg-grey'>
                        <h2 className="card-title ">Details</h2>
                        <div className="card-body">
                            <p>Total: {totalPrice} Rs</p>
                            <button className="btn-secondary">Order now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart