import { isIE } from '@/utils/util'

// 判断环境不是 prod 或者 preview 是 true 时，加载 mock 服务
if (process.env.NODE_ENV !== 'production' || process.env.VUE_APP_PREVIEW === 'true') {
  if (isIE()) {
    console.error('[create-vue-app] ERROR: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.')
  }
  // 使用同步加载依赖
  // 防止 vuex 中的 GetInfo 早于 mock 运行，导致无法 mock 请求返回结果
  console.log('[create-vue-app] mock mounting')
  const Mock = require('mockjs2')
  require('./services/user')

  /**
   * github：https://github.com/nuysoft/Mock/wiki/Syntax-Specification
   * code：http://mockjs.com/examples.html
   */
  Mock.setup({
    timeout: 1000 // setter delay time
  })
  console.log('[create-vue-app] mock mounted')
}
