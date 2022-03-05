import Link from 'next/link'

const BannerSection = () => {
  return (
    <div className='jumbotron py-5 my-5 text-center text-light'>
      <div className='container py-5'>
        <h1 className='display-4 fw-bold'>
          Small decision can change someone's life
        </h1>
        <p className='lead'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde
          quos nam. Quaerat dolorem modi adipisci? Quia optio totam, nisi
          quibusdam accusamus veniam quidem? Quasi minima aliquam voluptate modi
          id.
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
