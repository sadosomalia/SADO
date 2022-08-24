import Meta from '../../components/Meta'
import Navigation from '../../components/Navigation'
import { alertMessage } from '../../utils/alert'
import { PortableText } from '@portabletext/react'
import groq from 'groq'
import { getClient } from '../../utils/sanity.server'
import { PortableTextComponent } from '../../components/PortableTextComponent'

const Story = ({ story, error }) => {
  const carousel = [
    {
      _id: 1,
      title: story ? story?.title?.toUpperCase() : '',
      image: '/blank.jpg',
      description: story ? story?.excerpt : '',
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
        title={story && story?.title}
        description={story && story?.excerpt}
      />
      <Navigation carousel={carousel} />
      <div className='container'>
        <div className='row gy-3'>
          <div className='col-lg-8 col-md-10 col-12 mx-auto'>
            <h2 className='fw-bold text-center d-block d-md-none'>
              {story && story && story?.title}
            </h2>
            <div className='mt-4' style={{ textAlign: 'justify' }}>
              <PortableText
                value={story?.body}
                components={PortableTextComponent}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Story

const query = groq`
*[_type == "story" && slug.current == $slug] {
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

export async function getStaticPaths() {
  const stories = await getClient().fetch(
    groq`*[_type == "story" && defined(slug.current)][].slug.current`
  )

  const paths = stories.map((story) => ({
    params: { slug: story },
  }))

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params, preview = false }) {
  try {
    const story = await getClient(preview).fetch(query, {
      slug: params?.slug,
    })
    return {
      props: {
        story: story[0],
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
