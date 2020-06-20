<template>
  <div class="router-view edit-club-page">
    <div class="club-name-wrapper">
      <h3>Club Name</h3>
      <input type="text" v-model="newClubName">
    </div>
    <Emblem
      @slideChange="updateEmblem" />
    <Button
      btnText="Save Changes"
      @buttonclick="saveChanges()" />
  </div>
</template>

<script>
import Emblem from '@/components/02_molecules/Emblem/index';
import Button from '@/components/01_atoms/Buttons/Button/index';

export default {
  name: 'EditClub',
  components: { Emblem, Button },
  data() {
    return {
      newClubName: '',
      newEmblem: '',
    }
  },
  methods: {
    saveChanges: function() {
      this.$store.dispatch('changeClubName', this.newClubName)
      .then(this.$store.dispatch('changeEmblem', this.newEmblem))
      .then(this.$router.push('club-house'));
    },
    updateEmblem: function(val) {
      this.newEmblem = val;
    }
  },
  created() {
    this.newClubName = this.$store.getters.getClubName
    this.newEmblem = this.$store.getters.getEmblem
  }
}
</script>
