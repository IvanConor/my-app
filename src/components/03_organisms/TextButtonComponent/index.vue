<template src="./template.html"></template>

<script>
import Button from '@/components/01_atoms/Buttons/Button/index';

export default {
  name: 'TextButtonComponent',
  components: { Button },
  props: {
    text: String,
    textBtn: String
  },
  methods: {
    emitClick: function() {
      this.$emit('buttonclick')
    }
  }
}
</script>
