<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from '@/components/03_organisms/Navigation/index'

export default {
  name: 'App',
  components: { Navigation }
}
</script>

<style lang="scss">@import '@/assets/scss/main';</style>