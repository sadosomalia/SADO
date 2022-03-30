import Meta from '../components/Meta'
import Navigation from '../components/Navigation'

const AdvocacyCampaigning = () => {
  const carousel = [
    {
      _id: 1,
      title: 'ADVOCACY & CAMPAIGNING',
      image: '/blank.jpg',
      description:
        'SADO works with the local community to advocate for change in a variety of subjects including',
    },
  ]

  const data = [
    {
      id: 1,
      title: 'Child Protection',
      description: `SADO advocates to improve child protection in Somalia by focusing on child-to-child child abuse, child neglect, crimes against children, and promoting safe environment for children`,
    },
    {
      id: 2,
      title: 'Political Issues',
      description:
        'SADO advocates to improve the political and socio-economic situation in Somalia by working with the Government of Somalia, UN, and other local stakeholders. For example, it advocates for the rights of women and children. SADO also advocates for democratic reforms including free and fair elections in Somalia',
    },
    {
      id: 3,
      title: 'Anti-corruption',
      description:
        'SADO advocates against corruption by raising awareness to fight corruption and works to improve transparency',
    },
    {
      id: 4,
      title: `Health`,
      description:
        'SADO advocates for health issues such as sexual violence, safe and hygienic delivery of babies, maternal mortality, and other health issues in liaison with the Ministry of Health. ',
    },
    {
      id: 5,
      title: `Education`,
      description: `SADO advocates for the rights of women and children's education by working with local communities, Ministry of Education and developing education advocacy tools.`,
    },
    {
      id: 6,
      title: 'Environment',
      description: `SADO works with local communities to help them develop sustainable livelihoods. It has also lobbied to stop deforestation and raise awareness of environmental degradation. `,
    },
  ]
  return (
    <>
      <Meta
        title='Advocacy and Campaigning'
        description='SADO works with the local community to advocate for change in a variety of subjects including'
      />
      <Navigation carousel={carousel} />

      <div className='container py-3 ' style={{ textAlign: 'justify' }}>
        <div className='row gy-3 my-3'>
          <div className='col-lg-8 col-md-10 col-12 mx-auto text-centera'>
            <p>
              SADO works with the local community to advocate for change in a
              variety of subjects including
            </p>
            <ol className='list-group list-group-numbered'>
              {data.map((d) => (
                <li key={d._id} className='list-group-item border-0'>
                  {d.title} <br /> {d.description}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdvocacyCampaigning
