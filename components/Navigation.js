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
      title: 'LOREM IPSUM DOLOR',
      image: '/slide.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora provident quas ab, dolores eum alias voluptas veritatis culpa sapiente ipsum vero! Vel maiores recusandae quod omnis aliquam voluptatibus ea perferendis.',
      height: '100%',
    },
    {
      _id: 2,
      title: 'SIT AMET CONSECTETUR',
      image: '/slide.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora provident quas ab, dolores eum alias voluptas veritatis culpa sapiente ipsum vero! Vel maiores recusandae quod omnis aliquam voluptatibus ea perferendis.',
    },
    {
      _id: 3,
      title: 'ADIPISCING ELIT',
      image: '/slide.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora provident quas ab, dolores eum alias voluptas veritatis culpa sapiente ipsum vero! Vel maiores recusandae quod omnis aliquam voluptatibus ea perferendis.',
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
                  WHO WE ARE
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <Link href='/about'>
                      <a className='dropdown-item fw-bold'>ABOUT US</a>
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
                        POLICIES AND PROCEDURE
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
                <Link href='/#contact'>
                  <a className='nav-link  ' aria-current='page'>
                    CONTACT US
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
