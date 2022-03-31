/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useEffect } from 'react'
import Carousel from './Carousel'

const Navigation = ({ carousel }) => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('header')
      nav.classList.toggle('sticky', window.scrollY > 100)
    })
  }, [])

  const carouselDef = [
    {
      _id: 1,
      title: 'EDUCATION',
      image: '/slides/education.jpg',
      description: 'Markabley primary school in Bardera-girls queuing',
      height: '100%',
    },
    {
      _id: 2,
      title: 'NCA-WFP SCOPE PROJECT',
      image: '/slides/scope-project.jpg',
      description: 'Scope beneficiaries redeeming their food from the vendor',
    },
    {
      _id: 3,
      title: 'SCOPE LIVELIHOOD ACTIVITY',
      image: '/slides/livelihood.jpg',
      description:
        'Scope beneficiaries are performing FFW activities at their farms',
    },
  ]

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
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  ABOUT US
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <Link href='/about'>
                      <a className='dropdown-item fw-bold'>HISTORY</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/network'>
                      <a className='dropdown-item fw-bold'>OUR NETWORKS</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/board-of-directors'>
                      <a className='dropdown-item fw-bold'>
                        BOARD OF DIRECTORS
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/management-and-organization-structure'>
                      <a className='dropdown-item fw-bold'>
                        MANAGEMENT STRUCTURE
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/policies-procedures'>
                      <a className='dropdown-item fw-bold'>
                        POLICIES AND PROCEDURES
                      </a>
                    </Link>
                  </li>
                  {/* <li>
                      <Link href='/#about'>
                        <a className='dropdown-item fw-bold'>REGIONAL OFFICES</a>
                      </Link>
                    </li> */}
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
                    <Link href='/food-security-nutrition'>
                      <a className='dropdown-item fw-bold'>
                        FOOD SECURITY & NUTRITION
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href='/csee'>
                      <a className='dropdown-item fw-bold'>
                        CLIMATE SMART ECONOMIC EMPOWERMENT (CSEE)
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href='/crwash'>
                      <a className='dropdown-item fw-bold'>
                        CLIMATE RESILIENT WATER, SANITATION & HYGIENE (CRWASH)
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/education'>
                      <a className='dropdown-item fw-bold'>EDUCATION</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/health'>
                      <a className='dropdown-item fw-bold'>HEALTH</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/peace-building-social-cohesion'>
                      <a className='dropdown-item fw-bold'>
                        PEACE BUILDING & SOCIAL COHESION
                      </a>
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
                    <Link href='/where-we-work/somalia'>
                      <a className='dropdown-item fw-bold'>SOMALIA</a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className='nav-item'>
                <Link href='/#contact'>
                  <a className='nav-link  ' aria-current='page'>
                    CONTACT US
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/#donate'>
                  <a
                    className='nav-link  btn border-0 fw-bold rounded-0 bg-success donate-btn'
                    style={{ backgroundCOlor: 'green' }}
                    aria-current='page'
                  >
                    DONATE NOW
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Carousel
        carousel={carousel && carousel.length > 0 ? carousel : carouselDef}
      />
    </header>
  )
}

export default Navigation
