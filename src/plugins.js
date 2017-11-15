import Validate from 'vee-validate'
import axios from 'axios'

axios.interceptors.request.use((config) => {
  const token = store.getters[AUTH_TOKEN]
  return {
    ...config,
    baseURL: config.baseURL || process.env.API,
    headers: {
      ...config.headers || {},
      ...token ? { Authorization: `Bearer ${token}` } : {}
    }
  }
})

export default (Vue) => {
  Vue.use(Validate)
}
