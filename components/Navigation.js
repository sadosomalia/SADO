import Link from 'next/link'
import { useEffect } from 'react'

const Navigation = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('header')
      nav.classList.toggle('sticky', window.scrollY > 100)
    })
  }, [])

  return (
    <header id='header'>
      <nav className='navbar navbar-expand-lg navbar-light fw-bold'>
        <div className='container'>
          <Link href='/'>
            <a className='navbar-brand d-flex align-items-center'>
              <img src='/logo.png' alt='logo' width='60' height='60' />
              {/* <span className='ms-2'> CeRID</span> */}
            </a>
          </Link>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link href='/about'>
                  <a className='nav-link  ' aria-current='page'>
                    ABOUT US
                  </a>
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  WHO WE ARE
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <Link href='/#about'>
                      <a className='dropdown-item fw-bold'>ABOUT US</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/#about'>
                      <a className='dropdown-item fw-bold'>
                        STRATEGIC OBJECTIVES
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/#about'>
                      <a className='dropdown-item fw-bold'>
                        ORGANIZATION CULTURE
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/#about'>
                      <a className='dropdown-item fw-bold'>
                        BOARD OF DIRECTORS
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/#about'>
                      <a className='dropdown-item fw-bold'>
                        ORGANIZATION STRUCTURE
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/#about'>
                      <a className='dropdown-item fw-bold'>
                        POLICY AND PROCEDURE
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/#about'>
                      <a className='dropdown-item fw-bold'>REGIONAL OFFICES</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  WHAT WE DO
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <Link href='/#governance'>
                      <a className='dropdown-item fw-bold'>GOVERNANCE</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/#livelihood'>
                      <a className='dropdown-item fw-bold'>LIVELIHOOD</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/#livelihood'>
                      <a className='dropdown-item fw-bold'>NUTRITION</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/#a'>
                      <a className='dropdown-item fw-bold'>CRWASH</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/#about'>
                      <a className='dropdown-item fw-bold'>HEALTH</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/#about'>
                      <a className='dropdown-item fw-bold'>PEACE BUILDING</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/#about'>
                      <a className='dropdown-item fw-bold'>CSEE</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  WHERE WE WORK
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <Link href='/#national'>
                      <a className='dropdown-item fw-bold'>NATIONAL</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/#international'>
                      <a className='dropdown-item fw-bold'>INTERNATIONAL</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <Link href='/contact'>
                  <a className='nav-link  ' aria-current='page'>
                    CONTACT US
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        id='carouselExampleIndicators'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src='/slide.jpg' className='d-block w-100' alt='...' />
            <div
              className='carousel-caption d-none d-md-block'
              data-aos='fade-up'
              data-aos-duration='2000'
            >
              <h5 className='display-1 fw-bold'>LOREM IPSUM DOLOR</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                provident quas ab, dolores eum alias voluptas veritatis culpa
                sapiente ipsum vero! Vel maiores recusandae quod omnis aliquam
                voluptatibus ea perferendis.
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <img src='/slide.jpg' className='d-block w-100' alt='...' />
            <div
              className='carousel-caption d-none d-md-block'
              data-aos='fade-up'
              data-aos-duration='2000'
            >
              <h5 className='display-1 fw-bold'> SIT AMET CONSECTETUR</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                provident quas ab, dolores eum alias voluptas veritatis culpa
                sapiente ipsum vero! Vel maiores recusandae quod omnis aliquam
                voluptatibus ea perferendis.
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <img src='/slide.jpg' className='d-block w-100' alt='...' />
            <div
              className='carousel-caption d-none d-md-block'
              data-aos='fade-up'
              data-aos-duration='2000'
            >
              <h5 className='display-1 fw-bold'>PORRO QUISQUAM EST</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                provident quas ab, dolores eum alias voluptas veritatis culpa
                sapiente ipsum vero! Vel maiores recusandae quod omnis aliquam
                voluptatibus ea perferendis.
              </p>
            </div>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </header>
  )
}

export default Navigation
