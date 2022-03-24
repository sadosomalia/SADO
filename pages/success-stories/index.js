/* eslint-disable @next/next/no-img-element */
import Meta from '../../components/Meta'
import Link from 'next/link'
import Navigation from '../../components/Navigation'

const News = () => {
  const carousel = [
    {
      _id: 1,
      title: 'SUCCESS STORIES',
      image: '/slide.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora provident quas ab, dolores eum alias voluptas veritatis culpa sapiente ipsum vero! Vel maiores recusandae quod omnis aliquam voluptatibus ea perferendis.',
      height: '540px',
    },
  ]

  const stories = [
    {
      _id: 1,
      title: 'CHANGING DESERT LOCUST INFESTATION IN SOMALIA',
      slug: 'changing-desert-locust-infestation-in-somalia',
      description:
        'Meet Mohamed Abdirahman Abdalla, a 83-year-old, a farmer...',
      image: '/card.jpg',
    },
    {
      _id: 2,
      title: 'CHANGING LIVELIHOOD STYLE FOR FFA PROJECT',
      slug: 'changing-lifestyle-style-for-ffa-project',
      description:
        'Meet Ahmed Nuur Salat, a 50-year-old, a farmer living in Bardera...',
      image: '/card.jpg',
    },
    {
      _id: 3,
      title:
        'SADO PEACE CENTER CURBS ILLEGAL IMMIGRATION AND CREATES INCOME GENERATING SKILLS FOR KISMAYU YOUTH ',
      slug: 'sado-peace-center-curbos-illegal-immigration-and-creates-income-generating-skills-for-kismayu-youth',
      description:
        'Tahrib’, is a Somali word which means trafficking and all Somali...',
      image: '/card.jpg',
    },
    {
      _id: 4,
      title: 'SOMALI FEMALES EMBRACING MEN “OWNED” SKILLS TO MAKE ENDS MEET',
      slug: 'somali-females-embracing-men-skills-to-make-ends-meet',
      description:
        'Historically, women have been few in the auto repair industry...',
      image: '/card.jpg',
    },
  ]

  return (
    <>
      <Meta title='Success Stories' />
      <Navigation carousel={carousel} />

      <div id='news' className='container py-5 my-5'>
        <h2 className='fw-bold pt-3'>SUCCESS STORIES</h2>
        <p className='lead pb-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde
          quos nam
        </p>

        <div className='row gy-4'>
          {stories.map((n) => (
            <div key={n._id} className='col-lg-3 col-md-4 col-sm-6 col-12'>
              <div className='card border-0 rounded-0 animate__bounceIn'>
                <img
                  src={n.image}
                  alt={n.title}
                  className='img-fluid card-img-top shadow'
                />
                <div className='card-body shadow bg-light'>
                  <h6 className='card-title'>{n.title}</h6>
                  <p className='card-text'>{n.description}</p>
                  <Link href={`success-stories/${n.slug}`}>
                    <a className='btn btn-outline-success btn-sm rounded-0 shadow'>
                      Read More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default News
