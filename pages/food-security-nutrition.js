import Meta from '../components/Meta'
import Navigation from '../components/Navigation'

const FSN = () => {
  const carousel = [
    {
      _id: 1,
      title: 'FOOD SECURITY & NUTRITION',
      image: '/blank.jpg',
      description:
        'The program aims to contribute to household economic prosperity, food diversification and social protection. The strategic interventions areas will revolve around access to social safety nets, enhancing production and facilitating access to markets',
    },
  ]

  return (
    <>
      <Meta
        title='Food Security and Nutrition '
        description='The program aims to contribute to household economic prosperity, food diversification and social protection. The strategic interventions areas will revolve around access to social safety nets, enhancing production and facilitating access to markets'
      />
      <Navigation carousel={carousel} />

      <div className='container py-3 ' style={{ textAlign: 'justify' }}>
        <div className='row gy-3 my-3'>
          <div className='col-lg-8 col-md-10 col-12 mx-auto text-centera'>
            <p>
              The program aims to contribute to household economic prosperity,
              food diversification and social protection. The strategic
              interventions areas will revolve around access to social safety
              nets, enhancing production and facilitating access to markets
            </p>
            <p>
              A livelihood comprises capabilities, assets and activities
              required for a means of living, and are regarded as sustainable
              when it can cope with and/or recover from stresses and shocks.
              Sustainable food security and livelihoods strategies help people
              to meet their immediate and future needs; enhance their dignity
              and voice; empower them economically, politically and socially;
              and develop the localities which they belong to and live in. When
              people are able to produce, sell, earn, and invest in the future
              they can shape, influence, contribute to and benefit from civil
              society and good government as well as be the drivers of change
              leading to poverty reduction. Some of our Strategic Interventions
              are
            </p>
            <p>
              (a) Facilitate access to food and other basic needs to chronically
              vulnerable groups through cash transfers, food vouchers, relief
              food and cash for work <br />
              (b) Organizing communities and other relevant stakeholders towards
              establishing/ reinvigorating social support systems <br />
              (c) Facilitate access to social protection measures and safety
              nets for chronically vulnerable people to prevent people them from
              slipping into chronic poverty / vulnerability during periods of
              ‘shock’.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FSN
