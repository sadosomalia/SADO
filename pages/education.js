import Meta from '../components/Meta'
import Navigation from '../components/Navigation'

const Education = () => {
  const carousel = [
    {
      _id: 1,
      title: 'EDUCATION',
      image: '/slide.jpg',
      description:
        'SADO works with local schools in Somalia as well as other organizations to provide education opportunities that are fairer, more equitable, and effective',
    },
  ]

  const data = [
    {
      id: 1,
      title: 'Teacher Training',
      description: `SADO provides training and assistance to teachers in order to help them develop and improve their teaching skills`,
    },
    {
      id: 2,
      title: 'School support',
      description:
        'SADO provides school-based education program for students who cannot afford to pay school tuitions',
    },
    {
      id: 3,
      title: 'Provision of school supplies',
      description: 'SADO provides school supplies to students and teachers',
    },
    {
      id: 4,
      title: `Promote gender equity in education`,
      description:
        'SADO encourages the participation of girls in school and ensures they have equal opportunities to boys in school',
    },
  ]
  return (
    <>
      <Meta
        title='Education'
        description='SADO works with local schools in Somalia as well as other organizations to provide education opportunities that are fairer, more equitable, and effective'
      />
      <Navigation carousel={carousel} />

      <div className='container py-3'>
        <div className='row gy-3 my-3'>
          <div className='col-lg-8 col-md-10 col-12 mx-auto text-centera'>
            <p>
              SADO works with local schools in Somalia as well as other
              organizations to provide education opportunities that are fairer,
              more equitable, and effective
            </p>
            <ol className='list-group list-group-numbered'>
              {data.map((d) => (
                <li key={d._id} className='list-group-item border-0'>
                  {d.title} <br /> {d.description}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default Education
