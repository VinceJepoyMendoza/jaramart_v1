import React, { useRef, useEffect } from 'react'
import ReactDom from 'react-dom'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const Modal = () => {
  const { closeModal, isModalOpen } = useGlobalContext()
  const modalContainer = useRef(null)

  // Closing modal if clicked outside
  useEffect(() => {
    let handler = (event) => {
      if (isModalOpen) {
        if (!modalContainer.current.contains(event.target)) {
          closeModal()
          // Enable scrolling back
        }
      }
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  // Modal
  return ReactDom.createPortal(
    <>
      <div className='overlay'></div>
      <div className='modal' ref={modalContainer}>
        <button type='button' className='btn btn-modal' onClick={closeModal}>
          <IoMdClose />
        </button>
        <p className='lead'>
          You must be logged in first to continue this action
        </p>
        <Link to='/login' className='lead btn' onClick={closeModal}>
          Login Account
        </Link>
        <small onClick={closeModal}>
          Don't have an account? <Link to='/register'>Create one</Link>
        </small>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal
