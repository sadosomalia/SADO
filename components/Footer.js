/* eslint-disable @next/next/no-img-element */
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaMapMarked,
} from 'react-icons/fa'
const Footer = () => {
  const locations = [
    {
      _id: 1,
      office: 'Mogadishu Office',
      address: 'Bula Hubey, Wadajir District Behind Aden Abdulle Hospital,',
      phone: '+252614122223',
      phoneText: '+252-614-122-223',
    },
    {
      _id: 2,
      office: 'Kismayu Office',
      address: 'Behind Red Cross Office',
      phone: '+252614122227',
      phoneText: '+252-614-122-227',
    },
    {
      _id: 3,
      office: 'Bardera Office',
      address: 'Opposite Hormuud Branch',
      phone: '+252614122228',
      phoneText: '+252-614-122-228',
    },
  ]

  return (
    <footer id='contact'>
      <div className='container py-5'>
        <div className='row gy-3'>
          <div className='col-lg-4 col-md-6 col-12'>
            <h3 className='fw-bold'>About us</h3>
            <p className='lead'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              quibusdam harum consectetur cumque minus quis ipsum quasi, in
              suscipit vero modi repudiandae, consequatur aperiam cum sed,
              architecto quae animi reiciendis. Repellat officiis nemo harum cum
              totam quia molestiae? Pariatur numquam vero.
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
              {locations.map((location) => (
                <>
                  <h6 className='fw-bold'>{location.office}</h6>
                  <div key={location._id} className='my-1'>
                    <FaPhoneAlt className='text-success' />
                    <a
                      href={`tel:${location.phone}`}
                      className='ms-2 text-decoration-none text-black'
                    >
                      {location.phoneText}
                    </a>
                  </div>
                  <div key={location._id} className='my-1'>
                    <FaMapMarked className='text-success' />
                    <span className='ms-2'>{location.address}</span>
                  </div>
                  <hr />
                </>
              ))}
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
          <div className='col-lg-4 col-12'>
            <h3 className='fw-bold'>Visit us</h3>
            <p className='lead'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, quisquam.
            </p>

            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15949.270655878952!2d45.305239!3d2.028667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4109227b6d8951b3!2sSADO%20Mogadishu%20office!5e0!3m2!1sen!2sso!4v1646505736967!5m2!1sen!2sso'
              width='100%'
              height='500px'
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
