import Meta from '../../components/Meta'
import Navigation from '../../components/Navigation'
import { alertMessage } from '../../utils/alert'
import { getStory, getStories } from '../../utils/api'
import { markdown } from '../../utils/markdown'

const Story = ({ story, error }) => {
  const carousel = [
    {
      _id: 1,
      title:
        story && story.attributes ? story.attributes.title.toUpperCase() : '',
      image: '/blank.jpg',
      description: markdown(story ? story.attributes.caption : ''),
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
        title={story && story.attributes.title}
        description={story && story.attributes.caption}
      />
      <Navigation carousel={carousel} />
      <div className='container'>
        <div className='row gy-3'>
          <div className='col-lg-8 col-md-10 col-12 mx-auto'>
            <h2 className='fw-bold text-center d-block d-md-none'>
              {story && story.attributes && story.attributes.title}
            </h2>
            <div className='mt-4' style={{ textAlign: 'justify' }}>
              {markdown(story && story.attributes && story.attributes.content)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Story

export async function getStaticPaths() {
  const { data } = await getStories()
  const paths = data.map((story) => ({
    params: { slug: story.attributes.slug },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  try {
    const { data } = await getStory(params.slug)
    return {
      props: {
        story: data[0],
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
