<template>
  <div class="router-view grid camp-page">
    <ActionComponent />
    <InformationComponent />
  </div>
</template>

<script>
import ActionComponent from '@/components/03_organisms/ActionComponent/index';
import InformationComponent from '@/components/03_organisms/InformationComponent/index';

export default {
  name: 'Camp',
  components: { ActionComponent, InformationComponent }
}
</script>
