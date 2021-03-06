import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import ProductsBtn from '../components/ProductsBtn'
import EmptySelected from '../components/EmptySelected'
import { DiscountStrip } from './ProductOV'
import { useGlobalContext } from '../context'

const WishList = () => {
  const { wishlist, isLoading } = useGlobalContext()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  if (!wishlist.length) {
    return <EmptySelected title='wishes' page='wishlist' />
  }

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <DiscountStrip />
      <section className='wishlist '>
        <div className='container'>
          <h2 className='selected-h3'>Your Wishlist</h2>
          <div className='wishlist-content'>
            {wishlist.map((product) => {
              const { id, title, image } = product
              return (
                <article
                  className='product-card'
                  key={`wishlist product ${id}`}
                >
                  <img src={image} alt={title} />
                  <ProductsBtn {...product} />
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default WishList
