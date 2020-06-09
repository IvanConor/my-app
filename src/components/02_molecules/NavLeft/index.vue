<template src="./template.html"></template>

<script>
import IconBtn from '@/components/01_atoms/Buttons/IconBtn/index';

export default {
  name: 'NavLeft',
  components: { IconBtn },
  props: {
    pageName: String
  },
  data() {
    return {
      imgReturn: require("@/assets/images/icons/return_white.svg"),
      imgHome: require("@/assets/images/icons/home_white.svg"),
      imgNotification: require("@/assets/images/icons/notification_white.svg")
    }
  },
  methods: {
    emitReturn: function() {
      this.$emit('goBack')
    }
  }
}
</script>

