import Meta from '../../components/Meta'
import Navigation from '../../components/Navigation'
import ProjectSection from '../../components/ProjectSection'
import { alertMessage } from '../../utils/alert'
import { getClient } from '../../utils/sanity.server'
import groq from 'groq'

const Projects = ({ projects, error }) => {
  const carousel = [
    {
      _id: 1,
      title: 'PROJECTS',
      image: '/blank.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora provident quas ab, dolores eum alias voluptas veritatis culpa sapiente ipsum vero! Vel maiores recusandae quod omnis aliquam voluptatibus ea perferendis.',
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
      <Meta title='Projects' />
      <Navigation carousel={carousel} />

      <div id='projects' className='container py-5 my-5'>
        <ProjectSection projects={projects} loadMore={false} />
      </div>
    </>
  )
}

export default Projects

export async function getServerSideProps({ preview = false }) {
  try {
    const projects = await getClient(preview).fetch(groq`
        *[_type == "project" && publishedAt < now()] | order(publishedAt desc){
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
        }
  `)

    return {
      props: {
        projects,
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
