import Head from 'next/head'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <main className=''>{children}</main>
      <Footer />
    </>
  )
}
