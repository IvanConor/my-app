<template>
  <div class="router-view">
    <div class="club-name">
      <p>Club Name</p>
      <input type="text" v-model="newClubName">
    </div>
    <div class="emblem-change-wrapper">
      <div class="icon-wrapper icon-left">
        <Icon :source="iconPaths.arrowLeft" @iconclick="changeSlide('left')" />
      </div>
      <div class="icon-wrapper icon-right">
        <Icon :source="iconPaths.arrowRight" @iconclick="changeSlide('right')" />
      </div>
      <div class="emblem-container">
        <div class="svg-wrapper">
          <img :src="selectedEmblem" alt="">
        </div>
      </div>
      <Emblem />
    </div>
    <button @click="saveChanges()">Save Changes</button>
  </div>
</template>

<script>
import Icon from '@/components/01_atoms/Icons/Icon/index';
import Emblem from '@/components/02_molecules/Emblem/index';

export default {
  name: 'EditClub',
  components: { Icon, Emblem },
  data() {
    return {
      newClubName: '',
      emblem: '',
      emblemPaths: [
        require("@/assets/images/emblems/emblem-1.svg"),
        require("@/assets/images/emblems/emblem-2.svg"),
        require("@/assets/images/emblems/emblem-3.svg"),
        require("@/assets/images/emblems/emblem-4.svg"),
        require("@/assets/images/emblems/emblem-5.svg"),
      ],
      iconPaths: {
        arrowLeft: require("@/assets/images/icons/arrow-left.svg"),
        arrowRight: require("@/assets/images/icons/arrow-right.svg")
      }
    }
  },
  computed: {
    selectedEmblem: function () {
      let current = this.emblem.replace( /^\D+/g, '');
      return this.emblemPaths[current - 1];
    }
  },
  methods: {
    saveChanges: function() {
      this.$store.dispatch('changeClubName', this.newClubName)
      .then(this.$store.dispatch('changeEmblem', this.emblem))
      .then(this.$router.push('club-house'));
    },
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
    },
  },
  created() {
    this.newClubName = this.$store.getters.getClubName
    this.emblem = this.$store.getters.getEmblem
  }
}
</script>
