import React, { Suspense } from 'react';
import jewel_img from '../images/img.webp';
// import Products from './Products';

const Products = React.lazy(() => import('./Products'))

function Intro() {
    console.log("introooooooooooo", jewel_img);
    return (
        <>
        <section className="intro container">
            <div className="row">
            <Suspense fallback={<p>loading</p>}>
                <div className="intro_heading col-6-xxl col-6-xl">
                    <h2 data-testid="jewel-h2">Jewellery</h2>
                    <span>Buy the best jewellery <br />at lowest price</span>
                </div>
                <div className="col-5-xxl col-5-xl ">
                    <img src={jewel_img} alt="Gold bangels" loading="lazy"/>
                </div>
                </Suspense>
            </div>
        </section>
        <Suspense fallback={<p>loading products</p>}>
            <Products />
        </Suspense>
        </>
    )
}

export default Intro;