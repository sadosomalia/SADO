import Link from 'next/link'
import { FaBullseye, FaEye, FaHandshake } from 'react-icons/fa'

const AboutSection = () => {
  const data = [
    {
      _id: 2,
      title: 'MISSION',
      description: 'To be the best in the industry',
      image: <FaBullseye className='img-fluid fs-1 mx-auto mt-2' />,
    },
    {
      _id: 1,
      title: 'VISION',
      description: 'To be the best in the industry',
      image: <FaEye className='img-fluid fs-1 mx-auto mt-2' />,
    },
    {
      _id: 3,
      title: 'CORE VALUES',
      description: 'To be the best in the industry',
      image: <FaHandshake className='img-fluid fs-1 mx-auto mt-2' />,
    },
  ]
  return (
    <div className='container pt-5'>
      <div className='row'>
        <div className='col-lg-6 col-md 6 col-12 my-auto'>
          <h2 className='fw-bold py-3'>ABOUT US</h2>
          <p>
            Social Life and Agricultural Development Organization (SADO) is a
            Somalia based Local Non-Governmental Organization (LNGO) established
            in 1994 with the aim of spearheading local development initiatives
            in GEDO region and other parts of South-Central Somalia.
          </p>
          <Link href='/about'>
            <a className='btn btn-outline-success rounded-0 shadow-none my-3'>
              Read More
            </a>
          </Link>
        </div>
        <div className='col-lg-6 col-md 6 col-12 my-auto'>
          <div className='row'>
            {data.map((item) => (
              <div
                key={item._id}
                className='col-lg-7 col-md-10 col-sm-6 col-12 mx-auto my-2'
              >
                <div className='card border-0 rounded-0 shadow-lg animate__bounceIn'>
                  {item.image}
                  <div className='card-body text-center p-2'>
                    <h5 className='card-text fw-bold'>{item.title}</h5>
                    <div className='card-text'>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
