import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'

const Contact = () => {
  return (
    <section className='contact'>
      <div className='section-header'>
        <h4>Contact</h4>
        <h3>Get in touch with us</h3>
      </div>
      <div className='container'>
        <div className='contact-content'>
          <Aside />
          <Form />
        </div>
      </div>
    </section>
  )
}

const Aside = () => {
  return (
    <aside>
      <h2>#1 ecommerce site in the philippines</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi atque
        ipsa laborum natus, soluta similique dolorum, reiciendis mollitia
        veritatis perferendis pariatur iure!
      </p>
      <h3>World class qualities</h3>
      <ul>
        <li>
          <BsCheckCircle /> reliable
        </li>
        <li>
          <BsCheckCircle /> competitive
        </li>
        <li>
          <BsCheckCircle /> trusted
        </li>
        <li>
          <BsCheckCircle /> long lasting
        </li>
      </ul>
    </aside>
  )
}

const Form = () => {
  return (
    <form>
      <h3>How can we help you today?</h3>
      <div className='formname'>
        <input type='text' placeholder='Enter your firstname' />
        <input type='text' placeholder='Enter your lastname' />
      </div>
      <div>
        <input type='email' placeholder='Enter your email' />
      </div>
      <div>
        <input type='text' placeholder='Subject (optional)' />
      </div>
      <div>
        <label>Enter your message here:</label>
        <textarea />
      </div>
    </form>
  )
}

export default Contact
