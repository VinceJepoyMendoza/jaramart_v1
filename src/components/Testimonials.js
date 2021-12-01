import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

import { testimonial } from '../data'

const Testimonials = () => {
  return (
    <section className='testimonial'>
      <div className='section-header'>
        <h4>Testimonials</h4>
        <h3>See what our customers says</h3>
      </div>
      <div className='container'>
        <div className='testimonial-content'>
          {testimonial.map((customer) => {
            return <Customer {...customer} key={`customer ${customer.id}`} />
          })}
        </div>
      </div>
    </section>
  )
}

const Customer = ({ name, image, testimony, rating, job }) => {
  // Making stars from rating
  const generateStars = (rate) => {
    let stars = []
    for (let i = 0; i < rate; i++) {
      stars.push(<BsStarFill key={i} />)
    }
    return stars
  }

  return (
    <article className='testimonial-content__item'>
      <div>
        {generateStars(rating)}
        <blockquote>{`${testimony.substring(0, 200)}...`}</blockquote>
        <FaQuoteLeft className='left' />
        <FaQuoteRight className='right' />
      </div>
      <footer>
        <img src={image} alt={name} />
        <span>
          <h4>{name}</h4>
          <small>{job}</small>
        </span>
      </footer>
    </article>
  )
}

export default Testimonials
