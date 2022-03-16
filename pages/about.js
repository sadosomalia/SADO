/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Meta from '../components/Meta'
import Navigation from '../components/Navigation'
import { FaEye, FaBullseye, FaHandshake, FaCheckCircle } from 'react-icons/fa'
import StrategicObjectives from '../components/StrategicObjectives'

const About = () => {
  const carousel = [
    {
      _id: 1,
      title: 'ABOUT PAGE',
      image: '/slide.jpg',
      description:
        'Social Life and Agricultural Development Organization (SADO) is a Somalia based Local Non-Governmental Organization (LNGO) established in 1994 with the aim of spearheading local development initiatives in GEDO region and other parts of South-Central Somalia. ',
      height: '540px',
    },
  ]

  const data = [
    {
      _id: 2,
      title: 'MISSION',
      description: (
        <p>
          Our mission is to work with our partners in improving the quality of
          life of vulnerable communities in the Horn of Africa through
          facilitating humanitarian aid for sustainable development programs
        </p>
      ),
      image: <FaBullseye className='img-fluid fs-1 mx-auto mt-2' />,
    },
    {
      _id: 1,
      title: 'VISION',
      description: (
        <p>
          A horn of Africa in which vulnerable communities live in dignity and
          security
        </p>
      ),
      image: <FaEye className='img-fluid fs-1 mx-auto mt-2' />,
    },
    {
      _id: 3,
      title: 'CORE VALUES',
      description: (
        <>
          <p>SADO believes in, and is guided by the following REDI ideals:</p>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <FaCheckCircle className='mb-1 text-success' />
              <strong> Respect: </strong> We treat all people with dignity and
              respect.
            </li>
            <li className='list-group-item'>
              <FaCheckCircle className='mb-1 text-success' />
              <strong> Ethics: </strong> We strive to meet the highest moral and
              ethical standards.
            </li>
            <li className='list-group-item'>
              <FaCheckCircle className='mb-1 text-success' />
              <strong> Decisive: </strong> Making sound judgments within our
              work so that a program activity can progress with pace and
              confidence.
            </li>
            <li className='list-group-item'>
              <FaCheckCircle className='mb-1 text-success' />
              <strong> Innovation: </strong> We embrace continuous improvement,
              bold creativity, and change to make our work more effective and
              efficient.
            </li>
          </ul>
        </>
      ),
      image: <FaHandshake className='img-fluid fs-1 mx-auto mt-2' />,
    },
  ]

  const organizationalCulture = [
    {
      _id: 1,
      title: 'Collaboration',
      description:
        'We are better together. We encourage strategic collaboration with our partners to bring out the best solutions and strengthen the fabric of our communities.',
    },
    {
      _id: 2,
      title: 'Commitment',
      description:
        'Those we serve come first in everything we do.  We champion their realization of their full potential to lead fulfilling lives and contribute meaningfully to society.',
    },
    {
      _id: 3,
      title: 'Results orientation',
      description:
        'We are driven by the changes and impacts we exist to create.  We are committed to providing timely and high-quality solutions and services.  We closely collaborate the efforts of each person/ actor in delivering our services.',
    },
    {
      _id: 4,
      title: 'Open communication',
      description:
        'We believe in granting access to information.  We value and use the best approaches competently to communicate amongst ourselves and with others.  We support all stakeholders to understand and express themselves concerning their well-being.',
    },
    {
      _id: 5,
      title: 'Competence',
      description:
        'We are committed to acquiring, developing, and retaining the highest possible quality personnel as a basis of assuring the best organizational performance standards.',
    },
    {
      _id: 6,
      title: 'Creativity and innovation',
      description:
        'We are committed to ensuring a work environment that encourages creativity and embracing of new ideas and technologies to make our work more effective.',
    },
  ]

  return (
    <>
      <Meta
        title='About Us'
        description='Social Life and Agricultural Development Organization (SADO) is a
              Somalia based Local Non-Governmental Organization (LNGO)
              established in 1994 with the aim of spearheading local development
              initiatives in GEDO region and other parts of South-Central
              Somalia. SADO is legally registered in Kenya and in Somalia'
      />
      <Navigation carousel={carousel} />

      <div className='container py-3'>
        <div className='row gy-3 my-3'>
          <div className='col-12'>
            <h2 className='fw-bold'>ABOUT US</h2>
          </div>
          <div className='col-md-4 col-12'>
            <p>
              Social Life and Agricultural Development Organization (SADO) is a
              Somalia based Local Non-Governmental Organization (LNGO)
              established in 1994 with the aim of spearheading local development
              initiatives in GEDO region and other parts of South-Central
              Somalia. SADO is legally registered in Kenya and in Somalia under
              Somalia Federal Government and in Jubaland State of Somalia. With
              its headquarters in Mogadishu, Somalia, SADO has base stations in
              Kismayu, Bardera, Elwak, Garbaharrey, Belt Hawa and Dollow
              Districts of Somalia. It has operational presence and experience
              in the greater Horn of Africa. SADO is a firm believer in the
              fundamental moral principle of humanity; that all human begins are
              born free and equal in dignity and rights and therefore action
              should be taken to prevent or alleviate human suffering arising
              out of disaster or conflict, and that nothing should override this
              principle. Our activities are grounded on the rights-based
              approach on the belief that people are entitled to basic
              conditions of living with dignity and have access to equal
              opportunity as a basis of fulfilling their human potential.
            </p>
          </div>
          <div className='col-md-4 col-12'>
            <p>
              SADO therefore seeks to stimulate sustainable developmental change
              amongst vulnerable communities living in the Horn of Africa
              region. {"SADO's"} mandate and core business is facilitating
              community development. These ambitions are realized through
              knowledge transfer, influencing, brokering linkages and
              facilitating/ implementing integrated people centered humanitarian
              and development programs. The main developmental approach of SADO
              is enabling the communities to find local solutions to their
              socio-economic challenges.
            </p>
            <p>
              SADO has an impressive track record and experience in implementing
              community-driven development (CDD) programs in Governance, Food
              Security and Nutrition, Climate Smart Economic Empowerment (CSEE)
              Climate Resilient Water, Sanitation and Hygiene (CRWASH),
              Education, Health, Shelter and settlement. Additionally, human
              rights, gender and environment have over time been addressed by
              SADO as cross-cutting issues. The main target groups of SADO
              include vulnerable and marginalized pastoralists comprising of
              individuals, families, groups and communities.
            </p>
          </div>
          <div className='col-md-4 col-12'>
            <p>
              SADO has a well-defined and functional internal organizational
              structure that seeks to deliver its strategic objectives. SADO
              works through a number of well-resourced human resources,
              infrastructure, and equipment spread across its field offices.
              Policy and strategic guidance, leadership and oversight are
              offered by a diverse and competent Board of Directors.
            </p>
          </div>
        </div>

        <div className='row gy-3 my-5'>
          {data.map((item) => (
            <div
              key={item._id}
              className='col-lg-4 col-sm-6 col-12 mx-auto my-2'
            >
              <div className='card border-0 rounded-0 shadow-lg animate__bounceIn'>
                {item.image}
                <div className='card-body text-center p-2'>
                  <h5 className='card-text fw-bold'>{item.title}</h5>
                  <div className='card-text'>
                    <div className='text-start'>{item.description}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className='fw-bold'>WHO WE ARE</h2>
        <p>
          Social-Life and Agricultural Development Organization (SADO) is a
          non-partisan, non-Governmental, not-for-profit organization
          established in 1994. {"SADO's"} mandate and core functions are
          facilitating Community-Driven Development (CDD), which are actualized
          through (knowledge transfer, influencing, brokering linkages, and
          facilitating/ implementing integrated people-centered humanitarian and
          development programs. The main target groups of SADO include
          vulnerable and marginalized pastoralists comprising of individuals,
          families, groups, and communities.
        </p>

        <p>
          SADO aims to promote long-term community-drive development among
          {" Somalia's"} most disadvantaged groups. The mandate and primary
          function of SADO are to assist in developing communities to realize
          their full potential. {"SADO's"} primary developmental strategy is to
          help communities discover answers to their socio-economic problems.
        </p>

        <p>
          SADO has fostered good working relationships and collaboration with a
          range of stakeholders, including the FGS, FMS, CSOs, peer NGOs, INGOs,
          and development partners. SADO has worked with the key development
          partners: ACTED, NCA, Oxfam Novib, NEXUS platform, Somalia, and USAID.
          The organization engages closely with these like-minded
          agencies/institutions to pursue a comprehensive and integrated
          approach to programming.
        </p>

        <StrategicObjectives />
        <div className='row gy-3 my-3'>
          <div className='col-md-6 col-12 my-auto'>
            <img src='/image.jpg' className='img-fluid w-100' />
          </div>
          <div className='col-md-6 col-12 my-auto'>
            <h2 className='fw-bold'>ORGANIZATION CULTURE</h2>

            <ul className='list-group list-group-flush'>
              {organizationalCulture.map((o) => (
                <li key={o._id} className='list-group-item'>
                  <strong> {o.title}: </strong> {o.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
