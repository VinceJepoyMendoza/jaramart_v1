import React from 'react'
import Loading from '../components/Loading'
import { useGlobalContext } from '../context'
import ProductsBtn from '../components/ProductsBtn'

const Products = () => {
  const { products, isLoading } = useGlobalContext()

  return (
    <section className='products'>
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
                <h4>{title}</h4>
                <img src={image} alt={title} />
                <ProductsBtn id={id} />
              </article>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default Products
