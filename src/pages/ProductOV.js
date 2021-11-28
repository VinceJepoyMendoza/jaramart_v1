import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useGlobalContext } from '../context'
import { BsStarFill } from 'react-icons/bs'
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
    <section className='product-overview'>
      <div className='container'>
        <img
          src={image}
          alt={title}
          style={{ width: '50%', height: '500px' }}
        />
        <div className='product-overview-content'>
          <div>
            <h4>{title}</h4>
            <small>{category}</small>
          </div>
          <div>
            <h3>${price}</h3>
            <p className='lead'>{description}</p>
          </div>
          {/* <h1>bukas naman na bugbog nako sa bug eh haahshahhaa</h1> */}
          <div>
            <p>{rating?.rate}</p>
            <b>{generateStars()}</b>
            <p>{rating?.count}</p>
          </div>
          <div className='product-overview-content__item'>
            {/* buttons here */}
          </div>
        </div>
      </div>
      <h1>
        napaka punyetang bug yan! '?' lang pala katapat inabot pa ng 2 gabi
        hahahsahhjah
      </h1>
    </section>
  )
}

export default ProductOV
