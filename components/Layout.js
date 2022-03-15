import { useEffect, useState } from 'react'
import Footer from './Footer'

import { Circles } from 'react-loader-spinner'

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true)

  const seconds = process.env.NODE_ENV === 'production' ? 5000 : 1000

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, seconds)

    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {loading && (
        <div className='loading'>
          <Circles ariaLabel='loading-indicator' />
          <span className='text-light'>
            Please wait while we make everything perfect for you...{' '}
          </span>
        </div>
      )}

      <main className=''>{children}</main>
      <Footer />
    </>
  )
}
