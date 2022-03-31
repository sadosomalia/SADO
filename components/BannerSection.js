import Link from 'next/link'

const BannerSection = () => {
  return (
    <div className='jumbotron py-5 my-5 text-center text-light' id='donate'>
      <div className='container py-5'>
        <h1 className='display-4 fw-bold'>
          {" Small decision can change 'someones' life"}
        </h1>
        <p className='lead'>
          If you wish to support {`SADO's`} work and learning initiatives,
          please donate today. When you donate, you are partnering with Somali
          communities to provide Water, Food, Healthcare, Education and more to
          poor households in the country.
        </p>
        <p className='lead'>
          If you would like to make a one-time donation or if you would like
          recurring monthly donations, please click the DONATE button below.
          Thank You!
        </p>

        <p className='lead'>
          <Link href='#'>
            <a
              className='btn btn-success btn-lg p-4 shadow-none donate-btn'
              role='button'
            >
              HELP US DONATE NOW
            </a>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default BannerSection
