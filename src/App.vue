<template>
  <div id="app">
    <div id="vanHeader">
      <van-nav-bar
      title="爱经"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"/>
    </div>

    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <div id="vanTabbar">
      <van-tabbar v-model="active">
      <van-tabbar-item icon="shop" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="records" dot to="/myclass">课程</van-tabbar-item>
      <van-tabbar-item icon="chat" info="5" to="/myissue">反馈</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" info="20" to="/mycenter">我的</van-tabbar-item>
    </van-tabbar>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      active: 0
    }
  },
  methods: {
    onClickLeft () {
      console.log('返回')
    },
    onClickRight () {
      console.log('按钮')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
