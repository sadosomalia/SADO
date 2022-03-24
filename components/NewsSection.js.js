/* eslint-disable @next/next/no-img-element */
import { FaBullseye, FaEye, FaHandshake } from 'react-icons/fa'
import Link from 'next/link'

const NewsSection = () => {
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
      _id: 6,
      title: 'CULPA ASERNATUR NISI',
      slug: 'culpa-asernatur-nisi',
      description: 'Lorem, ipsum dolor sit amet.',
      image: '/card.jpg',
    },
  ]
  return (
    <div id='news' className='container py-5 my-5'>
      <h2 className='fw-bold pt-3'>LATEST NEWS</h2>
      <p className='lead pb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde quos
        nam
      </p>

      <div className='row gy-3'>
        {news.slice(0, 4).map((n) => (
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
                <Link href={`/news/${n.slug}`}>
                  <a className='btn btn-outline-success btn-sm rounded-0 shadow'>
                    Read More
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* load more success news */}
        <div className='col-12 mt-5 text-center'>
          <Link href='/news'>
            <a className='btn btn-outline-success btn-sm rounded-1 shadow'>
              Load More News
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NewsSection
