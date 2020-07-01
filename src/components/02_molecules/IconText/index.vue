<template src="./template.html"></template>

<script>
import SvgIcon from '@/components/01_atoms/Icons/SvgIcon/index';

export default {
  name: 'IconText',
  components: { SvgIcon },
  props: {
    iconName: String,
    bigText: String,
    smallText: String,
    classNames: String
  }
}
</script>
