<template src="./template.html"></template>

<script>
export default {
  name: 'Emblem',
  data() {
    return {
      selectedEmblem: '',
    }
  },
  methods: {
    emitSelect: function() {
      this.$emit('selectEmblem', this.selectedEmblem)
    }
  },
  created() {
    this.selectedEmblem = this.$store.getters.getEmblem
  }
}
</script>
