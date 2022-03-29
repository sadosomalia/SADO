import Meta from '../components/Meta'
import Navigation from '../components/Navigation'

const CSW = () => {
  const carousel = [
    {
      _id: 1,
      title: 'CLIMATE SMART WASH - (CSW)',
      image: '/slide.jpg',
      description:
        'SADO works with local government agencies and communities across Somalia to improve access to water and sanitation services in the areas where they operate. SADO provides CSW programs that compose of',
    },
  ]

  const data = [
    {
      id: 1,
      title: 'Water supply and sanitation',
      description: `drilling wells and installation of water infrastructure to improve access to safe clean water, constructing and managing pit latrines, and waste management services including sanitation facilities and pit emptying services.`,
    },
    {
      id: 2,
      title: 'Hygiene education and behavior change',
      description:
        'SADO works with communities to provide hygiene education and behavior change for women, men, boys and girls. This not only leads to improved hygiene conditions and health, but is also a way for SADO to educate the general public about the importance of healthy hygiene.',
    },
    {
      id: 3,
      title: 'Provision of hygiene kits and NFIs',
      description:
        'SADO provides hygiene kits to women and girls as well as other vulnerable populations. These include items such as soap, buckets and chlorination tablets and sanitary pads. SADO also provides shelter kits to IDPs and resturnees.',
    },
    {
      id: 4,
      title: `Integrated communications to improve CSW`,
      description:
        'SADO uses printed materials, radio, and social marketing strategies such as advertisements in order to raise awareness and promote improved hygiene throughout Somalia',
    },
  ]
  return (
    <>
      <Meta
        title='Climate Smart WASH – (CSW)'
        description='SADO works with local government agencies and communities across Somalia to improve access to water and sanitation services in the areas where they operate. SADO provides CSW programs that compose of'
      />
      <Navigation carousel={carousel} />

      <div className='container py-3'>
        <div className='row gy-3 my-3'>
          <div className='col-lg-8 col-md-10 col-12 mx-auto text-centera'>
            <p>
              SADO works with local government agencies and communities across
              Somalia to improve access to water and sanitation services in the
              areas where they operate. SADO provides CSW programs that compose
              of:
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
