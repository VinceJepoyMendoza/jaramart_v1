import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useGlobalContext } from '../context'
import { BsStarFill, BsCart3 } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import Loading from '../components/Loading'

const ProductOV = () => {
  const { prodId } = useParams()
  const { fetchSingleProduct, singleProduct, isLoading } = useGlobalContext()
  const { title, price, description, category, image, rating } = singleProduct
  const ceilRate = Math.ceil(rating?.rate)

  // Making stars from rating
  const generateStars = () => {
    let stars = []
    for (let i = 0; i < ceilRate; i++) {
      stars.push(<BsStarFill key={i} />)
    }
    return stars
  }

  useEffect(() => {
    fetchSingleProduct(prodId)
  }, [fetchSingleProduct, prodId])

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div className='product-overview__discount'>
        <h4>
          Get up to 25% discount this coming christmas only here at{' '}
          <span>Jaramart</span>
        </h4>
      </div>
      <section className='product-overview'>
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
              <button type='button' className='btn btn-overview'>
                <p> add to your wishlist</p>
                <FiHeart style={{ fontSize: '1.4rem' }} />
              </button>
              <button type='button' className='btn btn-overview'>
                <p>add to your cart</p>
                <BsCart3 style={{ fontSize: '1.4rem' }} />
              </button>
            </div>
            <p className='lead'>
              <span className='prodTitle'>description:</span>
              {description}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductOV
