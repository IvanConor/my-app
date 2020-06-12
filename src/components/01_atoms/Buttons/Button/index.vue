<template src="./template.html"></template>

<script>
export default {
  name: 'Button',
  props: {
    btnText: String
  },
  methods: {
    emitClick: function() {
      this.$emit('buttonclick')
    }
  }
}
</script>