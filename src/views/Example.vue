<template>
  <div class="router-view example-page">
    <h1>Example page</h1>
    <img src="@/assets/images/logo.png" alt="MyApp logo">
    <HelloWorld msg="MyApp"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/04_pages/HelloWorld/index'

export default {
  name: 'Example',
  components: { HelloWorld }
}
</script>
