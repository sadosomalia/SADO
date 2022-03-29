import Meta from '../../components/Meta'
import Navigation from '../../components/Navigation'
import { getProjects } from '../../utils/api'
import ProjectSection from '../../components/ProjectSection'
import { alertMessage } from '../../utils/alert'

const Projects = ({ projects, error }) => {
  const carousel = [
    {
      _id: 1,
      title: 'PROJECTS',
      image: '/slide.jpg',
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

export async function getServerSideProps() {
  try {
    const { data } = await getProjects()
    return {
      props: {
        projects: data,
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
