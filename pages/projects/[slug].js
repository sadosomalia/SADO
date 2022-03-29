import Meta from '../../components/Meta'
import Navigation from '../../components/Navigation'
import { alertMessage } from '../../utils/alert'
import { getProject, getProjects } from '../../utils/api'
import { markdown } from '../../utils/markdown'

const Project = ({ project, error }) => {
  const carousel = [
    {
      _id: 1,
      title:
        project && project.attributes
          ? project.attributes.title.toUpperCase()
          : '',
      image: '/slide.jpg',
      description: markdown(project ? project.attributes.caption : ''),
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
      <Meta
        title={project && project.attributes.title}
        description={project && project.attributes.caption}
      />
      <Navigation carousel={carousel} />
      <div className='container'>
        <div className='row gy-3'>
          <div className='col-lg-8 col-md-10 col-12 mx-auto'>
            <h2 className='fw-bold text-center d-block d-md-none'>
              {project && project.attributes && project.attributes.title}
            </h2>
            <div className='mt-4'>
              {markdown(
                project && project.attributes && project.attributes.content
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Project

export async function getStaticPaths() {
  const { data } = await getProjects()
  const paths = data.map((project) => ({
    params: { slug: project.attributes.slug },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  try {
    const { data } = await getProject(params.slug)
    return {
      props: {
        project: data[0],
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
