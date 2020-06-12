<template src="./template.html"></template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    icon: String,
    classNames: String
  },
  computed: {
    iconPath: function() {
      return require(`@/assets/images/icons/${this.icon}.svg`);
    }
  },
  methods: {
    emitClick: function() {
      this.$emit('iconclick')
    }
  }
}
</script>