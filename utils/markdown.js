import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import Link from 'next/link'
import remarkGfm from 'remark-gfm'

export const markdown = (content) => {
  return (
    <ReactMarkdown
      // eslint-disable-next-line react/no-children-prop
      children={content}
      remarkPlugins={[remarkGfm]}
      components={{
        image: Image,
        link: Link,
      }}
    />
  )
}
