import Meta from '../components/Meta'
import Navigation from '../components/Navigation'

const Camp = () => {
  const carousel = [
    {
      _id: 1,
      title: 'CAMP COORDINATION AND CAMP MANAGEMENT ',
      image: '/slide.jpg',
      description:
        'SADO works closely with local and international partners, UN agencies and other NGOs in the establishment, management and coordination of xxxxxxx number of IDP camps, which is home to approximately 460,000 IDPs',
    },
  ]

  return (
    <>
      <Meta
        title='Camp Coordination & Camp Management '
        description='SADO works closely with local and international partners, UN agencies and other NGOs in the establishment, management and coordination of xxxxxxx number of IDP camps, which is home to approximately 460,000 IDPs'
      />
      <Navigation carousel={carousel} />

      <div className='container py-3'>
        <div className='row gy-3 my-3'>
          <div className='col-lg-8 col-md-10 col-12 mx-auto text-centera'>
            <p>
              SADO works closely with local and international partners, UN
              agencies and other NGOs in the establishment, management and
              coordination of xxxxxxx number of IDP camps, which is home to
              approximately 460,000 IDPs. SADO provides support in the operation
              management of camps to prevent the spread of communicable diseases
              such as Cholera, malaria and measles. SADO also provides: water
              supply services, logistics management including provision of food
              assistance and financial services such as unconditional cash
              transfers and cash-for-work opportunities. SADO is also involved
              in site management, which includes building of latrines, field
              inspection of camp, repositioning and resettlement of IDPs, and
              coordination of local partners.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Camp
