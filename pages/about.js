/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Meta from '../components/Meta'
import Navigation from '../components/Navigation'
import { FaEye, FaBullseye, FaHandshake } from 'react-icons/fa'

const About = () => {
  const carousel = [
    {
      _id: 1,
      title: 'ABOUT PAGE',
      image: '/slide.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora provident quas ab, dolores eum alias voluptas veritatis culpa sapiente ipsum vero! Vel maiores recusandae quod omnis aliquam voluptatibus ea perferendis.',
      height: '540px',
    },
  ]

  const data = [
    {
      _id: 2,
      title: 'MISSION',
      description: (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos
            aspernatur quos doloremque harum magni similique, inventore aperiam
            commodi voluptates porro id non vero, ab quae asperiores illum
            consequatur quam?
          </p>
          <p>
            Recusandae, quos tempore rerum, fugit molestiae maiores deleniti,
            maxime quam doloremque expedita itaque fuga cum amet provident
            mollitia dicta sit totam ipsa excepturi iusto consequatur? Quasi
            consectetur tempora repudiandae. Consequuntur! Eveniet laborum neque
            veniam magnam ipsum eaque illo maxime, quisquam nulla repellendus
          </p>
          <p>
            cupiditate pariatur officiis quasi! Nihil obcaecati quas maxime
            neque quasi aspernatur. Asperiores labore totam adipisci magni
            laboriosam omnis.
          </p>
          <p>
            Quod, tempore reprehenderit? Mollitia illum sit quod, ullam
            reprehenderit eligendi! Odio consequatur alias tenetur adipisci
            quibusdam, minima ea molestias sit, voluptas quo, iure quasi
            accusamus blanditiis soluta velit? Nemo, inventore!
          </p>
        </>
      ),
      image: <FaBullseye className='img-fluid fs-1 mx-auto mt-2' />,
    },
    {
      _id: 1,
      title: 'VISION',
      description: (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos
            aspernatur quos doloremque harum magni similique, inventore aperiam
            commodi voluptates porro id non vero, ab quae asperiores illum
            consequatur quam?
          </p>
          <p>
            Recusandae, quos tempore rerum, fugit molestiae maiores deleniti,
            maxime quam doloremque expedita itaque fuga cum amet provident
            mollitia dicta sit totam ipsa excepturi iusto consequatur? Quasi
            consectetur tempora repudiandae. Consequuntur! Eveniet laborum neque
            veniam magnam ipsum eaque illo maxime, quisquam nulla repellendus
          </p>
          <p>
            cupiditate pariatur officiis quasi! Nihil obcaecati quas maxime
            neque quasi aspernatur. Asperiores labore totam adipisci magni
            laboriosam omnis.
          </p>
          <p>
            Quod, tempore reprehenderit? Mollitia illum sit quod, ullam
            reprehenderit eligendi! Odio consequatur alias tenetur adipisci
            quibusdam, minima ea molestias sit, voluptas quo, iure quasi
            accusamus blanditiis soluta velit? Nemo, inventore!
          </p>
        </>
      ),
      image: <FaEye className='img-fluid fs-1 mx-auto mt-2' />,
    },
    {
      _id: 3,
      title: 'CORE VALUES',
      description: (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos
            aspernatur quos doloremque harum magni similique, inventore aperiam
            commodi voluptates porro id non vero, ab quae asperiores illum
            consequatur quam?
          </p>
          <p>
            Recusandae, quos tempore rerum, fugit molestiae maiores deleniti,
            maxime quam doloremque expedita itaque fuga cum amet provident
            mollitia dicta sit totam ipsa excepturi iusto consequatur? Quasi
            consectetur tempora repudiandae. Consequuntur! Eveniet laborum neque
            veniam magnam ipsum eaque illo maxime, quisquam nulla repellendus
          </p>
          <p>
            cupiditate pariatur officiis quasi! Nihil obcaecati quas maxime
            neque quasi aspernatur. Asperiores labore totam adipisci magni
            laboriosam omnis.
          </p>
          <p>
            Quod, tempore reprehenderit? Mollitia illum sit quod, ullam
            reprehenderit eligendi! Odio consequatur alias tenetur adipisci
            quibusdam, minima ea molestias sit, voluptas quo, iure quasi
            accusamus blanditiis soluta velit? Nemo, inventore!
          </p>
        </>
      ),
      image: <FaHandshake className='img-fluid fs-1 mx-auto mt-2' />,
    },
  ]

  const objectives = [
    {
      _id: 1,
      title: 'Elit Ipsum Sit Amet Consecterur',
      description: (
        <>
          <p>
            <strong>Lorem ipsum dolor </strong> sit amet consectetur adipisicing
            elit.
          </p>
          <p>
            Iusto provident adipisci, iste praesentium? Placeat velit aut illum
            eius id suscipit quos nam laborum fugiat? Est id sed sit! Ad
            impedit, dolor dolore quos nesciunt architecto, repellendus veniam
            hic, minima quidem obcaecati ex iste quibusdam. Dicta iste
            praesentium enim inventore porro voluptatem, non dignissimos
            voluptate a et vitae at
          </p>
        </>
      ),
    },
    {
      _id: 2,
      title: 'Elit Ipsum Sit Amet Consecterur',
      description: (
        <>
          <p>
            <strong>Lorem ipsum dolor </strong> sit amet consectetur adipisicing
            elit.
          </p>
          <p>
            Iusto provident adipisci, iste praesentium? Placeat velit aut illum
            eius id suscipit quos nam laborum fugiat? Est id sed sit! Ad
            impedit, dolor dolore quos nesciunt architecto, repellendus veniam
            hic, minima quidem obcaecati ex iste quibusdam. Dicta iste
            praesentium enim inventore porro voluptatem, non dignissimos
            voluptate a et vitae at
          </p>
        </>
      ),
    },
    {
      _id: 3,
      title: 'Elit Ipsum Sit Amet Consecterur',
      description: (
        <>
          <p>
            <strong>Lorem ipsum dolor </strong> sit amet consectetur adipisicing
            elit.
          </p>
          <p>
            Iusto provident adipisci, iste praesentium? Placeat velit aut illum
            eius id suscipit quos nam laborum fugiat? Est id sed sit! Ad
            impedit, dolor dolore quos nesciunt architecto, repellendus veniam
            hic, minima quidem obcaecati ex iste quibusdam. Dicta iste
            praesentium enim inventore porro voluptatem, non dignissimos
            voluptate a et vitae at
          </p>
        </>
      ),
    },
    {
      _id: 4,
      title: 'Elit Ipsum Sit Amet Consecterur',
      description: (
        <>
          <p>
            <strong>Lorem ipsum dolor </strong> sit amet consectetur adipisicing
            elit.
          </p>
          <p>
            Iusto provident adipisci, iste praesentium? Placeat velit aut illum
            eius id suscipit quos nam laborum fugiat? Est id sed sit! Ad
            impedit, dolor dolore quos nesciunt architecto, repellendus veniam
            hic, minima quidem obcaecati ex iste quibusdam. Dicta iste
            praesentium enim inventore porro voluptatem, non dignissimos
            voluptate a et vitae at
          </p>
        </>
      ),
    },
    {
      _id: 5,
      title: 'Elit Ipsum Sit Amet Consecterur',
      description: (
        <>
          <p>
            <strong>Lorem ipsum dolor </strong> sit amet consectetur adipisicing
            elit.
          </p>
          <p>
            Iusto provident adipisci, iste praesentium? Placeat velit aut illum
            eius id suscipit quos nam laborum fugiat? Est id sed sit! Ad
            impedit, dolor dolore quos nesciunt architecto, repellendus veniam
            hic, minima quidem obcaecati ex iste quibusdam. Dicta iste
            praesentium enim inventore porro voluptatem, non dignissimos
            voluptate a et vitae at
          </p>
        </>
      ),
    },
    {
      _id: 6,
      title: 'Elit Ipsum Sit Amet Consecterur',
      description: (
        <>
          <p>
            <strong>Lorem ipsum dolor </strong> sit amet consectetur adipisicing
            elit.
          </p>
          <p>
            Iusto provident adipisci, iste praesentium? Placeat velit aut illum
            eius id suscipit quos nam laborum fugiat? Est id sed sit! Ad
            impedit, dolor dolore quos nesciunt architecto, repellendus veniam
            hic, minima quidem obcaecati ex iste quibusdam. Dicta iste
            praesentium enim inventore porro voluptatem, non dignissimos
            voluptate a et vitae at
          </p>
        </>
      ),
    },
  ]
  return (
    <>
      <Meta title='About Us' />
      <Navigation carousel={carousel} />

      <div className='container py-3'>
        <div className='row gy-3 my-3'>
          <div className='col-md-6 col-12 my-auto'>
            <h2 className='fw-bold'>ABOUT US</h2>
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
              opportunity as a basis of fulfilling their human potential. SADO
              therefore seeks to stimulate sustainable developmental change
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

            <p>
              SADO has a well-defined and functional internal organizational
              structure that seeks to deliver its strategic objectives. SADO
              works through a number of well-resourced human resources,
              infrastructure, and equipment spread across its field offices.
              Policy and strategic guidance, leadership and oversight are
              offered by a diverse and competent Board of Directors.
            </p>
          </div>
          <div className='col-md-6 col-12 my-auto'>
            <img src='/image.jpg' className='img-fluid' />
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
        <div className='py-5'>
          <h2 className='fw-bold'>STRATEGIC OBJECTIVES </h2>

          <div className='row'>
            <div className='col-12 mx-auto'>
              <div className='accordion' id='accordionExample'>
                {objectives.map((item) => (
                  <div key={item._id} className='accordion-item'>
                    <h2 className='accordion-header' id={`heading${item._id}`}>
                      <button
                        className='accordion-button btn-success'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target={`#collapse${item._id}`}
                        aria-expanded='false'
                        aria-controls={`collapse${item._id}`}
                      >
                        {item.title}
                      </button>
                    </h2>
                    <div
                      id={`collapse${item._id}`}
                      className={`accordion-collapse collapse ${
                        item._id === 1 ? 'show' : ''
                      }`}
                      aria-labelledby={`heading${item._id}`}
                      data-bs-parent='#accordionExample'
                    >
                      <div className='accordion-body'>{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='row gy-3 my-3'>
          <div className='col-md-6 col-12 my-auto'>
            <img src='/image.jpg' className='img-fluid' />
          </div>
          <div className='col-md-6 col-12 my-auto'>
            <h2 className='fw-bold'>ORGANIZATION CULTURE</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              amet, distinctio sapiente tempora modi, tempore quia voluptatum
              sint eligendi molestiae nam accusantium odit! Earum sequi tempore
              dolores libero quisquam nulla.
            </p>
            <p>
              Aliquid delectus iusto eligendi, rerum nam recusandae molestiae
              fuga.
            </p>

            <p>
              Tenetur doloremque excepturi fugit commodi sint dolore cumque
              distinctio minus, eveniet pariatur illum dolor soluta asperiores
              totam officia? Vitae, commodi delectus? Perspiciatis facilis qui
              quae consequatur rem tempora in reprehenderit deserunt nostrum ad
              dolorem.
            </p>
            <p>
              Quo quas sunt sint blanditiis voluptatem? Id molestiae consectetur
              ex molestias delectus obcaecati, saepe maiores mollitia magni.
            </p>
            <p>
              Aliquid delectus iusto eligendi, rerum nam recusandae molestiae
              fuga.
            </p>
            <p>
              Tenetur doloremque excepturi fugit commodi sint dolore cumque
              distinctio minus, eveniet pariatur illum dolor soluta asperiores
              totam officia? Vitae, commodi delectus? Perspiciatis facilis qui
              quae consequatur rem tempora in reprehenderit deserunt nostrum ad
              dolorem.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
