<template src="./template.html"></template>

<script>
export default {
  name: 'IconBtn',
  props: {
    source: String,
    classNames: String,
  },
  methods: {
    emitClick: function() {
      this.$emit('iconclick')
    }
  }
}
</script>

