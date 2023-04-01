import { NavLink } from 'react-router-dom'
import { FaFacebookSquare, FaYoutubeSquare, FaInstagramSquare } from 'react-icons/fa';
import './header.css'
const Header = () => {
  return (
    <>
    
  <nav className='main-nav'>
    <div className='logo'>
        <h2>
          <span>A</span>nimal
          <span>K</span>ingdom
        </h2>
    </div>
    <div className='menu-link'>
      <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          
      </ul>
    </div>

{/* social media */}
<div className='social-media'>
          <ul className='social-media-desktop'>
          <li>
              <a href='https://www.youtube.com/@ThapaTechnical' target='_new tab'>
                <FaYoutubeSquare className='youtube'/>
              </a>
            </li>
            <li>
              <a href='https://www.youtube.com/@ThapaTechnical' target='_new tab'>
                <FaInstagramSquare className='instagram'/>
              </a>
            </li>
            <li>
              <a href='https://www.youtube.com/@ThapaTechnical' target='_new tab'>
                <FaFacebookSquare className='facebook'/>
              </a>
            </li>
          </ul>
        </div>

    </nav>

    {/* <section className='hero-section' >
      <p>welcome to the </p>
      <h1>Jungle</h1>
      </section> */}
  </>
  )
}

export default Header
