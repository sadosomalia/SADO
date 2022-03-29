/* eslint-disable @next/next/no-img-element */
import Meta from '../../components/Meta'
import Link from 'next/link'
import Navigation from '../../components/Navigation'

const Slug = () => {
  const carousel = [
    {
      _id: 1,
      title: 'CULPA ASERNATUR NISI',
      image: '/slide.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora provident quas ab, dolores eum alias voluptas veritatis culpa sapiente ipsum vero! Vel maiores recusandae quod omnis aliquam voluptatibus ea perferendis.',
    },
  ]

  const newDetail = {
    _id: 1,
    title: 'CULPA ASERNATUR NISI',
    description: (
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
          impedit in quam, deleniti a deserunt repellat molestiae dignissimos
          similique, minus id delectus vel necessitatibus facere consectetur
          magnam corrupti molestias nihil? Illum qui sint animi eos debitis
          tenetur dolores magnam quod iure nostrum odio at ut eius in rerum
          culpa nisi ducimus ullam dolor corporis, sapiente autem pariatur.
          Repellendus, asperiores voluptas! Ea dicta rem atque architecto,
          laborum minus quia, repudiandae ullam alias dolor aut eveniet!
          Assumenda excepturi similique temporibus cumque quae aspernatur!
          Commodi, voluptatum laudantium fuga quisquam aperiam labore obcaecati
          officia!
        </p>
        <div className='text-center py-5'>
          <img src='/image.jpg' alt='image' className='text-center img-fluid' />
        </div>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
          impedit in quam, deleniti a deserunt repellat molestiae dignissimos
          similique, minus id delectus vel necessitatibus facere consectetur
          magnam corrupti molestias nihil? Illum qui sint animi eos debitis
          tenetur dolores magnam quod iure nostrum odio at ut eius in rerum
          culpa nisi ducimus ullam dolor corporis, sapiente autem pariatur.
          Repellendus, asperiores voluptas! Ea dicta rem atque architecto,
          laborum minus quia, repudiandae ullam alias dolor aut eveniet!
          Assumenda excepturi similique temporibus cumque quae aspernatur!
          Commodi, voluptatum laudantium fuga quisquam aperiam labore obcaecati
          officia!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
          impedit in quam, deleniti a deserunt repellat molestiae dignissimos
          similique, minus id delectus vel necessitatibus facere consectetur
          magnam corrupti molestias nihil? Illum qui sint animi eos debitis
          tenetur dolores magnam quod iure nostrum odio at ut eius in rerum
          culpa nisi ducimus ullam dolor corporis, sapiente autem pariatur.
          Repellendus, asperiores voluptas! Ea dicta rem atque architecto,
          laborum minus quia, repudiandae ullam alias dolor aut eveniet!
          Assumenda excepturi similique temporibus cumque quae aspernatur!
          Commodi, voluptatum laudantium fuga quisquam aperiam labore obcaecati
          officia!
        </p>
      </div>
    ),
  }

  return (
    <>
      <Meta title='Quod omnis aliquam' />
      <Navigation carousel={carousel} />
      <div className='container'>
        <div className='row gy-3'>
          <div className='col-lg-8 col-md-10 col-12 mx-auto'>
            <h2 className='fw-bold text-center'>{newDetail.title}</h2>
            <div className='mt-4'>{newDetail.description}</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Slug
