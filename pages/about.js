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
      _id: 3,
      title: 'CORE VALUE',
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
