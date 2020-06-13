<template src="./template.html"></template>

<script>
import Button from '@/components/01_atoms/Buttons/Button/index';
import SvgIcon from '@/components/01_atoms/Icons/SvgIcon/index';

export default {
  name: 'ActionComponent',
  components: { Button, SvgIcon },
  data() {
    return {
      planeAnimation: false
    }
  },
  computed: {
    getTeamChemistry: function () {
      return this.$store.getters.getTeamChemistry
    }
  },
  methods: {
    goToTrainingCamp: function() {
      let self = this;
      this.planeAnimation = true;
      this.$store.dispatch('increaseTeamChemistry', 2);
      setTimeout(function() {
        self.planeAnimation = false;
      }, 2000)
    }
  }
}
</script>
