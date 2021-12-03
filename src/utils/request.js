import axios from 'axios'
import store from '@/store'
import { Toast } from 'vant'

/**
 * 提示函数
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = msg => {
  Toast({
    message: msg,
    duration: 1000,
    forbidClick: true
  })
}

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL, // api base_url
  timeout: 6000 // 请求超时时间
})

const err = (error) => {
  if (error.response) {
    const data = error.response.data
    if (error.response.status === 403) {
      tip(data.message)
    }
    if (error.response.status === 401) {
      tip('Authorization verification failed')
    }
  }
  return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use(config => {
  const token = store.state.token
  token && (config.headers.Authorization = token)
  return config
}, err)

// response interceptor
service.interceptors.response.use((response) => {
  return response.data
}, err)

export {
  service as axios
}
