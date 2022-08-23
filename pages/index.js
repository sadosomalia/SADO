import Navigation from '../components/Navigation'
import Meta from '../components/Meta'
import AboutSection from '../components/AboutSection'
import BannerSection from '../components/BannerSection'
import ProjectSection from '../components/ProjectSection'
import PartnerSection from '../components/PartnerSection'
import SuccessStorySection from '../components/SuccessStorySection'

import { alertMessage } from '../utils/alert'
import { getClient } from '../utils/sanity.server'
import groq from 'groq'

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

// export async function getStaticProps({ preview = false }) {
//   const partners = await getClient(preview).fetch(groq`
//         *[_type == "partner" && publishedAt < now()] | order(publishedAt desc){
//             _id,
//             name,
//             "author": {
//               "name": author->name,
//               "image": author->image,
//             },
//             logo,
//             publishedAt,
//             slug
//         }
//   `)
//   return {
//     props: {
//       partners,
//     },
//   }
// }

export async function getServerSideProps({ preview = false }) {
  try {
    const partners = await getClient(preview).fetch(groq`
        *[_type == "partner" && publishedAt < now()] | order(publishedAt desc){
            _id, 
            name, 
            logo,
            publishedAt,
            slug,
            "author": {
              "name": author->name,
              "image": author->image,
            }
        }
  `)
    const stories = await getClient(preview).fetch(groq`
  *[_type == "story" && publishedAt < now()] | order(publishedAt desc){
      _id, 
      title, 
      image,
      publishedAt,
      slug, 
      excerpt,
      body,
      "author": {
        "name": author->name,
        "image": author->image,
      }
  }
`)
    const projects = await getClient(preview).fetch(groq`
        *[_type == "project" && publishedAt < now()] | order(publishedAt desc){
            _id, 
            title, 
            image,
            publishedAt,
            slug, 
            excerpt,
            body,
            "author": {
              "name": author->name,
              "image": author->image,
            }
        }
  `)

    return {
      props: {
        projects,
        stories,
        partners,
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
