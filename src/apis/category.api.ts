import axiosClient from './axiosClient'

export const categoryApi = {
  get: async (params) => {
    const url = '/categories'
    return axiosClient.get(url, { params })
  },

  getAll: async (params) => {
    const url = '/categories'
    return axiosClient.get(url, { params })
  },
  add: async (data) => {
    const url = '/categories'
    return axiosClient.post(url, data)
  },
  update: async (data) => {
    const url = '/categories'
    return axiosClient.post(`${url}/${data.id}`, data)
  },
  delete: async (data) => {
    const url = '/categories'
    return axiosClient.post(`${url}/${data.id}`, data)
  },
}
