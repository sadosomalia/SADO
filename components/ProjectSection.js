/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const ProjectSection = () => {
  const projects = [
    {
      _id: 1,
      title: 'FOOD SECURITY',
      description:
        '34 beneficiaries from kismayo IDPs supported under community lead...',
      image: '/projects/food.jpg',
    },
    {
      _id: 2,
      title: 'WASH',
      description:
        'Construction of new shallow well with mini solar water pump, fencing...',
      image: '/projects/wash.jpg',
    },
    {
      _id: 3,
      title: 'PROTECTION',
      description:
        '28 IDPs sites were supported with fire prevention/response...',
      image: '/projects/protection.jpg',
    },
    {
      _id: 4,
      title: 'SHELTER',
      description:
        'Site Level Coordination Meeting, Community Mobilization/awareness...',
      image: '/projects/shelter.jpg',
    },
    {
      _id: 5,
      title: 'PEACE BUILDING',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime.',
      image: '/card.jpg',
    },
    {
      _id: 6,
      title: 'CSEE',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime.',
      image: '/card.jpg',
    },
  ]
  return (
    <div id='projects' className='container py-5 my-5'>
      <h2 className='fw-bold pt-3'>PROJECTS</h2>
      <p className='lead pb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde quos
        nam
      </p>

      <div className='row gy-3'>
        {projects.slice(0, 4).map((project) => (
          <div key={project._id} className='col-lg-3 col-md-4 col-sm-6 col-12'>
            <div className='card shadow border-0 rounded-0 animate__bounceIn'>
              <img
                src={project.image}
                alt={project.title}
                className='card-img-top img-fluid'
              />
              <div className='card-body'>
                <h6 className='card-title'>{project.title}</h6>
                <p className='card-text'>{project.description}</p>
                <Link href='/'>
                  <a className='btn btn-outline-success btn-sm rounded-0 shadow'>
                    Read More
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectSection
