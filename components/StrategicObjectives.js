import React from 'react'

const StrategicObjectives = () => {
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

  const data = [
    {
      _id: 1,
      title: (
        <span>
          To strengthen governance structures, partnerships and funding
        </span>
      ),
    },
    {
      _id: 2,
      title: (
        <span>
          To ensure food security and income through integrated FSN and cash
          interventions for crisis-affected households while investing in
          resilience activities to support the protection and restoration of
          livelihoods
        </span>
      ),
    },
    {
      _id: 3,
      title: (
        <span>
          To facilitate sustained access to reliable
          <strong> Climate Resilient Water, Sanitation and Hygiene </strong>
          services for crisis-affected populations households through WASH
          infrastructure development and knowledge and skills transfer
        </span>
      ),
    },
    {
      _id: 4,
      title: (
        <span>
          To increase access to quality education for school-aged children at
          primary and secondary school levels and access to protective learning
          environments for emergency and crisis-affected children by supporting
          the quality of teaching and learning processes for teachers and
          students in selected learning institutions.
        </span>
      ),
    },
    {
      _id: 5,
      title: (
        <span>
          Improve access to gainful employment opportunities for 5000 vulnerable
          women and youth through good quality market – driven vocational skills
          education in Somalia
        </span>
      ),
    },
    {
      _id: 6,
      title: (
        <span>
          To contribute to stability and co-existence among communities by
          supporting constructive engagement meetings with FGS and FMS
          institutions to improve peace and the rule of law.
        </span>
      ),
    },
    {
      _id: 7,
      title: (
        <span>
          To promote management of acute malnutrition; both severe and moderate
          malnutrition among crisis affected households through strengthening
          the health care services, emergency preparedness and response.
        </span>
      ),
    },
    {
      _id: 8,
      title: (
        <span>
          To ensure equitable access to protection services in the most
          dignified manner for newly displaced people and improve the living
          conditions of protracted IDPs through provision NFIs and transitional
          shelters.
        </span>
      ),
    },
  ]
  return (
    <div className='py-5'>
      <h2 className='fw-bold'>STRATEGIC OBJECTIVES </h2>

      {/* <div className='row'>
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
      </div> */}

      <ol className='list-group list-group-numbered'>
        {data.map((d) => (
          <li key={d._id} className='list-group-item border-0'>
            {d.title}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default StrategicObjectives
