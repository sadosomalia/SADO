/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import Meta from '../../components/Meta'
import Navigation from '../../components/Navigation'

import Map, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const Somalia = () => {
  const [viewport, setViewport] = useState({
    latitude: 5.217961568301817,
    longitude: 46.98536511617976,
    zoom: 5.5,
  })
  const carousel = [
    {
      _id: 1,
      title: 'SOMALIA',
      image: '/slide.jpg',
      description: (
        <>
          SADO has its head office in <strong>Mogadishu, Somalia </strong> and
          an operational and logistics office in <strong> Nairobi</strong>. It
          has field base stations in
          <strong> Kismayu, Jubaland </strong> and <strong>Bardera </strong>,
          <strong>Elwak </strong>, <strong>Garbaharrey </strong>,
          <strong>Belt Hawa</strong> and
          <strong> Dollow Districts of Gedo region, Somalia</strong>.
        </>
      ),
      height: '540px',
    },
  ]

  const accessToken =
    'pk.eyJ1IjoiYWhtYWF0MTkiLCJhIjoiY2wwaWZnMnVxMDAzODNicXQ2cnNvejA1aSJ9.kvb_QZjXpT2KXaeVKoQtxw'

  return (
    <>
      <Meta title='Somalia' />
      <Navigation carousel={carousel} />

      <Map
        {...viewport}
        mapboxAccessToken={accessToken}
        style={{ width: '100%', height: 1000 }}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapStyle='mapbox://styles/mapbox/streets-v11'
      >
        <Marker
          longitude={6.13645855622037}
          latitude={46.62687782485264}
          anchor='bottom'
        >
          <img
            src='https://i.pinimg.com/originals/0f/61/ba/0f61ba72e0e12ba59d30a50295964871.png'
            alt=''
            width={50}
            height={50}
          />
        </Marker>
      </Map>

      <div className='container py-3'>
        <div className='row d-block d-md-none'>
          <div className='col-lg-7 col-md-9 col-12 mx-auto text-center'>
            SADO has its head office in <strong>Mogadishu, Somalia </strong> and
            an operational and logistics office in <strong> Nairobi</strong>. It
            has field base stations in
            <strong> Kismayu, Jubaland </strong> and <strong>Bardera </strong>,
            <strong>Elwak </strong>, <strong>Garbaharrey </strong>,
            <strong>Belt Hawa</strong> and
            <strong> Dollow Districts of Gedo region, Somalia</strong>.
          </div>
        </div>
      </div>
    </>
  )
}

export default Somalia
