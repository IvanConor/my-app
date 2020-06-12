<template>
  <div class="router-view">
    <div class="club-name">
      <p>Club Name</p>
      <input type="text" v-model="newClubName">
    </div>
    <Emblem @slideChange="updateEmblem" />
    <button @click="saveChanges()">Save Changes</button>
  </div>
</template>

<script>
import Emblem from '@/components/02_molecules/Emblem/index';

export default {
  name: 'EditClub',
  components: { Emblem },
  data() {
    return {
      newClubName: '',
      emblem: '',
    }
  },
  methods: {
    saveChanges: function() {
      this.$store.dispatch('changeClubName', this.newClubName)
      .then(this.$store.dispatch('changeEmblem', this.emblem))
      .then(this.$router.push('club-house'));
    },
    updateEmblem: function(val) {
      this.emblem = val;
    }
  },
  created() {
    this.newClubName = this.$store.getters.getClubName
    this.emblem = this.$store.getters.getEmblem
  }
}
</script>
