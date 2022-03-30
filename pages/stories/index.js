import Meta from '../../components/Meta'
import Navigation from '../../components/Navigation'
import { getStories } from '../../utils/api'
import SuccessStorySection from '../../components/SuccessStorySection'
import { alertMessage } from '../../utils/alert'

const Stories = ({ stories, error }) => {
  const carousel = [
    {
      _id: 1,
      title: 'SUCCESS STORIES',
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
      <Meta title='Stories' />
      <Navigation carousel={carousel} />

      <div id='stories' className='container py-5 my-5'>
        <SuccessStorySection stories={stories} loadMore={false} />
      </div>
    </>
  )
}

export default Stories

export async function getServerSideProps() {
  try {
    const { data } = await getStories()
    return {
      props: {
        stories: data,
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
