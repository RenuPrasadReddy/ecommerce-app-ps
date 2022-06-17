import React, { useEffect } from 'react'
import axios from 'axios';

import data from '../data.json';
function Cart() {
    useEffect(() => {
        console.log("data=",data);

    }, [])
   
    return (
        <section className="cart container">
            <div className="row">
                {/* <div classname="col-8-xxl col-8-xl">
                    <div className='card'>
                        <img classname="product_img" src={data[0].images[0]} alt={data[0].description}/>
                    
                    </div>
                </div>
                <div classname="col-8-xxl col-8-xl">
                    <div className='card'>

                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Cart