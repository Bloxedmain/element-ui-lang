import enLocale from 'element-ui/lib/locale/lang/en'
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
      hello: 'hello world',
      danger: 'danger',
      primary: 'primary',
      success: 'success',
      info: 'info',
      warning: 'warning'
    },
  },
  ...enLocale //enLocale是elementUi的多语言文件，通过…enLocale进行解析，与我们自己搭建的en.js进行合并
}