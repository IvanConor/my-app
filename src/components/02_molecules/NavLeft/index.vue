<template src="./template.html"></template>

<script>
import SvgIcon from '@/components/01_atoms/Icons/SvgIcon/index';

export default {
  name: 'NavLeft',
  components: { SvgIcon },
  props: {
    pageName: String
  },
  methods: {
    goBack: function() {
      this.$router.go(-1);
    },
    showNotifications: function() {
      if(this.$store.getters.getNotifications === false) {
        this.$store.dispatch('showNotifications')
      } else {
        this.$store.dispatch('hideNotifications')
      }
    },
  },
  created() {
    this.$store.dispatch('hideNotifications')
  }
}
</script>

