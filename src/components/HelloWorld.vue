<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <el-button type="primary" round>{{ $t("lang.message.primary") }}</el-button>
      <el-button type="success" round>{{ $t("lang.message.success") }}</el-button>
      <el-button type="info" round>{{ $t("lang.message.info") }}</el-button>
      <el-button type="warning" round>{{ $t("lang.message.warning") }}</el-button>
      <el-button type="danger" round>{{ $t("lang.message.danger") }}</el-button>
    </div>
    <p>{{ $t("lang.message.hello") }}</p>
    <el-button type="primary" @click="toggleLang">{{lang}}</el-button>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Element-ui',
      lang:"English",
      show: true
    }
  },
  methods: {
    // this.$t('lang.message.hello') //在js代码里面调用多语言字段
    toggleLang () {
      if(localStorage.lang == "zh"){
        localStorage.lang = 'en';
        this.$i18n.locale = 'en';
        this.lang = "中文"
      }else{
        localStorage.lang = 'zh';
        this.$i18n.locale = 'zh';
        this.lang = "English"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   
</style>
