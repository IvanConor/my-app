<template src="./template.html"></template>

<script>
export default {
  name: 'Emblem',
  data() {
    return {
      selectedEmblem: '',
      emblems: [
        { name: 'emblem-1', value: 'Emblem 1' },
        { name: 'emblem-2', value: 'Emblem 2' },
        { name: 'emblem-3', value: 'Emblem 3' },
        { name: 'emblem-4', value: 'Emblem 4' },
        { name: 'emblem-5', value: 'Emblem 5' }
      ]
    }
  },
  created() {
    this.selectedEmblem = this.$store.getters.getEmblem
  }
}
</script>
