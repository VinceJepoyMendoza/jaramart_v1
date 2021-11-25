import React from 'react'
import { features } from '../data'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Autoplay])

const Header = () => {
  return (
    <Swiper
      tag='header'
      wrapperTag='ul'
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      className='carousel'
    >
      {features.map((feature) => {
        const { id, title, img, description } = feature
        return (
          <SwiperSlide tag='li' key={`slide-${id}`} className='carousel-slide'>
            <img src={img} alt={title} />
            <span>
              <h2>{title}</h2>
              <p>{description}</p>
            </span>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Header
