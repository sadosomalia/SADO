import Meta from '../components/Meta'
import Navigation from '../components/Navigation'

const CSW = () => {
  const carousel = [
    {
      _id: 1,
      title: 'PEACE BUILDING & GOVERNANCE',
      image: '/blank.jpg',
      description:
        'SADO works with local communities to build resilience and peace in South- Central Somalia. These projects include',
    },
  ]

  const data = [
    {
      id: 1,
      title: 'Peace Building and Governance',
      description: `SADO trains youth in community-built leadership roles as leaders in their communities. They also receive vocational training for jobs and employment opportunities which deters young men and women from engaging in violence and acts of terrorism`,
    },
    {
      id: 2,
      title: 'Inter-community and intra-community reconciliation programs',
      description:
        'SADO works on building reconciliation within affected communities and across all state boundaries to improve security, stability and development of the region. It also contributes to camaraderie and cohesion across ethnic lines',
    },
    {
      id: 3,
      title: 'Women in peace building',
      description:
        'SADO works with local women to help them take on leadership roles in conflict affected communities in order to bring about political and social change. Through building their role in peace and conflict advocacy efforts, women can be empowered to move beyond the traditional roles of childrearing and domestic work to participate in local and national development processes. SADO also provides women with a platform for expression of concerns and issues that are important to them',
    },
    {
      id: 4,
      title: `Refugee resettlement and reintegration`,
      description:
        'SADO works with the UNHCR to provide essential services for refugee returnees and internally displaced persons (IDPs) in various parts of Somalia. This includes food and non-food items, intra -community reconciliation, protection and access to livelihoods in the areas where they operate.',
    },
  ]
  return (
    <>
      <Meta
        title='Peace Building and Governance'
        description='SADO works with local communities to build resilience and peace in South- Central Somalia. These projects include'
      />
      <Navigation carousel={carousel} />

      <div className='container py-3' style={{ textAlign: 'justify' }}>
        <div className='row gy-3 my-3'>
          <div className='col-lg-8 col-md-10 col-12 mx-auto text-centera'>
            <p>
              SADO works with local communities to build resilience and peace in
              South- Central Somalia. These projects include:
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

export default CSW
