<template>
  <div class="router-view grid clubhouse-page">
    <LeadLink size="small" title="Player Training" path="training" sideimage="icons/training" text="Raise your players to a higher level by training them." :sideimagetext="this.$store.getters.getInTraining + '/' + this.$store.getters.getTrainingSlots" />
    <LeadLink size="big" title="Tactical Plan" path="tactics" :sideimage='"emblems/" + emblem' :sideimagetext="String(this.$store.getters.getTeamStrength)" />
    <LeadLink size="small" title="Exhibition" path="exhibition" sideimage="icons/exhibition" text="Play exhibition matches to test your tactics and earn rewards." />
    <LeadLink size="small" title="Club Upgrades" path="upgrades" sideimage="icons/upgrades" text="Upgrade components of your club to better your team and improve their results." />
    <LeadLink size="small" title="Training Camp" path="camp" sideimage="icons/field" text="Prepare your team for the next Division or competition match." />
    <LeadLink size="tiny" title="Edit Club" path="edit-club" :sideimage='"emblems/" + emblem' />
    <LeadLink size="tiny" title="Roster" path="roster" sideimage="icons/roster" />
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
    this.emblem = this.$store.getters.getEmblem;
  }
}
</script>
