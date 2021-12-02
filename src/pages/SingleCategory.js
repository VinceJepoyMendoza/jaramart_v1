import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useGlobalContext } from '../context'
import Loading from '../components/Loading'
import ProductsBtn from '../components/ProductsBtn'

const SingleCategory = () => {
  const { cgryTitle } = useParams()
  const { categoryProducts, isLoading, getCategoryItems } = useGlobalContext()

  useEffect(() => {
    window.scrollTo({ top: 0 })
    getCategoryItems(cgryTitle)
  }, [getCategoryItems, cgryTitle])

  return isLoading ? (
    <Loading />
  ) : (
    <section className='cgry-products'>
      {categoryProducts.map((product) => {
        const { id, title, image } = product
        return (
          <article className='product-card' key={`category product ${id}`}>
            <h4>{title}</h4>
            <img src={image} alt={title} />
            <ProductsBtn id={id} />
          </article>
        )
      })}
    </section>
  )
}
export default SingleCategory
