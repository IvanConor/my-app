<template src="./template.html"></template>

<script>
import SvgIcon from '@/components/01_atoms/Icons/SvgIcon/index';

export default {
  name: 'Card',
  components: { SvgIcon },
  props: {
    type: String,
    level: Number,
    title: String,
    purpose: String,
  },
  computed: {
    iconType: function() {
      let typeStr;
      if(this.type === 'training') {
        typeStr = 'player'
      } else if(this.type === 'stamina') {
        if(this.level === 4) {
          typeStr = 'stamina-all'
        } else {
          typeStr = 'stamina-single'
        }
      } else if(this.type === 'upgrade') {
        if(this.purpose === 'training') {
          typeStr = 'player'
        } else if(this.purpose === 'pitch') {
          typeStr = 'field'
        } else if(this.purpose === 'gym') {
          typeStr = 'gym'
        } else if(this.purpose === 'match') {
          typeStr = 'calendar'
        } else {
          typeStr = 'upgrades'
        }
      } else {
        typeStr = 'cards'
      }
      return typeStr
    }
  },
}
</script>
