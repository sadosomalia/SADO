import Meta from '../components/Meta'
import Navigation from '../components/Navigation'

const About = () => {
  const carousel = [
    {
      _id: 1,
      title: 'FROM ABOUT PAGE',
      image: '/slide.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora provident quas ab, dolores eum alias voluptas veritatis culpa sapiente ipsum vero! Vel maiores recusandae quod omnis aliquam voluptatibus ea perferendis.',
      height: '540px',
    },
  ]
  return (
    <>
      <Meta />
      <Navigation carousel={carousel} />

      <div className='container text-center p-5'>
        <span className='text-success'>Coming soon!</span>
      </div>
    </>
  )
}

export default About
