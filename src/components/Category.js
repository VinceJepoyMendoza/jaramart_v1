import React, { useRef } from 'react'
import { useNavigate } from 'react-router'
import { categories } from '../data'

const Category = () => {
  const categoryBtn = useRef(null)
  const navigate = useNavigate()

  return (
    <section className='category'>
      <div className='section-header'>
        <h4>Categories</h4>
        <h3>Get a look of what we're offerings</h3>
      </div>
      <div className='category-content'>
        {categories.map((item) => {
          const { title, img, id } = item
          return (
            <span
              key={`category-${id}`}
              ref={categoryBtn}
              onClick={() => navigate(`/category/${title}`)}
            >
              <h1>{title}</h1>
              <img src={img} alt={title} />
            </span>
          )
        })}
      </div>
    </section>
  )
}

export default Category

// Go to certain category page once category item was clicked
