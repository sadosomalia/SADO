/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import Meta from '../../components/Meta'
import Navigation from '../../components/Navigation'
import Image from 'next/image'

import Map, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const Somalia = () => {
  const [viewport, setViewport] = useState({
    latitude: 4.741754612713282,
    longitude: 45.203976643935924,
    zoom: 5.5,
  })

  const parkLayer = {
    id: 'landuse_park',
    type: 'fill',
    source: 'mapbox',
    'source-layer': 'landuse',
    filter: ['==', 'class', 'park'],
    paint: {
      'fill-color': '#4E3FC8',
    },
  }

  const carousel = [
    {
      _id: 1,
      title: 'SOMALIA',
      image: '/blank.jpg',
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
    },
  ]

  const accessToken =
    'pk.eyJ1IjoiYWhtYWF0MTkiLCJhIjoiY2wwaWZnMnVxMDAzODNicXQ2cnNvejA1aSJ9.kvb_QZjXpT2KXaeVKoQtxw'

  const regions = [
    // {
    //   _id: 1,
    //   title: 'Mogadishu',
    //   image: '/card.jpg',
    //   description: 'Lorem ipsum dolor sit amet consectetur',
    // },

    {
      _id: 2,
      title: 'Kismayu',
      image: '/card.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      _id: 3,
      title: 'Bardhere',
      image: '/card.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      _id: 4,
      title: 'Elwak',
      image: '/card.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      _id: 5,
      title: 'Galbaherey',
      image: '/card.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      _id: 6,
      title: 'Dolow',
      image: '/card.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      _id: 7,
      title: 'Belethawa',
      image: '/card.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      _id: 8,
      title: 'Garbaharey',
      image: '/card.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      _id: 9,
      title: 'Jamama',
      image: '/card.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      _id: 10,
      title: 'Baidabo',
      image: '/card.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      _id: 11,
      title: 'Burdhubo',
      image: '/card.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur',
    },
  ]

  // middle jubba, lower jubba, gedo, bay, galgaduud,

  return (
    <>
      <Meta
        title='Somalia'
        description='SADO has its head office in Mogadishu, Somalia and an operational and logistics office in Nairobi. It has field base stations in Kismayu, Jubaland and Bardera ,Elwak , Garbaharrey ,Belt Hawa and Dollow Districts of Gedo region, Somalia.'
      />
      <Navigation carousel={carousel} />

      {/* <Map
        {...viewport}
        mapboxAccessToken={accessToken}
        style={{ width: '100%', height: 1000 }}
        onMove={(e) => setViewport(e.viewport)}
        mapStyle='mapbox://styles/mapbox/streets-v11'
      >
        <Marker longitude={-100} latitude={40} anchor='bottom'>
          <img src='/logo.png' width={100} height={100} alt='map' />
        </Marker>
      </Map> */}

      <div className='container py-3' style={{ textAlign: 'justify' }}>
        <h2 className='fw-bold'>WHERE WE WORK</h2>
        <p className='lead pb-3'>
          SADO has its head office in <strong>Mogadishu, Somalia </strong> and
          an operational and logistics office in <strong> Nairobi</strong>. It
          has field base stations in
          <strong> Kismayu, Jubaland </strong> and <strong>Bardera </strong>,
          <strong>Elwak </strong>, <strong>Garbaharrey </strong>,
          <strong>Belt Hawa</strong> and
          <strong> Dollow Districts of Gedo region, Somalia</strong>.
        </p>

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

      <div className='container py-3 text-center'>
        <Image
          width='760'
          height='1000'
          src='/somalia.png'
          alt='somalia'
          className='img-fluid'
        />

        {/* <div className='row gy-4'>
          {regions.map((n) => (
            <div key={n._id} className='col-lg-3 col-md-4 col-sm-6 col-12'>
              <div className='card border-0 rounded-0 animate__bounceIn'>
                <img
                  src={n.image}
                  alt={n.title}
                  className='img-fluid card-img-top shadow'
                />
                <div className='card-body shadow bg-light'>
                  <h6 className='card-title'>{n.title}</h6>
                  <p className='card-text'>{n.description}</p>
                  <Link href={`news/${n.slug}`}>
                    <a className='btn btn-outline-success btn-sm rounded-0 shadow'>
                      Read More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </>
  )
}

export default Somalia
