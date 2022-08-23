import {
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import { config } from './config'

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

export const usePreviewSubscription = createPreviewSubscriptionHook(config)

export const useCurrentUser = createCurrentUserHook(config)

export const getFileUrlFromId = (ref) => {
  const [_file, id, extension] = ref?.split('-')
  return `https://cdn.sanity.io/files/${process.env.REACT_APP_PROJECT_ID}/production/${id}.${extension}`
}

export const getImageUrlFromId = (ref) => {
  const [image, id, size, extension] = ref?.split('-')
  return `https://cdn.sanity.io/images/bj2tfmaf/production/${id}-${size}.${extension}`
}
