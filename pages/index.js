import Navigation from '../components/Navigation'
import Meta from '../components/Meta'
import AboutSection from '../components/AboutSection'
import BannerSection from '../components/BannerSection'
import ProjectSection from '../components/ProjectSection'
import PartnerSection from '../components/PartnerSection'
import NewsSection from '../components/NewsSection.js'

export default function Home() {
  return (
    <>
      <Meta />
      <Navigation />
      <AboutSection />
      <BannerSection />
      <ProjectSection />
      <PartnerSection />
      <NewsSection />
    </>
  )
}
