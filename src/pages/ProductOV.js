import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useGlobalContext } from '../context'
import { BsStarFill } from 'react-icons/bs'
import Loading from '../components/Loading'

const ProductOV = () => {
  const { prodId } = useParams()
  const { fetchSingleProduct, singleProduct, isLoading } = useGlobalContext()
  const { id, title, price, description, category, image, rating } =
    singleProduct
  // const ceilRate = Math.ceil(rating.rate)

  // Making stars from rating
  // const Stars = (rate) => {
  //   for (let i = 0; i < rate; i++) {
  //     return <BsStarFill />
  //   }
  // }

  useEffect(() => {
    fetchSingleProduct(prodId)
  }, [fetchSingleProduct, prodId])

  return isLoading ? (
    <Loading />
  ) : (
    <section className='product-overview'>
      <img src={image} alt={title} style={{ width: '50%', height: '500px' }} />
      <div className='product-overview-content'>
        <h4>{title}</h4>
        <p>{description}</p>
        <h3>${price}</h3>
        <h1>bukas naman na bugbog nako sa bug eh haahshahhaa</h1>
        <span>
          {/* <p>{rating.rate}</p>
          <Stars rate={ceilRate} />
          <p>{rating.count}</p> */}
        </span>
        <div className='product-overview-content__item'>
          {/* buttons here */}
        </div>
      </div>
    </section>
  )
}

export default ProductOV
