import Link from 'next/link'
import { FaBullseye, FaEye, FaHandshake } from 'react-icons/fa'

const AboutSection = () => {
  const data = [
    {
      _id: 2,
      title: 'MISSION',
      description:
        'Our mission is to work with our partners in improving the quality of life of vulnerable communities...',
      image: <FaBullseye className='img-fluid fs-1 mx-auto mt-2' />,
    },
    {
      _id: 1,
      title: 'VISION',
      description:
        'A horn of Africa in which vulnerable communities live in dignity and security...',
      image: <FaEye className='img-fluid fs-1 mx-auto mt-2' />,
    },
    {
      _id: 3,
      title: 'CORE VALUES',
      description:
        'SADO believes in, and is guided by the following ideals....',
      image: <FaHandshake className='img-fluid fs-1 mx-auto mt-2' />,
    },
  ]
  return (
    <div className='container pt-5'>
      <div className='row'>
        <div className='col-lg-6 col-md 6 col-12 my- mx-auto text-center'>
          <h2 className='fw-bold py-3'>ABOUT US</h2>
          <p>
            Social Life and Agricultural Development Organization (SADO) is a
            Somalia based Local Non-Governmental Organization (LNGO) established
            in 1994 with the aim of spearheading local development initiatives
            in Somalia.
          </p>
        </div>
      </div>
      <div className='row'>
        {data.map((item) => (
          <div key={item._id} className='col-md-4 col-12 my-2'>
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
      <div className='text-center'>
        <Link href='/about'>
          <a className='btn btn-outline-success rounded-0 shadow-none my-3'>
            Read More
          </a>
        </Link>
      </div>
    </div>
  )
}

export default AboutSection
