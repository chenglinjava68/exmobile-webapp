<template>
  <div class="Tabbar" v-show="show">
    <van-tabbar v-model="active" route safe-area-inset-bottom>
      <van-tabbar-item
        v-for="item of tabbarItemList"
        :key="item.name"
        :icon="item.icon"
        :to="item.to"
        :replace="item.replace"
      >
        {{ item.name }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { TABBAR_CHANGED_ACTIVE, TABBAR_CHANGED_SHOW } from '@/constant/MutationType'

export default {
  name: 'Tabbar',
  computed: {
    ...mapState({
      show: state => state.Tabbar.show,
      tabbarItemList: state => state.Tabbar.tabbarItemList
    }),
    active: {
      get () {
        return this.$store.state.Tabbar.active
      },
      set (active) {
        this.TABBAR_CHANGED_ACTIVE({
          type: TABBAR_CHANGED_ACTIVE,
          active
        })
      }
    }
  },
  created () {
    this.TABBAR_CHANGED_SHOW({
      type: TABBAR_CHANGED_SHOW,
      show: this.tabbarItemList.some(item => item.to === this.$route.path)
    })
  },
  methods: {
    ...mapMutations([
      TABBAR_CHANGED_ACTIVE,
      TABBAR_CHANGED_SHOW
    ])
  }
}
</script>

<style lang="scss" scoped>
.Tabbar {
  box-sizing: content-box;
  .van-tabbar {
    box-sizing: inherit;
  }
}
</style>
