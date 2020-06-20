<template>
  <div class="router-view grid camp-page">
    <ActionComponent />
    <InformationComponent
      leadText="Go on a training camp to prepare your team for the upcoming match in the best possible way." />
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
