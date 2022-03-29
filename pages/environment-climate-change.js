import Meta from '../components/Meta'
import Navigation from '../components/Navigation'

const Environment = () => {
  const carousel = [
    {
      _id: 1,
      title: 'ENVIRONMENT & CLIMATE CHANGE',
      image: '/slide.jpg',
      description:
        'SADO works to improve water security, promote local livelihoods, and to implement climate resilient agriculture activities in the kismayo area. SADO implements a number of strategies to address the following: climate change impacts; drought management; flood mitigation; and health response to environmental disasters. SADO has implemented the following activities to mitigate the effects of drought and climate change',
    },
  ]

  const data = [
    {
      id: 1,
      title:
        'Water storage tanks for sustainable water access for households and livestock',
    },
    {
      id: 2,
      title:
        'Building rainwater harvesting systems to collect water when it rains and storing it for dry periods',
    },
    {
      id: 3,
      title: `Working with local farmers to choose climate-resilient crops that can withstand extreme weather conditions such as drought and flooding, which are becoming more common`,
    },
  ]
  return (
    <>
      <Meta
        title='Environment & Climate Change'
        description='SADO works to improve water security, promote local livelihoods, and to implement climate resilient agriculture activities in the kismayo area. SADO implements a number of strategies to address the following: climate change impacts; drought management; flood mitigation; and health response to environmental disasters. SADO has implemented the following activities to mitigate the effects of drought and climate change'
      />
      <Navigation carousel={carousel} />

      <div className='container py-3'>
        <div className='row gy-3 my-3'>
          <div className='col-lg-8 col-md-10 col-12 mx-auto text-centera'>
            <p>
              SADO works to improve water security, promote local livelihoods,
              and to implement climate resilient agriculture activities in the
              kismayo area. SADO implements a number of strategies to address
              the following: climate change impacts; drought management; flood
              mitigation; and health response to environmental disasters. SADO
              has implemented the following activities to mitigate the effects
              of drought and climate change
            </p>
            <ol className='list-group list-group-numbered'>
              {data.map((d) => (
                <li key={d._id} className='list-group-item border-0'>
                  {d.title}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default Environment
