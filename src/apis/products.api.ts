import axiosClient from './axiosClient'

export const productApi = {
  url: '/products',

  get: async (params) => {
    return axiosClient.get(this.url, { params })
  },

  getAll: async (params) => {
    return axiosClient.get(this.url, { params })
  },
  add: async (data) => {
    return axiosClient.post(this.url, data)
  },
  update: async (data) => {
    return axiosClient.post(`${this.url}/${data.id}`, data)
  },
  delete: async (data) => {
    return axiosClient.post(`${this.url}/${data.id}`, data)
  },
}
