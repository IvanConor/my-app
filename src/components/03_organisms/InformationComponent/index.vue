<template src="./template.html"></template>

<script>
import EmblemIcon from '@/components/01_atoms/Icons/EmblemIcon/index';

export default {
  name: 'InformationComponent',
  components: { EmblemIcon },
  props: {
    leadText: String
  },
  computed: {
    getTeamChemistry: function () {
      return this.$store.getters.getTeamChemistry
    }
  }
}
</script>
