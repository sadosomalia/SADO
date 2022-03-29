import Image from 'next/image'

const PartnerSection = ({ partners }) => {
  return (
    <>
      <h2 className='fw-bold'>DONOR PARTNERS </h2>
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
              {partners &&
                partners.length > 0 &&
                partners.map((partner) => (
                  <div
                    key={partner._id}
                    className='col-lg-2 col-md-4 col-6 mx-auto'
                  >
                    <Image
                      width={150}
                      height={150}
                      src={`http://164.92.157.29${partner.attributes.logo.data.attributes.url}`}
                      alt={partner.attributes.logo.data.attributes.name}
                      className='d-block w-100'
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className='carousel-item'>
            <div className='row gy-3'>
              {partners &&
                partners.length > 0 &&
                partners.map((partner) => (
                  <div
                    key={partner._id}
                    className='col-lg-2 col-md-4 col-6 mx-auto'
                  >
                    <Image
                      width={150}
                      height={150}
                      src={`http://164.92.157.29${partner.attributes.logo.data.attributes.url}`}
                      alt={partner.attributes.logo.data.attributes.name}
                      className='d-block w-100'
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
    </>
  )
}

export default PartnerSection
