<template>
  <div class="router-view grid divisions-page">
    <LeadLink
      class="division-link"
      size="small"
      title="Division Match"
      path="match"
      text="Play Division matches and earn promotion to higher Divisions. Obtain Trophies and rewards to improve your club." :sideimagetext="String(this.$store.getters.getClub.division)" />
    <LeadLink
      size="big"
      title="Tactical Plan"
      path="tactics"
      :sideimage='"emblems/" + emblem' :sideimagetext="String(this.$store.getters.getTeam.strength)" />
    <LeadLink
      size="small"
      title="Leaderboards"
      path="leaderboards"
      text="View your current weekly, yearly and all-time rankings."
      sideimage='icons/ranking' />
    <LeadLink
      size="big"
      title="Division Stars"
      path="divisions"
      sideimage='icons/ranking' />
    <LeadLink
      size="small"
      title="Match Results"
      path="match-results"
      sideimage='icons/calendar'
      text="View your match results for the last 30 Division matches played." />
  </div>
</template>

<script>
import LeadLink from '@/components/02_molecules/LeadLink/index';

export default {
  name: 'Divisions',
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
