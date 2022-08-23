import axios from 'axios'

export const postAPI = (url, body) => axios.post(url, body)

export const getAPI = (url, params) => axios.get(url, {params})

export const deleteAPI = (url) => axios.delete(url)