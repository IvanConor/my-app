<template src="./template.html"></template>

<script>
export default {
  name: 'Achievement',
  props: {
    title: String,
    text: String,
    reward: Number,
    progressBar: Object,
    isComplete: Boolean
  },
  computed: {
    completedPercentage() {
      return 100 / Math.round(this.progressBar.goal / this.progressBar.current);
    }
  },
}
</script>
