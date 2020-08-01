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
}
</script>
