import Meta from '../components/Meta'
import Navigation from '../components/Navigation'

const OurNetworks = () => {
  const carousel = [
    {
      _id: 1,
      title: 'OUR NETWORKS',
      image: '/blank.jpg',
      description:
        'Our networks at the National, International and the NGO fora',
    },
  ]

  return (
    <>
      <Meta
        title='Our Networks'
        description='Our networks at the National, International and the NGO fora'
      />
      <Navigation carousel={carousel} />

      <div className='container py-3' style={{ textAlign: 'justify' }}>
        <div className='row gy-3 my-3'>
          <div className='col-lg-8 col-md-10 col-12 mx-auto text-centera'>
            <p>
              SADO has graciously received technical and financial support from
              various funding donors through various partner organizations:
              European Union (EU) through Peace Direct, UNOCHA through Somalia
              Humanitarian Fund (SHF), USAID/FFP/OFDA through ACTED, Catholic
              Relief Services, (CRS), Norwegian Church Aid (NCA), FAO, GIZ,
              UNHCR, UNDP, CARE, Oxfam NOVIB, Oxfam GB, FAO, Pathways/ UNICEF,
              Solidarities, Diakonia, The French Embassy, Embassy of Canada, and
              private/individual donors.
            </p>
            <p>
              <strong> SADO is a member of Nexus</strong> – Nexus is a platform
              for civil society leadership in Somalia aimed at advancing a new
              community – driven model of partnerships promoting peaceful,
              thriving and empowered communities in Somalia and Somaliland. SADO
              is also active member of Somalia Education, WASH, FSL and Shelter
              and settlement Clusters. As well other networks amongst them
              Somalia South Central Non-State Actors (SOSCENSA), Peace and Human
              Rights Network, Somali NGO Consortium and East and Horn of Africa
              Human Rights Defenders, EHAHRDP. Finally, SADO has a good working
              relationship with Government, Local authorities, Traditional
              Leaders and AMISOM
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurNetworks
