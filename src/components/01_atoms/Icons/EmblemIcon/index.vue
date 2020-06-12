<template src="./template.html"></template>

<script>
export default {
  name: 'EmblemIcon',
  props: {
    emblem: String
  },
  computed: {
    emblemPath: function() {
      return require(`@/assets/images/emblems/${this.emblem}.svg`);
    }
  },
}
</script>