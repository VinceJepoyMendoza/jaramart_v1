import React from 'react'
import Loading from '../components/Loading'
import { FiSearch, FiHeart } from 'react-icons/fi'
import { BsCart3 } from 'react-icons/bs'
import { useGlobalContext } from '../context'

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
          {products.map((product) => {
            const { id, image, title } = product
            return (
              <div className='products-content__item' key={`product-${id}`}>
                <img src={image} alt={title} />
                <div className='products-content__item__btn'>
                  <button className='btn'>
                    <BsCart3 />
                  </button>
                  <button className='btn'>
                    <FiSearch />
                  </button>
                  <button className='btn'>
                    <FiHeart />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default Products

// btn/svg hover not working
// center btn
