<template src="./template.html"></template>

<script>
import IconBtn from '@/components/01_atoms/Icons/IconBtn/index';

export default {
  name: 'NavLeft',
  components: { IconBtn },
  props: {
    pageName: String
  },
  data() {
    return {
      imgPaths: {
        imgReturn: require("@/assets/images/icons/return_white.svg"),
        imgHome: require("@/assets/images/icons/home_white.svg"),
        imgNotification: require("@/assets/images/icons/notification_white.svg")
      },
      toggleNotifications: false
    }
  },
  methods: {
    goBack: function() {
      this.$router.go(-1);
    },
    showNotifications: function() {
      this.toggleNotifications = !this.toggleNotifications;
    }
  }
}
</script>

