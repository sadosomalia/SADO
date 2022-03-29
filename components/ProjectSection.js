import Link from 'next/link'
import Image from 'next/image'

const ProjectSection = ({ projects, loadMore = true }) => {
  return (
    <>
      <h2 className='fw-bold'>PROJECTS</h2>
      <p className='lead pb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde quos
        nam
      </p>

      <div className='row gy-3'>
        {projects &&
          projects.length > 0 &&
          projects.map((project) => (
            <div key={project.id} className='col-lg-3 col-md-4 col-sm-6 col-12'>
              <div className='card shadow border-0 rounded-0 animate__bounceIn'>
                <Image
                  width={300}
                  height={300}
                  src={`http://164.92.157.29${project.attributes.image.data[0].attributes.url}`}
                  alt={project.attributes.image.data[0].attributes.name}
                  className='card-img-top img-fluid'
                />
                <div className='card-body'>
                  <h6 className='card-title'>{project.attributes.title}</h6>
                  <p className='card-text'>{project.attributes.caption}</p>
                  <Link href={`/projects/${project.attributes.slug}`}>
                    <a className='btn btn-outline-success btn-sm rounded-0 shadow'>
                      Read More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* load more projects */}
      {loadMore && (
        <div className='col-12 mt-5 text-center'>
          <Link href='/projects'>
            <a className='btn btn-outline-success btn-sm rounded-1 shadow'>
              Load More Projects
            </a>
          </Link>
        </div>
      )}
    </>
  )
}

export default ProjectSection
