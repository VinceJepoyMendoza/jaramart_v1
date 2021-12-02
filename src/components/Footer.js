import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { FaFacebookF, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa'
import { RiInstagramFill, RiLinkedinFill } from 'react-icons/ri'
import { HiOutlineShoppingBag } from 'react-icons/hi'

const Footer = () => {
  const { categories } = useGlobalContext()

  return (
    <footer className='main-footer'>
      <ul>
        <li>
          <h3>Shop by category</h3>
          {categories.map((category, index) => {
            return (
              <Link to='/dummypage' key={index}>
                {category}
              </Link>
            )
          })}
        </li>
        <li>
          <h3>Locations</h3>
          <Link to='/dummypage'>Manila</Link>
          <Link to='/dummypage'>Quezon City</Link>
          <Link to='/dummypage'>Pampanga</Link>
          <Link to='/dummypage'>Cebu</Link>
          <Link to='/dummypage'>Laguna</Link>
        </li>
        <li>
          <h3>Support</h3>
          <Link to='/dummypage'>Reviews</Link>
          <Link to='/dummypage'>Donate</Link>
        </li>
        <li>
          <h3>Company</h3>
          <Link to='/dummypage'>Customer service</Link>
          <Link to='/dummypage'>Terms of use</Link>
          <Link to='/dummypage'>Privacy</Link>
          <Link to='/dummypage'>Careers</Link>
          <Link to='/dummypage'>About</Link>
          <Link to='/dummypage'>CA supply chains act</Link>
          <Link to='/dummypage'>Sustainability</Link>
          <Link to='/dummypage'>Affiliates</Link>
          <Link to='/dummypage'>Recall info</Link>
        </li>
        <li>
          <h3>Contact</h3>
          <div>
            <p className='lead'>Email</p>
            <Link to='/dummypage'>contact us</Link>
          </div>
          <div>
            <p className='lead'>Telephone</p>
            <p className='fp'>+63 999 9999 999</p>
          </div>
          <div>
            <h4>Address</h4>
            <address>
              Andress bonifacio st biñan city, <br /> Province of laguna
              Philippines
            </address>
          </div>
          <div>
            <h4>Physical Store hours</h4>
            <p className='fp'>M - F 6:am - 8:00pm PST</p>
          </div>
        </li>
      </ul>
      <div className='footer-content'>
        <div>
          <h3>store locator</h3>
          <small>find a vans store near you</small>
          <Link to='/dummypage' className='btn btn-footer'>
            find a store
          </Link>
        </div>
        <div>
          <h3>Follow jaramart</h3>
          <div className='footer-icons'>
            <Link to='/dummypage' target='_blank'>
              <FaFacebookF />
            </Link>
            <Link to='/dummypage' target='_blank'>
              <RiInstagramFill />
            </Link>
            <Link to='/dummypage' target='_blank'>
              <FaTwitter />
            </Link>
            <Link to='/dummypage' target='_blank'>
              <FaYoutube />
            </Link>
            <Link to='/dummypage' target='_blank'>
              <RiLinkedinFill />
            </Link>
            <Link to='/dummypage' target='_blank'>
              <FaGithub />
            </Link>
          </div>
        </div>
        <form>
          <h3>Subscribe</h3>
          <small>Receive product news and updates in your inbox</small>
          <input type='email' placeholder='Email address' />
        </form>
      </div>
      <footer>
        <Link to='/welcome' className='logo'>
          Jaramart
          <HiOutlineShoppingBag />
        </Link>
        <small>
          &copy; Copyright {new Date().getFullYear()} Multi-purpose company |
          created by{' '}
          <a
            href='https://github.com/VinceJepoyMendoza'
            target='_blank'
            rel='noreferrer'
          >
            Vince Jepoy Mendoza
          </a>
        </small>
      </footer>
    </footer>
  )
}

export default Footer
