<template src="./template.html"></template>

<script>
export default {
  name: 'LeadLink',
  props: {
    size: String,
    path: String,
    title: String,
    text: String,
    background: String,
    sideimage: String,
    sideimagetext: String
  },
  computed: {
    backgroundImage: function() {
      return require(`@/assets/images/backgrounds/${this.background}.jpg`);
    },
    sideImage: function() {
      return require(`@/assets/images/${this.sideimage}.svg`);
    }
  },
}
</script>
