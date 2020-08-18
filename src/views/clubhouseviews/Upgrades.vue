<template>
  <div class="router-view upgrades-page">
    <div class="upgrades-bottom">
      <div class="text-left">
        <p>Your Upgrade Cards</p>
      </div>
      <div class="upgrade-cards">
        <SvgIcon icon="upgrades" />
        <div class="cards-left">
          <p>x {{ upgradeStadiumCards }}</p>
        </div>
        <SvgIcon icon="player" />
        <div class="cards-left">
          <p>x {{ upgradeTrainingCards }}</p>
        </div>
        <SvgIcon icon="field" />
        <div class="cards-left">
          <p>x {{ upgradePitchCards }}</p>
        </div>
        <SvgIcon icon="gym" />
        <div class="cards-left">
          <p>x {{ upgradeGymCards }}</p>
        </div>
        <SvgIcon icon="calendar" />
        <div class="cards-left">
          <p>x {{ upgradeMatchCards }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/01_atoms/Icons/SvgIcon/index';

export default {
  name: 'Upgrades',
  components: { SvgIcon },
  computed: {
    upgradeStadiumCards: function() {
      return this.$store.getters.getUpgradeCards.filter(card => card.purpose === 'stadium').length
    },
    upgradeTrainingCards: function() {
      return this.$store.getters.getUpgradeCards.filter(card => card.purpose === 'training').length
    },
    upgradePitchCards: function() {
      return this.$store.getters.getUpgradeCards.filter(card => card.purpose === 'pitch').length
    },
    upgradeGymCards: function() {
      return this.$store.getters.getUpgradeCards.filter(card => card.purpose === 'gym').length
    },
    upgradeMatchCards: function() {
      return this.$store.getters.getUpgradeCards.filter(card => card.purpose === 'match').length
    }
  }
}
</script>
