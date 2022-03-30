import Meta from '../components/Meta'
import Navigation from '../components/Navigation'

const CSEE = () => {
  const carousel = [
    {
      _id: 1,
      title: 'CLIMATE SMART ECONOMIC EMPOWERMENT / FSL',
      image: '/blank.jpg',
      description: 'What we do in Climate Smart Economic Empowerment / FSL',
    },
  ]

  const data = [
    {
      id: 1,
      title: 'Agricultural Support for farmers',
      description:
        'SADO works with small holder farmers and provides them with: agricultural extension services, equipment, technologies and inputs they need to grow their crops, including seeds, fertilizer and tools. Farmers are also supported with technical assistance in farming practices that are sustainable and socially acceptable. SADO also works with farmers to improve their access to capital, increase market access, and help protect against environmental degradation. Ultimately, the organizations aim to increase food and nutritional security',
    },
    {
      id: 2,
      title: 'Livestock Support for pastoralists in remote and hostile areas',
      description:
        'SADO actively works with nomadic communities, providing training on livestock management and herding skills. Community based livestock markets are established to link nomads with more stable markets; the organization also works with communities to enable them to access loans and develop the capacity to create micro-credit services. In addition, SADO provides veterinary care and animal health education through community animal health workers',
    },
    {
      id: 3,
      title:
        'Food security and integrated management of natural resources (FMNR)',
      description:
        'SADO works with farmers and herders in order to encourage them to manage their natural resources in a sustainable manner, which includes minimization and use of fertilizers, pesticides, and overgrazing. This is done through awareness raising, capacity building and community empowerment',
    },
    {
      id: 4,
      title: `Women's Economic Empowerment (WEEE)`,
      description:
        'SADO works with local women to improve their economic and social status as well as their access to education, healthcare, and micro-credit. This improves access to affordable and nutritious food through increased income.',
    },
    {
      id: 5,
      title: `Technical Vocational Training for Youth`,
      description: `SADO collaborates with local NGOs to deliver vocational training in various trades, including for young boys and girls. SADO provides youth in kismayo town with the skills and knowledge necessary to obtain employment.`,
    },
    {
      id: 6,
      title: `Emergency Response`,
      description: `SADO has a broad range of programs to respond to situations where food insecurity is the primary cause of the crisis. Unconditional cash transfers and Cash for Work are the modalities used to address the immediate needs of people affected by crises, while simultaneously working to develop long-term solutions that will enable communities to emerge from crisis as self-reliant and stable`,
    },
  ]
  return (
    <>
      <Meta
        title='Climate Smart Economic Empowerment/ FSL'
        description='Understanding the root causes of poverty, hunger and environmental degradation, SADO in collaboration with partners to develop
        multi-faceted approaches to help communities adopt a climate smart
        way of life in an effort to reverse the adverse effects of climate
        change such as floods and droughts. Programs implemented by SADO
        are'
      />
      <Navigation carousel={carousel} />

      <div className='container py-3' style={{ textAlign: 'justify' }}>
        <div className='row gy-3 my-3'>
          <div className='col-lg-8 col-md-10 col-12 mx-auto text-centera'>
            <p>
              Understanding the root causes of poverty, hunger and environmental
              degradation, SADO in collaboration with partners to develop
              multi-faceted approaches to help communities adopt a climate smart
              way of life in an effort to reverse the adverse effects of climate
              change such as floods and droughts. Programs implemented by SADO
              are:
            </p>
            <ol className='list-group list-group-numbered'>
              {data.map((d) => (
                <li key={d._id} className='list-group-item border-0'>
                  {d.title} <br /> <p>{d.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default CSEE
