<template src="./template.html"></template>

<script>
import Button from '@/components/01_atoms/Buttons/Button/index';
import SvgIcon from '@/components/01_atoms/Icons/SvgIcon/index';

export default {
  name: 'ActionComponent',
  components: { Button, SvgIcon },
  computed: {
    getTeamChemistry: function () {
      return this.$store.getters.getTeamChemistry
    }
  },
  methods: {
    goToTrainingCamp: function() {
      this.$store.dispatch('increaseTeamChemistry', 2);
    }
  }
}
</script>
