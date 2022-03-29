import Meta from '../components/Meta'
import Navigation from '../components/Navigation'

const BorderOfDirectors = () => {
  const carousel = [
    {
      _id: 1,
      title: 'BOARD OF DIRECTORS',
      image: '/slide.jpg',
      description:
        'The Board of Directors (BOD) are the fiduciaries who steer the organization towards a sustainable future',
    },
  ]
  return (
    <>
      <Meta
        title='Board Of Directors'
        description='The Board of Directors (BOD) are the fiduciaries who steer the
        organization towards a sustainable future by adopting sound,
        ethical, and legal governance and financial management policies,
        as well as making sure the organization has adequate resources to
        advance its mission and attain its vision.'
      />
      <Navigation carousel={carousel} />

      <div className='container py-3'>
        <div className='row gy-3 my-3'>
          <div className='col-lg-8 col-md-10 col-12 mx-auto text-centera'>
            <p>
              The Board of Directors (BOD) are the fiduciaries who steer the
              organization towards a sustainable future by adopting sound,
              ethical, and legal governance and financial management policies,
              as well as making sure the organization has adequate resources to
              advance its mission and attain its vision.
              <br />
              SADO has board members who provide effective oversight and policy
              direction of the organization as well as overall responsibilities
              for ensuring accountability, credibility, integrity,
              sustainability and representation. The board members are currently
              composed of members with varied professional backgrounds and
              representing diverse interests such as gender, geographical and
              special interest groups.
              <br />
              The board membership also has a number of expert committees such
              as administration and Human Resources, finance and programs that
              undertake various specialized roles. In order to effectively
              direct the affairs of the organization, the board meets at least
              four times in a year. The board of directors will set the{' '}
              {"organization's"} strategic direction, construct a policy-based
              governance framework, regulate the organization and its connection
              with the Executive Director. In this governance structure, the BoD
              shall provide oversight and accountability. The board of directors
              shall guide and oversee the implementation of the{' '}
              {" organization's "}
              strategic plan
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BorderOfDirectors
