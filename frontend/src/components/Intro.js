import React from 'react';
import jewel_img from '../images/img.png';
import Products from './Products';

function Intro() {
    return (
        <>
        <section className="intro container">
            <div className="row">
                <div className="intro_heading col-6-xxl col-6-xl">
                    <h2>Jewellery</h2>
                    <span>Buy the best jewellery <br />at lowest price</span>
                </div>
                <div className="col-5-xxl col-5-xl ">
                    <img src={jewel_img} alt="Gold bangels" />
                </div>
            </div>
        </section>
        <Products />
        </>
    )
}

export default Intro;