import React from 'react'
// import Card from './Card'
const Card = React.lazy(() => import('./Card'))

function MainProducts({products, handleAddToCart}) {
  return (
    <section className="main-products mt-5 pt-1 pb-4">
        <h3 className="mt-2 mb-2">Shop wide range of products</h3>


        <div className="row products-list">
            {products.map( (product, index)=> {
                return <Card key={index} handleAddToCart={handleAddToCart} product={product} />
            })}

        </div>
    </section>
  )
}

export default MainProducts