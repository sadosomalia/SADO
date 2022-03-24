import Meta from '../../components/Meta'
import Navigation from '../../components/Navigation'
const { useRouter } = require('next/router')

const Slug = () => {
  const router = useRouter()
  const { slug } = router.query
  const carousel = [
    {
      _id: 1,
      title: 'CULPA ASERNATUR NISI',
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

  const story = stories.find((story) => story.slug === slug)

  return (
    <>
      <Meta title={story && story.title} />
      <Navigation carousel={carousel} />
      <div className='container'>
        <div className='row gy-3'>
          <div className='col-lg-8 col-md-10 col-12 mx-auto'>
            <h2 className='fw-bold text-center'>{story && story.title}</h2>
            <div className='mt-4'>{story && story.description}</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Slug
