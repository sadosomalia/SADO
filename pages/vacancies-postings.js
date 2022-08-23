import Meta from '../components/Meta'
import Navigation from '../components/Navigation'
import groq from 'groq'
import { getClient } from '../utils/sanity.server'
import { getFileUrlFromId } from '../utils/sanity'

const VacanciesPostings = ({ vacancies, error }) => {
  if (error) {
    return (
      <div className='mt-5'>
        {alertMessage({ status: error.status, message: error.message })}
      </div>
    )
  }

  const carousel = [
    {
      _id: 1,
      title: 'VACANCIES & POSTINGS',
      image: '/blank.jpg',
      description: ``,
    },
  ]

  return (
    <>
      <Meta title='Vacancies & Postings' />
      <Navigation carousel={carousel} />

      <div className='container py-3' style={{ textAlign: 'justify' }}>
        <div className='row gy-3 my-3'>
          <div className='col-lg-8 col-md-10 col-12 mx-auto text-centera'>
            <h3>Vacancies & Postings</h3>

            {vacancies?.map((v) => (
              <div key={v?._id} className='my-3 shadow-sm p-3'>
                <h5>{v?.title}</h5>
                <a
                  href={getFileUrlFromId(v?.file?.asset?._ref)}
                  target='_blank'
                  rel='noreferrer'
                >
                  {v?.title}
                </a>
                <br />
                <br />
                <span className='text-muted text-end'>
                  Published At: {v?.publishedAt.slice(0, 10)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default VacanciesPostings

export async function getServerSideProps({ preview = false }) {
  try {
    const vacancies = await getClient(preview).fetch(groq`
  *[_type == "vacancy" && publishedAt < now()] | order(publishedAt desc){
      _id, 
      title, 
      file,
      publishedAt,
      slug, 
      "author": {
        "name": author->name,
        "image": author->image,
      }
  }
`)

    return {
      props: {
        vacancies,
      },
    }
  } catch (error) {
    return {
      props: {
        error: error.error,
      },
    }
  }
}
