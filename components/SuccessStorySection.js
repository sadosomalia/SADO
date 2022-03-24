/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const SuccessStorySection = () => {
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
    <div id='projects' className='container py-5 my-5'>
      <h2 className='fw-bold pt-3'>SUCCESS STORIES</h2>
      <p className='lead pb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde quos
        nam
      </p>

      <div className='row gy-3'>
        {stories.slice(0, 4).map((story) => (
          <div key={story._id} className='col-lg-3 col-md-4 col-sm-6 col-12'>
            <div className='card shadow border-0 rounded-0 animate__bounceIn'>
              <img
                src={story.image}
                alt={story.title}
                className='card-img-top img-fluid'
              />
              <div className='card-body'>
                <h6 className='card-title'>{story.title}</h6>
                <p className='card-text'>{story.description}</p>
                <Link href={`success-stories/${story.slug}`}>
                  <a className='btn btn-outline-success btn-sm rounded-0 shadow'>
                    Read More
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* load more success stories */}
        <div className='col-12 mt-5 text-center'>
          <Link href='/success-stories'>
            <a className='btn btn-outline-success btn-sm rounded-1 shadow'>
              Load More Success Stories
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SuccessStorySection
