<template>
  <div class="router-view training-page">
    <div class="training-bottom">
      <div class="text-left">
        <p>Your Training Cards</p>
      </div>
      <div class="available-cards">
        <SvgIcon icon="cards" />
        <div class="cards-left">
          <p>x {{ availableCards }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/01_atoms/Icons/SvgIcon/index';

export default {
  name: 'Training',
  components: { SvgIcon },
  computed: {
    availableCards: function() {
      return this.$store.getters.getTrainingCards.length
    }
  }
}
</script>
