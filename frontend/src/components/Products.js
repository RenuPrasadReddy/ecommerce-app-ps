import React, { useEffect, useState,Suspense } from 'react';
import CircleLoader from "react-spinners/ClipLoader";
import axios from 'axios';

// import Featuredproducts from './Featuredproducts';
const Featuredproducts = React.lazy(()=> import('./Featuredproducts'));
// import MainProducts from './MainProducts';
const MainProducts = React.lazy(() =>import('./MainProducts')) ;
// import MainPagination from './MainPagination';
const MainPagination = React.lazy(() => import('./MainPagination')) ;

function Products() {
    const [productData, setProductData] = useState([]);
    const [activePage, setActivePage] = useState(0);
    let [loading, setLoading] = useState(true);

    const override = `
        display: block;
        margin: 0 auto;
        border-color: #ECC262;
    `;

    useEffect(() => {
        // console.log("running useEffect, pagenumber...==============", activePage);
        (async () => {
            setLoading(true);
            const data = await axios(`http://localhost:3006/products?pageNum=${activePage}&limit=${100}`)
            // console.log("server data=", data);
            setProductData(data);
            setLoading(false)
        })()
    }, [activePage])

    function handlePagination(pageNumber) {
        // console.log(`active page is ${pageNumber}`);
        setActivePage(pageNumber)
    }

    function handleAddToCart(product) {
        let cartItems = JSON.parse(localStorage.getItem('cart'));

        if (cartItems && cartItems.length > 0) {
            for(var i=0; i<cartItems.length; i++) {
                if(product.id === cartItems[i].id)
                    return;
            }
            let cartArr = [...cartItems, product]
            localStorage.setItem('cart', JSON.stringify(cartArr));
        }
        else {
            let cartArr = [product]
            localStorage.setItem('cart', JSON.stringify(cartArr));
        }
        
    }

    return (
        <section className="products container">
            {productData?.data?.data.length > 0 ? (
                <>
                <Suspense fallback={<CircleLoader color={"#ECC262"} loading={loading} css={override} size={50} />}>
                    <Featuredproducts handleAddToCart={handleAddToCart} isFeaturedProducts products={productData.data.data.slice(0, 2)} />
                    <MainPagination handlePagination={handlePagination} />
                    <MainProducts handleAddToCart={handleAddToCart} products={productData.data.data} />
                </Suspense>
                </>
            ) : <p><CircleLoader color={"#ECC262"} loading={loading} css={override} size={150}/></p>}
        </section>
    )
}

export default Products