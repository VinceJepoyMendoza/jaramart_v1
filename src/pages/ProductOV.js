import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useGlobalContext } from '../context'
import { BsStarFill, BsCart3 } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import Loading from '../components/Loading'

const ProductOV = () => {
  const { prodId } = useParams()
  const { products, isLoading } = useGlobalContext()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return isLoading || !products ? (
    <Loading />
  ) : (
    <>
      <DiscountStrip />
      <section className='product-overview'>
        {products.map((currProd) => {
          if (currProd.id === Number(prodId)) {
            return <Overview {...currProd} key={currProd.id} />
          }
          return null
        })}
      </section>
    </>
  )
}

const Overview = ({
  id,
  title,
  price,
  category,
  description,
  image,
  rating,
  isInWishlist,
  isInCart,
}) => {
  const { toggleWishlist, toggleCart } = useGlobalContext()
  const finalRate = Math.round(rating?.rate)

  // Making stars from rating
  const generateStars = () => {
    let stars = []
    for (let i = 0; i < finalRate; i++) {
      stars.push(<BsStarFill key={i} />)
    }
    return stars
  }

  return (
    <>
      <div className='product-overview-content'>
        <img
          src={image}
          alt={title}
          style={{ width: '50%', height: '500px' }}
        />
        <div className='product-overview-content__item'>
          <h3>{title}</h3>
          <p>
            <span className='prodTitle'>category:</span>In {category}
          </p>
          <h3 className='price'>for only ${price}</h3>
          <div className='rating'>
            <span className='prodTitle'>reviews:</span>
            <p>{rating?.rate}</p>
            <b>{generateStars()}</b>
            <p>({rating?.count})</p>
          </div>
          <div className='product-overview-content__btn'>
            <button
              type='button'
              className='btn btn-overview'
              onClick={() => toggleWishlist(id)}
            >
              <p>
                {' '}
                {isInWishlist
                  ? 'added to your wishlist'
                  : 'add to your wishlist'}{' '}
              </p>
              <FiHeart style={{ fontSize: '1.4rem' }} />
            </button>
            <button
              type='button'
              className='btn btn-overview'
              onClick={() => toggleCart(id)}
            >
              <p> {isInCart ? 'added to your cart' : 'add to your cart'} </p>
              <BsCart3 style={{ fontSize: '1.4rem' }} />
            </button>
          </div>
          <p className='lead'>
            <span className='prodTitle'>description:</span>
            {description}
          </p>
        </div>
      </div>
    </>
  )
}

export const DiscountStrip = () => {
  return (
    <div className='product-overview__discount'>
      <h4>
        Get up to 25% discount this coming christmas only here at{' '}
        <span>Jaramart</span>
      </h4>
    </div>
  )
}

export default ProductOV
