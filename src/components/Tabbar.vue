<template>
  <div class="Tabbar" v-show="showTabbar">
    <van-tabbar v-model="active" route safe-area-inset-bottom>
      <van-tabbar-item
        v-for="item of tabbarItemList"
        :key="item.name"
        :icon="item.icon"
        :to="item.to"
      >
        {{ item.name }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  beforeRouteUpdate (to, from, next) {
    console.log(11)
    this.showTabbar = this.tabbarItemList.some(item => item.to === this.$route.path)
    next()
  },
  data () {
    return {
      active: 0,
      showTabbar: false,
      tabbarItemList: [
        {
          name: '主页',
          icon: 'home-o',
          dot: false,
          info: '',
          to: '/',
          replace: true
        },
        {
          name: '分类',
          icon: 'home-o',
          dot: false,
          info: '',
          to: '/category',
          replace: true
        },
        {
          name: '拼团',
          icon: 'home-o',
          dot: false,
          info: '',
          to: '/group',
          replace: true
        },
        {
          name: '购物车',
          icon: 'home-o',
          dot: false,
          info: '',
          to: '/shopcart',
          replace: true
        },
        {
          name: '我的',
          icon: 'home-o',
          dot: false,
          info: '',
          to: '/mine',
          replace: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
