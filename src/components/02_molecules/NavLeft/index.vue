<template src="./template.html"></template>

<script>
import SvgIcon from '@/components/01_atoms/Icons/SvgIcon/index';

export default {
  name: 'NavLeft',
  components: { SvgIcon },
  props: {
    pageName: String
  },
  computed: {
    notificationsOpened: function() {
      return this.$store.getters.getNotifications
    }
  },
  methods: {
    goBack: function() {
      this.$router.go(-1);
    },
    toggleNotifications: function() {
      if(this.notificationsOpened) {
        this.$store.dispatch('toggleNotifications', false)
      } else {
        this.$store.dispatch('toggleNotifications', true)
      }
    },
  },
  created() {
    this.$store.dispatch('toggleNotifications', false)
  }
}
</script>

