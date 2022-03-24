import Meta from '../components/Meta'
import Navigation from '../components/Navigation'

const ManagementStructure = () => {
  const carousel = [
    {
      _id: 1,
      title: 'MANAGEMENT STRUCTURE',
      image: '/slide.jpg',
      description:
        'The day to day management affairs of SADO are overseen by a management team whose membership comprises',
      height: '540px',
    },
  ]

  const list = [
    {
      _id: 1,
      content:
        'Study social problems affecting communities living within the project areas and design appropriate humanitarian response and development programs to address identified needs.',
    },
    {
      _id: 2,
      content:
        'Oversee the planning, implementation, monitoring and evaluation of program activities and the preparation of relevant reports or document for the Board and Donors.',
    },
    {
      _id: 3,
      content: 'Coordinate the preparation of strategic and or annual plans.',
    },
    {
      _id: 4,
      content: 'Oversee the care for and management of SADO resources.',
    },
    {
      _id: 5,
      content:
        'Ensure sufficient internal organizational management practice and capacity.',
    },
    {
      _id: 6,
      content:
        'Harmonize/coordinate development activities in the field to ensure set results are met.',
    },
    {
      _id: 7,
      content:
        'Advice the board of directors on policy formulation and/ or implementation.',
    },
  ]
  return (
    <>
      <Meta
        title='Management & Organization Structure'
        description='The day to day management affairs of SADO are overseen by a management team whose membership comprises the Executive Director supported by Coordinators in Programs Administration and Human Resources and Finance. Below the coordinators are the program managers, field officers and various support functions.'
      />
      <Navigation carousel={carousel} />

      <div className='container py-3'>
        <div className='row gy-3 my-3'>
          <div className='col-lg-8 col-md-10 col-12 mx-auto'>
            <p>
              The day to day management affairs of SADO are overseen by a
              management team whose membership comprises the Executive Director
              supported by Coordinators in Programs Administration and Human
              Resources and Finance. Below the coordinators are the program
              managers, field officers and various support functions. The team
              has the option of co-opting other members if necessary. The role
              of the management team includes;
            </p>

            <ol
              className='list-group list-group-numbered '
              style={{ marginLeft: '-15px' }}
            >
              {list.map((l) => (
                <li key={l._id} className='list-group-item border-0'>
                  {l.content}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManagementStructure
