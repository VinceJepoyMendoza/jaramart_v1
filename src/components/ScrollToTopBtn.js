import React, { useEffect } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

const ScrollToTopBtn = () => {
  // Scroll btn
  useEffect(() => {
    const currHeight = window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        document.getElementById('scroll-top').style.right = '50px'
      } else {
        document.getElementById('scroll-top').style.right = '-50px'
      }
    })

    return () => window.removeEventListener('scroll', currHeight)
  })
  return (
    <button
      type='button'
      id='scroll-top'
      className='btn btn-scrollTop'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <AiOutlineArrowUp />
    </button>
  )
}

export default ScrollToTopBtn
