import axios from 'axios'

// Base URL
const url = 'http://164.92.157.29/api'

// Global API Call Function
export const dynamicAPI = async (method, url, obj = {}) => {
  try {
    switch (method) {
      case 'get':
        return await axios.get(`${url}`).then((res) => res.data)

      case 'post':
        return await axios.post(`${url}`, obj).then((res) => res.data)

      case 'put':
        return await axios.put(url, obj).then((res) => res.data)

      case 'delete':
        return await axios.delete(url).then((res) => res.data)
    }
  } catch (error) {
    throw error.response.data
  }
}

// GET => METHOD => ALL PROJECTS
export const getProjects = async () =>
  await dynamicAPI('get', `${url}/projects?populate=*`, {})

// GET => METHOD => PROJECT
export const getProject = async (slug) =>
  await dynamicAPI(
    'get',
    `${url}/projects/?filters[slug]=${slug}&populate=*`,
    {}
  )

// GET => METHOD => ALL STORIES
export const getStories = async () =>
  await dynamicAPI('get', `${url}/stories?populate=*`, {})

// GET => METHOD => STORY
export const getStory = async (slug) =>
  await dynamicAPI(
    'get',
    `${url}/stories/?filters[slug]=${slug}&populate=*`,
    {}
  )

// GET => METHOD => ALL PARTNERS
export const getPartners = async () =>
  await dynamicAPI('get', `${url}/partners?populate=*`, {})
