<template src="./template.html"></template>

<script>
import Button from '@/components/01_atoms/Buttons/Button/index';
import SvgIcon from '@/components/01_atoms/Icons/SvgIcon/index';

export default {
  name: 'ActionComponent',
  components: { Button, SvgIcon },
  data() {
    return {
      planeFlying: false,
      planeOutside: false,
      planeLanding: false,
    }
  },
  computed: {
    getTeamChemistry: function () {
      return this.$store.getters.getTeam.chemistry
    }
  },
  methods: {
    goToTrainingCamp: function() {
      let self = this;
      this.planeFlying = true;
      this.$store.dispatch('increaseTeamChemistry', 0);
      setTimeout(function() {
        self.planeOutside = true;
        self.planeFlying = false;
      }, 1500)
      setTimeout(function() {
        self.planeLanding = true;
        self.planeOutside = false;
      }, 2000)
      setTimeout(function() {
        self.planeLanding = false;
      }, 3500)
    }
  }
}
</script>
