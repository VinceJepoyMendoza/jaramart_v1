import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import Loading from '../components/Loading'
import { useGlobalContext } from '../context'

const SingleCategory = () => {
  const { cgryTitle } = useParams()
  const { categoryProducts, isLoading, getCategoryItems } = useGlobalContext()

  useEffect(() => {
    console.log(cgryTitle)
    getCategoryItems(cgryTitle)
  }, [cgryTitle])

  return (
    <div>
      {/* <p>hello world</p>
      <h3>{cgryTitle}</h3> */}
      {isLoading ? (
        <Loading />
      ) : (
        categoryProducts.map((product) => {
          const { id, title, image } = product
          return (
            <article className='cgry-products' key={`category product ${id}`}>
              <h3>{title}</h3>
              <img src={image} alt={title} />
            </article>
          )
        })
      )}
    </div>
  )
}

export default SingleCategory
