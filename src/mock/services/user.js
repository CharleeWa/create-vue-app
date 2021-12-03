import Mock from 'mockjs2'
import { builder } from '../util'

const info = (options) => {
  const userInfo = {
    'id': '4291d7da9005377ec9aec4a71ea837f',
    'name': 'vue-app',
    'username': 'admin',
    'password': '',
    'avatar': '🧑'
  }

  return builder(userInfo)
}

Mock.mock(/\/api\/user\/info/, 'get', info)
