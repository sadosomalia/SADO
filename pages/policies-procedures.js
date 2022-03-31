import Meta from '../components/Meta'
import Navigation from '../components/Navigation'

const Policies = () => {
  const carousel = [
    {
      _id: 1,
      title: 'POLICIES & PROCEDURES',
      image: '/blank.jpg',
      description:
        'The changing environment for development organizations creates the need for effective governance structures and or reforms',
    },
  ]

  return (
    <>
      <Meta
        title='Policies & Procedures'
        description='The changing environment for development organizations creates the need for effective governance structures and or reforms'
      />
      <Navigation carousel={carousel} />

      <div className='container py-3' style={{ textAlign: 'justify' }}>
        <div className='row gy-3 my-3'>
          <div className='col-lg-8 col-md-10 col-12 mx-auto'>
            <p>The following are the policies and procedure manuals of SADO</p>
            <h6>Governance Manual</h6>
            <p>
              The changing environment for development organizations creates the
              need for effective governance structures and or reforms. This
              environment is characterized by amongst others heightening
              accountability expectations, quests for professionalization of
              NGOs & increased competition for limited funds. NGOs are also
              required by various statutory stipulations to have a sound
              governance structures for purposes of accountability, oversight
              and strategic leadership. This manual sets out various elements of
              the SADO governance as well as its operations where:
            </p>
            <p>
              (a) Governance refer to the overall oversight initiatives of the
              board towards the purpose, plans and policies of the overall
              organization and; <br />
              (b) Board operations refer to the activities conducted by board
              members.
            </p>

            <h6 className='mt-4'>Management Practice Manual</h6>
            <p>
              The Management Practice Policy and Procedure Manual are developed
              for SADO and it is intended to serve as a guideline for the SADO’s
              internal control system.
            </p>

            <h6>Service Delivery Manual</h6>
            <p>
              The purpose of this manual is to ensure proper design,
              effectiveness, relevance and sustainability of SADO programs so
              that these contribute positively towards its mission, goals and
              objectives. In this regard, SADO shall:
            </p>
            <p>
              (a) Mobilize stakeholders to participate in all project cycle
              phases being planning, implementation, monitoring and evaluation.{' '}
              <br />
              (b) Establish clear selection criteria for its program/thematic
              and geographical areas of intervention. <br />
              (c) Enhance the capacity of staff and project beneficiaries
              (empowerment) in all its areas of intervention.
            </p>

            <h6 className='mt-4'>External relations manual </h6>
            <p>
              SADO recognizes stakeholders as any person(s), group(s) or
              organization(s) that can lay a reasonable claim on the
              organization’s attention, resources and services. SADO recognizes
              other development organizations, beneficiaries, donors,
              government/ authorities, networks, general funders and supporters
              as its stakeholders. <br />
              This policy aims to achieve effective representation of
              stakeholder’s interest and cause them to support project
              implemented by SADO. SADO shall pursue mutual collaboration by
              recognizing stakeholders as partners in all its programs
              activities and other operations. In this respect SADO shall:
            </p>
            <p>
              (a) Enact mechanism for the identification of key stakeholders.{' '}
              <br />
              (b) Enact mechanism for the promotion of partnership with
              stakeholders. <br />
              (c) Attempt to integrate stakeholders’ interests/activities into
              its processes.
            </p>

            <h6 className='mt-4'>Financial Policies & Procedures Manual</h6>
            <p>
              The purpose of the financial policies and procedures manual is to;
            </p>
            <p>
              (a) Define the financial policies, controls, systems and
              procedures and establish a standard basis for official decisions,
              actions and accountabilities and the general financial operations
              of SADO. <br />
              (b) Give guidance on financial reporting requirements. <br />
              (c) Ensure a uniform accounting practice within and across SADO.
            </p>

            <h6 className='mt-4'>Human Resource & Administration Manual</h6>
            <p>
              SADO considers its staff as the most important asset and therefore
              it is essential that all staff have clear guidance on the minimum
              standards necessary to ensure that SADO manages its employees
              well.
            </p>
            <p>
              The procedures and guidelines in this Personnel Policy contain
              information which aims to provide staff with an appropriate
              working environment, where each person will access clear
              information, enjoy good direction and information of the
              organizations decision-making process i n relation to human
              resource issues.
            </p>

            <h6 className='mt-4'>Procurement Manual</h6>
            <p>
              Procurement Manual The provisions of this manual, shall govern the
              award of procurement contracts by SADO.
            </p>

            <h6 className='mt-4'>Sustainability Manual</h6>
            <p>
              SADO shall always endeavour to secure and manage diverse financial
              resources to enable it run its business in a stable and continuous
              manner. To enable this, policies and strategies shall be pursued
              geared towards the sustainability of its programs and continued
              operations. Other manuals include anti-corruption and fraud, and
              Safeguarding against Sexual Exploitation and Abuse and Sexual
              Harassment (SEAH).
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Policies
