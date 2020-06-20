<template>
  <div class="router-view grid home-page">
    <LeadLink
      size="big"
      title="Club House"
      path="club-house"
      :sideimage='"emblems/" + emblem' :sideimagetext="this.$store.getters.getTeamStrength" />
    <LeadLink
      size="small"
      title="Cards"
      path="cards"
      text="Get new card packs to acquire new players and improve your club."
      sideimage='icons/cards'
      :sideimagetext="this.$store.getters.getCards + '/' + this.$store.getters.getSlots" />
    <LeadLink
      class="division-link"
      size="small"
      title="Divisions"
      path="divisions"
      text="Play Division matches to earn promotion and collect new cards."
      :sideimagetext="String(this.$store.getters.getDivision)" />
    <LeadLink
      size="small"
      title="Extras"
      path="extras"
      text="Your profile, settings, achievements and more."
      sideimage='icons/extras' />
  </div>
</template>

<script>
import LeadLink from '@/components/02_molecules/LeadLink/index';

export default {
  name: 'Home',
  components: { LeadLink },
  data() {
    return {
      emblem: ''
    }
  },
  created() {
    this.emblem = this.$store.getters.getEmblem;
  }
}
</script>
