import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaMarker,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className=''>
      <div className='container py-5'>
        <div className='row gy-3'>
          <div className='col-lg-4 col-md-6 col-12'>
            <h3 className='fw-bold'>About us</h3>
            <p className='lead'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, quisquam.
            </p>
            <img src='/logo.png' alt='logo' className='img-fluid w-25' />
          </div>
          <div className='col-lg-4 col-md-6 col-12'>
            <h3 className='fw-bold'>Get in touch</h3>
            <p className='lead'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, quisquam.
            </p>

            <div className='d-flex flex-column my-4'>
              <div className='my-1'>
                <FaPhoneAlt className='text-success' />
                <a
                  href='tel:+252615301507'
                  className='ms-2 text-decoration-none text-black'
                >
                  +252 (0) 61 5 301 5007
                </a>
              </div>
              <div className='my-1'>
                <FaEnvelope className='text-success' />
                <a
                  href='mailto:info@sadosom.org'
                  className='ms-2 text-decoration-none text-black'
                >
                  info@sadosom.org
                </a>
              </div>
              <div className='my-1'>
                <FaGlobe className='text-success' />
                <a
                  href='https://www.sadosom.org'
                  className='ms-2 text-decoration-none text-black'
                >
                  https://www.sadosom.org
                </a>
              </div>
            </div>

            <div className='d-flex'>
              <div className=''>
                <a href='https://facebook.com/sadosomalia'>
                  <FaFacebookSquare className='fs-1 text-success' />
                </a>
              </div>
              <div className='ms-3'>
                <a href='https://twitter.com/sadosomalia1'>
                  <i className='fab fa-twitter'></i>
                  <FaTwitterSquare className='fs-1 text-success' />
                </a>
              </div>
              <div className='ms-3'>
                <a href='https://instagram.com/sadosomalia'>
                  <i className='fab fa-instagram'></i>
                  <FaInstagramSquare className='fs-1 text-success' />
                </a>
              </div>
              <div className='ms-3'>
                <a href='https://youtube.com/sadosomalia'>
                  <i className='fab fa-linkedin-in'></i>
                  <FaYoutubeSquare className='fs-1 text-success' />
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-12'>
            <h3 className='fw-bold'>Visit us</h3>
            <p className='lead'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, quisquam.
            </p>

            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15949.270655878952!2d45.305239!3d2.028667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4109227b6d8951b3!2sSADO%20Mogadishu%20office!5e0!3m2!1sen!2sso!4v1646505736967!5m2!1sen!2sso'
              width='400'
              height='300'
              style={{ border: '0' }}
              allowFullScreen=''
              loading='lazy'
            ></iframe>
          </div>
        </div>
      </div>
      <div className='container-fluid bg-dark py-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-12'>
              <p className='text-white'>
                Copyright &copy; {new Date().getFullYear()} SADO - All Rights
                Reserved
              </p>
            </div>
            <div className='col-lg-6 col-md-6 col-12'>
              <p className='text-white text-right'>
                Designed by{' '}
                <a className='text-light' href='https://websom.dev'>
                  websom
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
  //       Copyright &copy; {new Date().getFullYear()} SADO - All Rights Reserved

  //     </div>
  //   </footer>
  // )
}

export default Footer
