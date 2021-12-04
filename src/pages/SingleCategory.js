import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useGlobalContext } from '../context'
import Loading from '../components/Loading'
import ProductsBtn from '../components/ProductsBtn'

const SingleCategory = () => {
  const { cgryTitle } = useParams()
  const { products, isLoading } = useGlobalContext()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return isLoading ? (
    <Loading />
  ) : (
    <section className='cgry-products'>
      <div className='container'>
        <div className='cgry-products-content'>
          {products.map((product) => {
            if (product.category === cgryTitle) {
              const { id, title, image } = product
              return (
                <article
                  className='product-card'
                  key={`category product ${id}`}
                >
                  <img src={image} alt={title} />
                  <ProductsBtn {...product} />
                </article>
              )
            }
            return null
          })}
        </div>
      </div>
    </section>
  )
}
export default SingleCategory
