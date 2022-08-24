import Image from 'next/image'
import { getImageUrlFromId } from '../utils/sanity'

export const PortableTextComponent = {
  types: {
    image: ({ value }) => {
      return (
        <Image
          width={400}
          height={400}
          src={getImageUrlFromId(value?.asset?._ref)}
          alt={'story'}
          className='card-img-top img-fluid'
        />
      )
    },
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className='callToAction'>{value.text}</div>
      ),
  },

  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      )
    },
  },
}
