<template>
  <div id="app">
    <RouterView />
    <Tabbar />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Tabbar: () => import(/* webpackChunkName: "Tabbar.Component" */ '@/components/Tabbar'),
  },
};
</script>

<style lang="scss">
@import "assets/styles/reset";
</style>
