<template>
  <div id="app">
    <router-view/>
    <!-- 缓存方法 -->
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view> -->
  </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="stylus">
@import './assets/stylus/index.styl'
</style>
