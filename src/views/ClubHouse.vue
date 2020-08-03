<template>
  <div class="router-view grid clubhouse-page">
    <LeadLink
      size="small"
      title="Player Training"
      path="training"
      text="Raise your players to a higher level by training them."
      sideimage="icons/training"
      :sideimagetext="this.$store.getters.getClub.inTraining + '/' + this.$store.getters.getClub.trainingSlots" />
    <LeadLink
      size="big"
      title="Tactical Plan"
      path="tactics"
      :sideimage='"emblems/" + emblem' :sideimagetext="String(this.$store.getters.getTeam.strength)" />
    <LeadLink
      size="small"
      title="Exhibition"
      path="exhibition"
      text="Play exhibition matches to test your tactics and earn rewards."
      sideimage="icons/exhibition" />
    <LeadLink
      size="small"
      title="Club Upgrades"
      path="upgrades"
      text="Upgrade components of your club to better your team and improve their results."
      sideimage="icons/upgrades" />
    <LeadLink
      size="small"
      title="Training Camp"
      path="camp"
      text="Prepare your team for the next Division or competition match."
      sideimage="icons/field" />
    <LeadLink
      size="tiny"
      title="Edit Club"
      path="edit-club"
      :sideimage='"emblems/" + emblem' />
    <LeadLink
      size="tiny"
      title="Roster"
      path="roster"
      sideimage="icons/roster" />
  </div>
</template>

<script>
import LeadLink from '@/components/02_molecules/LeadLink/index';

export default {
  name: 'ClubHouse',
  components: { LeadLink },
  data() {
    return {
      emblem: ''
    }
  },
  created() {
    this.emblem = this.$store.getters.getClub.emblem;
  }
}
</script>
