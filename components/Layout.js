import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Footer from './Footer'

import { Circles } from 'react-loader-spinner'
import Countdown from 'react-countdown'

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 10000)

    return () => clearTimeout(timer)
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
