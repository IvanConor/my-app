<template src="./template.html"></template>

<script>
export default {
  name: 'Icon',
  props: {
    source: String
  },
  methods: {
    emitClick: function() {
      this.$emit('iconclick')
    }
  }
}
</script>