import React from 'react'
import { BsTruck } from 'react-icons/bs'
import { MdOutlinePayment } from 'react-icons/md'
import { RiCustomerService2Fill } from 'react-icons/ri'

const about = () => {
  return (
    <section className='about'>
      <div className='section-header'>
        <h4>About us</h4>
        <h3>Why choose us?</h3>
      </div>
      <div className='container'>
        <div className='about-content'>
          <img
            src='https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
            alt='about us'
          />
          <div className='about-content__info'>
            <SectionInfo />
            <SectionFooter />
          </div>
        </div>
      </div>
    </section>
  )
}

const SectionInfo = () => {
  return (
    <>
      <h3>Trusted by millions of loyal customers around the world</h3>
      <p className='lead'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
        cupiditate culpa eum mollitia asperiores nobis quod impedit. Eius
        obcaecati facere perferendis nam placeat, aliquam necessitatibus natus
        rerum ex debitis id, pariatur veritatis quo tempore sed consequatur
        neque quis mollitia magnam labore vitae harum est laborum? Tenetur
        aliquid iste nam illo.
      </p>
    </>
  )
}

const SectionFooter = () => {
  return (
    <div className='about-content__info__footer'>
      <div>
        <span>
          <BsTruck />
          fast delivery
        </span>
        <span>
          <MdOutlinePayment />
          easy payment
        </span>
        <span>
          <RiCustomerService2Fill />
          open 24/7
        </span>
      </div>
      <a href='/cart' className='btn'>
        Shop Now
      </a>
    </div>
  )
}

export default about
