import Navigation from '../components/Navigation'
import Meta from '../components/Meta'
import AboutSection from '../components/AboutSection'
import BannerSection from '../components/BannerSection'
import ProjectSection from '../components/ProjectSection'
import PartnerSection from '../components/PartnerSection'
// import NewsSection from '../components/NewsSection.js'
import SuccessStorySection from '../components/SuccessStorySection'

import { getPartners, getProjects, getStories } from '../utils/api'
import { alertMessage } from '../utils/alert'

export default function Home({ error, projects, stories, partners }) {
  return (
    <>
      <Meta />
      <Navigation />
      <AboutSection />
      <BannerSection />

      {error ? (
        alertMessage({
          status: error.status,
          message: error.message,
        })
      ) : (
        <div id='projects' className='container my-3'>
          <ProjectSection projects={projects && projects.slice(0, 4)} />
        </div>
      )}

      {error ? (
        alertMessage({
          status: error.status,
          message: error.message,
        })
      ) : (
        <div id='stories' className='container my-3'>
          <SuccessStorySection stories={stories && stories.slice(0, 4)} />
        </div>
      )}

      {error ? (
        alertMessage({
          status: error.status,
          message: error.message,
        })
      ) : (
        <div id='partners' className='container my-3'>
          <PartnerSection partners={partners && partners} />
        </div>
      )}

      {/* <NewsSection /> */}
    </>
  )
}

export async function getServerSideProps() {
  try {
    const projects = await getProjects()
    const stories = await getStories()
    const partners = await getPartners()
    return {
      props: {
        projects: projects.data,
        stories: stories.data,
        partners: partners.data,
      },
    }
  } catch (error) {
    return {
      props: {
        error: error.error,
      },
    }
  }
}
