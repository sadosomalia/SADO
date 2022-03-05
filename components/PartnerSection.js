import { FaBullseye, FaEye, FaHandshake } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const PartnerSection = () => {
  const partners = [
    {
      _id: 1,
      title: 'SADO',
      image: '/partner.jpg',
    },
    {
      _id: 2,
      title: 'SADO',
      image: '/partner.jpg',
    },
    {
      _id: 3,
      title: 'SADO',
      image: '/partner.jpg',
    },
    {
      _id: 4,
      title: 'SADO',
      image: '/partner.jpg',
    },
    {
      _id: 5,
      title: 'SADO',
      image: '/partner.jpg',
    },
    {
      _id: 6,
      title: 'SADO',
      image: '/partner.jpg',
    },
  ]
  return (
    <div id='partners' className='container py-5 my-5'>
      <h2 className='fw-bold pt-3'>DONOR PARTNERS </h2>
      <p className='lead pb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde quos
        nam
      </p>

      <div
        id='carouselExampleControls'
        className='carousel slide animate__bounceIn'
        data-bs-ride='carousel'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <div className='row gy-3'>
              {partners.map((partner) => (
                <div key={partner._id} className='col-lg-2 col-md-4 col-6'>
                  <img
                    src={partner.image}
                    className='d-block w-100'
                    alt={partner.title}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='carousel-item'>
            <div className='row gy-3'>
              {partners.map((partner) => (
                <div key={partner._id} className='col-lg-2 col-md-4 col-6'>
                  <img
                    src={partner.image}
                    className='d-block w-100'
                    alt={partner.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleControls'
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
          data-bs-target='#carouselExampleControls'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>

      {/* <div className='row gy-3'>
        {projects.map((project) => (
          <div key={project._id} className='col-lg-2 col-md-4 col-sm-6 col-12'>
            <div className='text-center'>
              <Image
                width={150}
                height={150}
                src={project.image}
                alt={project.title}
                className='card-img-top img-fluid'
              />
              <h6 className=''>{project.title}</h6>
            </div>
          </div>
        ))} */}
      {/* </div> */}
    </div>
  )
}

export default PartnerSection
