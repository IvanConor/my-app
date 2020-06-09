<template src="./template.html"></template>

<script>
export default {
  name: 'ReturnBtn',
  methods: {
    emitClick: function() {
      this.$emit('return')
    }
  }
}
</script>

