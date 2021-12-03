import React from 'react'
import Loading from '../components/Loading'
import { useGlobalContext } from '../context'
import ProductsBtn from '../components/ProductsBtn'

const Products = () => {
  const { products, isLoading, productsOffsetY } = useGlobalContext()

  return (
    <section className='products' ref={productsOffsetY}>
      <div className='section-header'>
        <h4>Products</h4>
        <h3>World class products around the world</h3>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='products-content'>
          {products?.map((product) => {
            const { id, image, title } = product
            return (
              <article className='product-card' key={`product ${id}`}>
                <img src={image} alt={title} />
                <ProductsBtn {...product} />
              </article>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default Products
