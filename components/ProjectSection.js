import Image from 'next/image'
import Link from 'next/link'
import { getImageUrlFromId } from '../utils/sanity'

const ProjectSection = ({ projects, loadMore = true }) => {
  return (
    <>
      <h2 className='fw-bold'>PROJECTS</h2>
      <p className='lead pb-3'>
        SADO has implemented a number of projects that is aimed at improving the
        livelihood, water, sanitation, hygiene and protection of the vulnerable
        communities in Somalia.
      </p>

      <div className='row gy-3'>
        {projects &&
          projects.length > 0 &&
          projects.map((project) => (
            <div
              key={project?._id}
              className='col-lg-3 col-md-4 col-sm-6 col-12'
            >
              <div className='card shadow border-0 rounded-0 animate__bounceIn'>
                <Image
                  width={300}
                  height={300}
                  src={getImageUrlFromId(project?.image?.asset?._ref)}
                  alt={project?.title}
                  className='card-img-top img-fluid'
                />
                <div className='card-body'>
                  <h6 className='card-title'>{project?.title}</h6>
                  <p className='card-text'>{project?.excerpt}</p>
                  <Link href={`/projects/${project?.slug?.current}`}>
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
