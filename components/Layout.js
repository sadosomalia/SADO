import Footer from './Footer'
import Router from 'next/router'
import Nprogress from 'nprogress'

Router.events.on('routeChangeStart', () => Nprogress.start())
Router.events.on('routeChangeComplete', () => Nprogress.done())
Router.events.on('routeChangeError', () => Nprogress.done())

export default function Layout({ children }) {
  return (
    <>
      <main className=''>{children}</main>
      <Footer />
    </>
  )
}
