import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useGlobalContext } from '../context'
import Loading from '../components/Loading'
import ProductsBtn from '../components/ProductsBtn'

const SingleCategory = () => {
  const { cgryTitle } = useParams()
  const { products, isLoading, fetchData } = useGlobalContext()

  useEffect(() => {
    window.scrollTo({ top: 0 })
    fetchData()
  }, [fetchData])

  return isLoading ? (
    <Loading />
  ) : (
    <section className='cgry-products'>
      {products.map((product) => {
        if (product.category === cgryTitle) {
          const { id, title, image } = product
          return (
            <article className='product-card' key={`category product ${id}`}>
              <img src={image} alt={title} />
              <ProductsBtn {...product} />
            </article>
          )
        }
        return ''
      })}
    </section>
  )
}
export default SingleCategory
