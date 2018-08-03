<template>
    <div class="home">
        <div class="swipe">
            <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
            </van-swipe>
        </div>

    </div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    }
  }

}
</script>

<style lang="stylus" scoped>

</style>
