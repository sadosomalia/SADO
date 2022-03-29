import Link from 'next/link'
import Image from 'next/image'

const SuccessStorySection = ({ stories, loadMore = true }) => {
  return (
    <>
      <h2 className='fw-bold'>SUCCESS STORIES</h2>
      <p className='lead pb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde quos
        nam
      </p>

      <div className='row gy-3'>
        {stories &&
          stories.length > 0 &&
          stories.map((story) => (
            <div key={story.id} className='col-lg-3 col-md-4 col-sm-6 col-12'>
              <div className='card shadow border-0 rounded-0 animate__bounceIn'>
                <Image
                  width={300}
                  height={300}
                  src={`http://164.92.157.29${story.attributes.image.data[0].attributes.url}`}
                  alt={story.attributes.image.data[0].attributes.name}
                  className='card-img-top img-fluid'
                />
                <div className='card-body'>
                  <h6 className='card-title'>{story.attributes.title}</h6>
                  <p className='card-text'>{story.attributes.caption}</p>
                  <Link href={`/stories/${story.attributes.slug}`}>
                    <a className='btn btn-outline-success btn-sm rounded-0 shadow'>
                      Read More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* load more stories */}
      {loadMore && (
        <div className='col-12 mt-5 text-center'>
          <Link href='/stories'>
            <a className='btn btn-outline-success btn-sm rounded-1 shadow'>
              Load More Stories
            </a>
          </Link>
        </div>
      )}
    </>
  )
}

export default SuccessStorySection
