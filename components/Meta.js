import Head from 'next/head'
import { useRouter } from 'next/router'

const Meta = (props) => {
  const router = useRouter()
  const title = 'Web Design and Development Solutions In Somalia | websom'
  const description =
    'We are one of the most effective Web Development Companies in Somalia'
  const image = 'https://www.sadosomalia.org/favicon.png'
  const url = `https://www.sadosomalia.org${router.asPath}`
  const author = 'websom'

  return (
    <Head>
      <meta charSet='utf-8' />

      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#000000' />
      <link rel='canonical' href={url} />

      <title>{props.title ? props.title : title}</title>
      <meta
        name='title'
        content={props.title ? props.title : title}
        key='title'
      />
      <meta
        name='description'
        content={props.description ? props.description : description}
        key='description'
      />

      <meta
        name='keywords'
        content='Web, Mobile, Web Mobile, App, Development Company, App Development, Web Development, Mobile Application Development Company, Mobile Application Development, agency, Design Agency, Digital Age, Digital Agency, Web Design Development Agency, Web Design, eCommerce, Websites, Website, Websom, Web Som, websom, sadosomalia.org, websomdev, dev, Design, Web Solutions, Empowering Business Growth With The Power Of Web Development, Business Growth, Business, Growth, Software Development Company, Web Development Company, Custom Software Development, custom software development company, Custom Web, Custom Design, Somalia, Web Design Company in Somalia, Somali Web Design, Somali Web Development, SEO Optimization, Marketing, Branding, E-commerce, Development'
      />
      <meta name='author' content={props.author ? props.author : author} />
      <meta name='publisher' content={props.author ? props.author : author} />
      <meta name='robots' content='index, follow' />
      <link rel='icon' href='/favicon.png' />
      <link
        rel='shortcut icon'
        type='image/vnd.microsoft.icon'
        href='/favicon.png'
      />
      <link rel='apple-touch-icon' type='image/png' href='/favicon.png' />
      <link
        rel='apple-touch-icon'
        type='image/png'
        sizes='72x72'
        href='/favicon.png'
      />
      <link
        rel='apple-touch-icon'
        type='image/png'
        sizes='114x114'
        href='/favicon.png'
      />
      <link rel='icon' type='image/png' href='/favicon.png' />

      {/* <!-- Google / Search Engine Tags --> */}
      <meta
        itemProp='name'
        content={props.title ? props.title : title}
        key='g:title'
      />
      <meta
        itemProp='description'
        content={props.description ? props.description : description}
        key='g:description'
      />
      <meta
        itemProp='image'
        content={props.image ? `https://sadosomalia.org${props.image}` : image}
        key='g:image'
      />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property='og:url' content={url} key='og:url' />
      <meta property='og:type' content='website' />
      <meta
        property='og:title'
        content={props.title ? props.title : title}
        key='og:title'
      />
      <meta
        property='og:description'
        content={props.description ? props.description : description}
        key='og:description'
      />
      <meta
        property='og:image'
        content={props.image ? `https://sadosomalia.org${props.image}` : image}
        key='og:image'
      />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:title'
        content={props.title ? props.title : title}
        key='twitter:title'
      />
      <meta
        name='twitter:description'
        content={props.description ? props.description : description}
        key='twitter:description'
      />
      <meta
        name='twitter:image'
        content={props.image ? `https://sadosomalia.org${props.image}` : image}
        key='twitter:image'
      />
    </Head>
  )
}
export default Meta
