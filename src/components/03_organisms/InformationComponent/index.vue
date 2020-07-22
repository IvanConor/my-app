<template src="./template.html"></template>

<script>
import EmblemIcon from '@/components/01_atoms/Icons/EmblemIcon/index';
import SvgIcon from '@/components/01_atoms/Icons/SvgIcon/index';

export default {
  name: 'InformationComponent',
  components: { EmblemIcon, SvgIcon },
  props: {
    leadText: String,
    cards: Boolean,
    cash: Boolean,
    chemistry: Boolean,
    trophies: Boolean,
    team: Boolean
  },
  computed: {
    getTeamChemistry: function () {
      return this.$store.getters.getTeam.chemistry
    }
  }
}
</script>
