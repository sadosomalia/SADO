import Meta from '../../components/Meta'
import Navigation from '../../components/Navigation'
import { alertMessage } from '../../utils/alert'
import groq from 'groq'
import { getClient } from '../../utils/sanity.server'
import { PortableText } from '@portabletext/react'
import { PortableTextComponent } from '../../components/PortableTextComponent'

const Project = ({ project, error }) => {
  const carousel = [
    {
      _id: 1,
      title: project ? project?.title?.toUpperCase() : '',
      image: '/blank.jpg',
      description: project ? project?.excerpt : '',
    },
  ]

  if (error) {
    return (
      <div className='mt-5'>
        {alertMessage({ status: error.status, message: error.message })}
      </div>
    )
  }

  return (
    <>
      <Meta title={project?.title} description={project?.excerpt} />
      <Navigation carousel={carousel} />
      <div className='container'>
        <div className='row gy-3'>
          <div className='col-lg-8 col-md-10 col-12 mx-auto'>
            <h2 className='fw-bold text-center d-block d-md-none'>
              {project?.title}
            </h2>
            <div className='mt-4' style={{ textAlign: 'justify' }}>
              <PortableText
                value={project?.body}
                components={PortableTextComponent}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const query = groq`
*[_type == "project" && slug.current == $slug] {
    _id, 
    title, 
    image,
    publishedAt,
    slug, 
    excerpt,
    body,
    "author": {
      "name": author->name,
      "image": author->image,
    }
}`

export default Project

export async function getStaticPaths() {
  const projects = await getClient().fetch(
    groq`*[_type == "project" && defined(slug.current)][].slug.current`
  )

  const paths = projects.map((project) => ({
    params: { slug: project },
  }))

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params, preview = false }) {
  try {
    const project = await getClient(preview).fetch(query, {
      slug: params.slug,
    })
    return {
      props: {
        project: project[0],
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
