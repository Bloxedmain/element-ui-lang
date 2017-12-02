import enLocale from 'element-ui/lib/locale/lang/zh-CN'
export default {
  languages: [{
    text: 'Chinese',
    val: 'zh-CN'
  }, {
    text: 'English',
    val: 'en'
  }],
  lang: {
    message: {
      hello: '你好，世界',
      danger: '危险',
      primary: '主要',
      success: '成功',
      info: '信息',
      warning: '警告'
    },
  },
  ...enLocale //enLocale是elementUi的多语言文件，通过…enLocale进行解析，与我们自己搭建的en.js进行合并
}