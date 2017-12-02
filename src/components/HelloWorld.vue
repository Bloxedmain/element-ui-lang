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
    .transition-box {
      margin-bottom: 10px;
      width: 200px;
      height: 100px;
      border-radius: 4px;
      background-color: #409EFF;
      text-align: center;
      color: #fff;
      padding: 40px 20px;
      box-sizing: border-box;
      margin-right: 20px;
    }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
