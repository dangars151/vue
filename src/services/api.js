import axios from 'axios'

// unflash
// const clientId = process.env.VUE_APP_UNSPLASH_API_KEY || ''

// const api = axios.create({
//   baseURL: 'https://api.unsplash.com',
//   headers: {
//     'Accept-Version': 'v1',
//     Authorization: `Client-ID ${clientId}`,
//   },
// })
// export const getImages = page => {
//   return api.get(`photos?page=${page}`)
// }

// export const getImageByIdApi = id => {
//   return api.get(`photos/${id}`)
// }

// export const getImagesByUserApi = username => {
//   return api.get(`/users/${username}/photos`)
// }

// heroku
const api = axios.create({
  baseURL: 'https://secure-caverns-59009.herokuapp.com',
})

export const getImages = page => {
  return api.get(`photos?page=${page}`)
}

export const getImageByIdApi = id => {
  return api.get(`photos?id=${id}`)
}

export const getImagesByUserApi = username => {
  return api.get(`photos?author=${username}`)
}
