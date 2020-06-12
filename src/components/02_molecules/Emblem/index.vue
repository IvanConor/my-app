<template src="./template.html"></template>

<script>
import EmblemIcon from '@/components/01_atoms/Icons/EmblemIcon/index';
import Icon from '@/components/01_atoms/Icons/Icon/index';

export default {
  name: 'Emblem',
  components: { EmblemIcon, Icon },
  data() {
    return {
      emblem: '',
      iconPaths: {
        arrowLeft: require("@/assets/images/icons/arrow-left.svg"),
        arrowRight: require("@/assets/images/icons/arrow-right.svg")
      }
    }
  },
  methods: {
    changeSlide: function(direction) {
      let numString = this.emblem.replace( /^\D+/g, '');
      if(direction === 'left') {
        if(numString === '1') {
          numString = 6;
        }
        numString--;
        this.emblem = this.emblem.replace( /\d/g, numString);
      } else {
        if(numString === '5') {
          numString = 0;
        }
        numString++;
        this.emblem = this.emblem.replace( /\d/g, numString);
      }
      this.$emit('slideChange', this.emblem)
    },
  },
  created() {
    this.emblem = this.$store.getters.getEmblem
  }
}
</script>
