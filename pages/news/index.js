/* eslint-disable @next/next/no-img-element */
import Meta from '../../components/Meta'
import Link from 'next/link'
import Navigation from '../../components/Navigation'

const News = () => {
  const carousel = [
    {
      _id: 1,
      title: 'NEWS PAGE',
      image: '/blank.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora provident quas ab, dolores eum alias voluptas veritatis culpa sapiente ipsum vero! Vel maiores recusandae quod omnis aliquam voluptatibus ea perferendis.',
    },
  ]

  const news = [
    {
      _id: 1,
      title: 'CULPA ASERNATUR NISI',
      slug: 'culpa-asernatur-nisi',
      description: 'Lorem, ipsum dolor sit amet.',
      image: '/card.jpg',
    },
    {
      _id: 2,
      title: 'CULPA ASERNATUR NISI',
      slug: 'culpa-asernatur-nisi',
      description: 'Lorem, ipsum dolor sit amet.',
      image: '/card.jpg',
    },
    {
      _id: 3,
      title: 'CULPA ASERNATUR NISI',
      slug: 'culpa-asernatur-nisi',
      description: 'Lorem, ipsum dolor sit amet.',
      image: '/card.jpg',
    },
    {
      _id: 4,
      title: 'CULPA ASERNATUR NISI',
      slug: 'culpa-asernatur-nisi',
      description: 'Lorem, ipsum dolor sit amet.',
      image: '/card.jpg',
    },
    {
      _id: 5,
      title: 'CULPA ASERNATUR NISI',
      slug: 'culpa-asernatur-nisi',
      description: 'Lorem, ipsum dolor sit amet.',
      image: '/card.jpg',
    },
    {
      _id: 7,
      title: 'CULPA ASERNATUR NISI',
      slug: 'culpa-asernatur-nisi',
      description: 'Lorem, ipsum dolor sit amet.',
      image: '/card.jpg',
    },
    {
      _id: 8,
      title: 'CULPA ASERNATUR NISI',
      slug: 'culpa-asernatur-nisi',
      description: 'Lorem, ipsum dolor sit amet.',
      image: '/card.jpg',
    },
    {
      _id: 9,
      title: 'CULPA ASERNATUR NISI',
      slug: 'culpa-asernatur-nisi',
      description: 'Lorem, ipsum dolor sit amet.',
      image: '/card.jpg',
    },
    {
      _id: 10,
      title: 'CULPA ASERNATUR NISI',
      slug: 'culpa-asernatur-nisi',
      description: 'Lorem, ipsum dolor sit amet.',
      image: '/card.jpg',
    },
    {
      _id: 11,
      title: 'CULPA ASERNATUR NISI',
      slug: 'culpa-asernatur-nisi',
      description: 'Lorem, ipsum dolor sit amet.',
      image: '/card.jpg',
    },
    {
      _id: 12,
      title: 'CULPA ASERNATUR NISI',
      slug: 'culpa-asernatur-nisi',
      description: 'Lorem, ipsum dolor sit amet.',
      image: '/card.jpg',
    },
    {
      _id: 13,
      title: 'CULPA ASERNATUR NISI',
      slug: 'culpa-asernatur-nisi',
      description: 'Lorem, ipsum dolor sit amet.',
      image: '/card.jpg',
    },
  ]

  return (
    <>
      <Meta title='News' />
      <Navigation carousel={carousel} />

      <div id='news' className='container py-5 my-5'>
        <h2 className='fw-bold'>LATEST NEWS</h2>
        <p className='lead pb-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde
          quos nam
        </p>

        <div className='row gy-4'>
          {news.map((n) => (
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
                  <Link href={`news/${n.slug}`}>
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
