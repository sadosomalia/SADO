import Meta from '../components/Meta'
import Navigation from '../components/Navigation'

const HealthNutrition = () => {
  const carousel = [
    {
      _id: 1,
      title: 'Health & Nutrition',
      image: '/slide.jpg',
      description:
        'SADO is working in some of the world’s most vulnerable communities to ensure that no one need die from curable diseases or suffer chronic malnutrition. SADO offers integrated health and nutrition services to vulnerable populations in various locations and these are inclusive of',
    },
  ]

  const data = [
    {
      id: 1,
      title: 'Integrated childhood immunization and education program (ICIPE)',
      description: `SADO operates a program that provides children 3-6 years old with basic healthcare services at various locations in Somalia. This includes treatment for malaria, pneumonia, measles, whooping cough and other communicable diseases along with vitamin A supplements. Children are also given deworming medication to prevent parasitic infections.`,
    },
    {
      id: 2,
      title: 'Health and nutrition programs for women and children',
      description:
        'In collaboration with local health facilities, SADO provides: food supplements, nutritional counseling services and medical referrals',
    },
    {
      id: 3,
      title: 'Food and nutrition assistance programs ',
      description:
        'SADO has a robust program for distribution of food aid for vulnerable populations in Somalia. The main objective is to provide nutritious, balanced and affordable food at reasonable prices to the most vulnerable groups.',
    },
    {
      id: 4,
      title: `Institutional support and capacity building`,
      description:
        'SADO works in partnership with local health centers, NGOs and other organizations to improve their management and operational performance. SADO has also provided training on women’s health care, maternal and child health as well as nutrition management for the Ministry of Health and Ministry of Education. As a result, many of these institutions have been able to effectively implement programs aimed at improving overall nutrition and health status among vulnerable populations.',
    },
  ]
  return (
    <>
      <Meta
        title='Health & Nutrition'
        description='SADO is working in some of the world’s most vulnerable communities to ensure that no one need die from curable diseases or suffer chronic malnutrition. SADO offers integrated health and nutrition services to vulnerable populations in various locations and these are inclusive of:'
      />
      <Navigation carousel={carousel} />

      <div className='container py-3'>
        <div className='row gy-3 my-3'>
          <div className='col-lg-8 col-md-10 col-12 mx-auto text-centera'>
            <p>
              SADO is working in some of the world’s most vulnerable communities
              to ensure that no one need die from curable diseases or suffer
              chronic malnutrition. SADO offers integrated health and nutrition
              services to vulnerable populations in various locations and these
              are inclusive of:
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

export default HealthNutrition
