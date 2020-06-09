<template src="./template.html"></template>

<script>
import ReturnBtn from '@/components/01_atoms/Buttons/ReturnBtn/index';

export default {
  name: 'NavLeft',
  components: { ReturnBtn },
  props: {
    pageName: String
  },
  methods: {
    emitReturn: function() {
      this.$emit('goBack')
    }
  }
}
</script>

